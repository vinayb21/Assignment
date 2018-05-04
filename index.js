var http = require("http");
var express = require("express");
var app = express();
var mysql = require('sync-mysql');
var bodyParser = require('body-parser');

var con = new mysql({
  host: "localhost",
  user: "root",
  password: "pokemon",
  database: "vinay"
});

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

var server = app.listen(3000, "127.0.0.1", function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log("Server listening at "+host+" on port "+port);
});

app.get('/fetchComment', function(req, res) {
	setOutputToEmpty();
	var ans = getReplyComment(con, 0);
	ans = JSON.stringify(output);
	console.log(ans);
	res.end(ans);
});

app.post('/addComment', function(req, res) {
	var params = req.body;
	console.log(params);
	var comment_sender_name = '"'+req.body.comment_sender_name+'"';
	var comment = '"'+req.body.comment+'"';
	var nesting_level = '"'+req.body.nesting_level+'"';
	var parent_comment_id = '"'+req.body.parent_comment_id+'"';
	var query = 'INSERT INTO tablecomment(parent_comment_id, comment_sender_name, comment) VALUES('+parent_comment_id+', '+comment_sender_name+', '+comment+')';
	con.query(query);
	res.end(res.statusCode.toString());
});

app.put('/voteUp', function(req, res) {
	var params = req.body;
	console.log(params);
	var comment_id = '"'+req.body.comment_id+'"';
	var query = 'UPDATE tablecomment SET vote_up = vote_up + 1 WHERE comment_id='+comment_id;
	con.query(query);
	res.end("incremented vote_up for the chosen comment");
});

app.put('/voteDown', function(req, res) {
	var params = req.body;
	console.log(params);
	var comment_id = '"'+req.body.comment_id+'"';
	var query = 'UPDATE tablecomment SET vote_down = vote_down + 1 WHERE comment_id='+comment_id;
	con.query(query);
	res.end("incremented vote_down for the chosen comment");
});

var output = [];

function setOutputToEmpty()
{
	output = [];
}

function getReplyComment(con, parent_id)
{
  var query = "SELECT * from tablecomment WHERE parent_comment_id = "+parent_id+" ORDER BY comment_id ASC";
  var result = con.query(query);
  if(result==null)
  {
  	return;
  }
  else
  {
  	  var count = result.length;
	  for(var i=0;i<count;i++)
	  {
	  	output.push(result[i]);
	  	if(result[i]!=undefined)
	  	{
		  	var id = parseInt(result[i].comment_id);
		  	//console.log(id);
		  	getReplyComment(con, id);
	  	}
	  }
	  return output;
	}
}
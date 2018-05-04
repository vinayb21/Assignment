var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "pokemon",
  database: "vinay"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE IF NOT EXISTS tableComment (comment_id int(11) NOT NULL, parent_comment_id int(11) NOT NULL, comment varchar(300) NOT NULL, comment_sender_name varchar(40) NOT NULL, date timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, vote_up int(10) DEFAULT 0, vote_down int(10) DEFAULT 0, nesting_level int(10) DEFAULT 0)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
  sql = "ALTER TABLE tableComment ADD PRIMARY KEY (comment_id)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Primary key added");
  });
  sql = "ALTER TABLE tableComment MODIFY comment_id int(11) AUTO_INCREMENT";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Auto incrementing comment_id");
    con.end();
  });
});


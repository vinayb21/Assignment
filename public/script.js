var id;
var button = document.getElementById("submit");
var form = document.getElementById("form");
var userName = document.getElementById("comment_sender_name");
var comment = document.getElementById("comment");
var currentDate;
var oldDate;
var dateRes;
var diff;

function load_comment()
{
  var xmlhttp = new XMLHttpRequest();
  var element = document.getElementById("display_comment");
  var url = "http://localhost:3000/fetchComment";
  var count = 0;
  xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText);
      console.log(data);
      var content = '';
      for(var i =0; i<data.length; i++)
      {
        if(i>0)
        {
          if(data[i].parent_comment_id==data[i-1].comment_id)
            count++;
          else if(count>0)
            count--;
        }
        currentDate = new Date();
        currentDateMS = currentDate.getTime()/1000;
        oldDate = new Date(data[i].date);
        oldDateMS = oldDate.getTime()/1000;
        diff = currentDateMS-oldDateMS;
        console.log(diff);

        if(diff<60)
          ans = parseInt(diff)+" seconds ago";
        else if(diff<3600)
          ans = parseInt(diff/60)+" minutes ago";
        else if(diff<86400)
          ans = parseInt(diff/3600)+" hours ago";
        else if(diff<259200)
          ans = parseInt(diff/86400)+" days ago";
        else if(diff<31104000)
          ans = parseInt(diff/259200)+" months ago";
        else 
          ans = parseInt(diff/31104000)+" years ago";
    
        content = content + '<div class="panel panel-default" style="margin-left: '+(48*count)+'px">';
        content = content + '<div class="panel-heading"><b style="color:#5bc0de">'+data[i].comment_sender_name+'</b><span style="padding-left:15px">-</span><i style="padding-left:20px">'+ans+'</i></div>';
        content = content + '<div class="panel-body">'+data[i].comment+'</div>';
        content = content + '<div class="panel-footer" style="height:50px" ><button class="like noFocus" id="'+data[i].comment_id+'" onClick="voteUp(this.id)"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i></button><span style="padding-left:7px">'+data[i].vote_up+'</span><span style="padding-left:10px"></span><button class="dislike noFocus" id="'+data[i].comment_id+'" onclick="voteDown(this.id)"><i class="fa fa-thumbs-o-down" aria-hidden="true"></i></button><span style="padding-left:7px">'+data[i].vote_down+'</span><div align="right" style="margin-top:-32px"><button type="button" class="btn btn-info"  id="'+data[i].comment_id+'" onClick="setId(this.id)">Reply</button></div></div>';
        content = content + '</div>';
      }
      element.innerHTML = content;
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
  id = 0;
}

button.addEventListener("click", (e) => {
  e.preventDefault();
  if(userName.value=='' || comment.value=='')
    document.getElementById("error_block").innerHTML="<i>Fill both the username textbox and comment textbox.</i>";
  else
  {
    document.getElementById("error_block").innerHTML="";
    var xmlhttp = new XMLHttpRequest();
    var url = "http://localhost:3000/addComment";
    var data = '{"comment_sender_name":'+'"'+userName.value+'"'+',"comment":'+'"'+comment.value+'"'+',"parent_comment_id":'+id+'}';
    console.log(data);
    xmlhttp.open("POST",url,true);
    xmlhttp.setRequestHeader("content-type", "application/json");
    xmlhttp.send(data);
    id = 0;
    load_comment();
    userName.value='';
    comment.value='';
}
});


function setId(comment_id)
{
  if(comment_id!=0)
    id = comment_id;
  document.getElementById("comment_sender_name").focus();
  console.log(id);
}

function voteUp(commentId)
{
  console.log("vote up for comment_id: "+commentId);
  var xmlhttp = new XMLHttpRequest();
  var url = "http://localhost:3000/voteUp";
  var data = '{"comment_id":'+commentId+'}';
  console.log(data);
  xmlhttp.open("PUT", url, true);
  xmlhttp.setRequestHeader("content-type", "application/json");
  xmlhttp.send(data);
  load_comment();
}

function voteDown(commentId)
{
  console.log("vote down for comment_id: "+commentId);
  var xmlhttp = new XMLHttpRequest();
  var url = "http://localhost:3000/voteDown";
  var data = '{"comment_id":'+commentId+'}';
  console.log(data);
  xmlhttp.open("PUT", url, true);
  xmlhttp.setRequestHeader("content-type", "application/json");
  xmlhttp.send(data);
  load_comment();
}
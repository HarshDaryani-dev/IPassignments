const express = require("express");
const bodyParser = require("body-parser");
const request = require("request")
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("static"));
app.get("/", function(req, res){
  res.sendFile(__dirname + "/ip6.html");
})
app.post("/", function(req, res){
  loginid = req.body.logid;
  password = req.body.pass;
  if(loginid === "harsh" && password === "harsh") {
    res.sendFile(__dirname + "/ip6pass.html");
  } else {
    res.sendFile(__dirname + "/ip6fail.html");
  }

})

app.post("/f", function(req, res) {
  res.sendFile(__dirname + "/ip6.html");
})

app.listen(3000, function(){
  console.log("server is up & running on port 3000")
})

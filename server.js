var http = require("http");
var cors = require('cors')
var express = require('express');
var app = express()
app.use(cors())

app.get('/', function (req, res) {
 	 console.log(`${req.method} request for ${req.url}`);
	//res.header("Access-Control-Allow-Origin", "*");
  	//res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.writeHead(200, {"Content-Type": "text/html"});
	res.end('this is my response');
});

app.listen(3000);

console.log("File server running on port 3000");
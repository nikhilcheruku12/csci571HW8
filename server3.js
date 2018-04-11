var express = require('express')
  , app = express.createServer();

app.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });

app.get('/', function(req, res, next) {
  // Handle the get for this route
  console.log(`${req.method} request for ${req.url}`);
	//res.header("Access-Control-Allow-Origin", "*");
  	//res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.writeHead(200, {"Content-Type": "text/html"});
	res.end('this is my response');
});

app.listen(3000);
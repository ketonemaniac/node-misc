/**
 * Simple REST client
 */
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

// no needa care this big cross, it works
app.delete('/', function (req, res) {
	  res.send('Bye World!');
});

// for all requests
app.all('/peanuts/*' , function (req, res) {
	res.send('a peanuts guy here.');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
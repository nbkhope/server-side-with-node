// Require node modules
var express = require('express'),
    http = require('http');

// Server settings
var hostname = 'localhost';
var port = 3000;

// Call on Express
var app = express();

app.use(function(req, res, next) {
  // Print out the request headers
  console.log(req.headers);

  // Send a response
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<html><body><h1>Hello World</h1></body></html>');
});

// Create the server using Express app
var server = http.createServer(app);

server.listen(port, hostname, function() {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// Require node modules
var express = require('express');
// Morgan middleware
var morgan = require('morgan');

// Server settings
var hostname = 'localhost';
var port = 3000;

// Call on Express
var app = express();

// Morgan logs the HTTP requests to the console
app.use(morgan('dev'));

// Determine where to serve static files
app.use(express.static(__dirname + '/public'));

// Initiate server
app.listen(port, hostname, function() {
  console.log(`Server running at http://${hostname}:${port}/`);
});

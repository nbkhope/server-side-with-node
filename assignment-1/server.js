// Require node modules
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

// Server settings
var hostname = 'localhost';
var port = 3000;

// Call on Express
var app = express();

// Morgan logs the HTTP requests to the console
app.use(morgan('dev'));

// Express Routers
var dishRouter = require('./dishRouter');
var promoRouter = require('./promoRouter');
var leaderRouter = require('./leaderRouter');

// Apply the routers
app.use('/dishes', dishRouter);
app.use('/promotions', promoRouter);
app.use('/leadership', leaderRouter);

// Determine where to serve static files
app.use(express.static(__dirname + '/public'));

// Initiate server
app.listen(port, hostname, function() {
  console.log(`Server running at http://${hostname}:${port}/`);
});

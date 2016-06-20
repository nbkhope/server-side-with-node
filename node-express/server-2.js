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

// Express Router
var dishRouter = express.Router();
// Convert data coming in as JSON to a JavaScript object
dishRouter.use(bodyParser.json());

// Chained routes for /dishes
dishRouter.route('/')
// Gets called for each of the routes pertaining to /dishes
.all(function(req, res, next) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  next();
})
// Retrieves all the dishes
.get(function(req, res, next) {
  res.end('Here are all the dishes!');
})
// Create a new dish
.post(function(req, res, next) {
  res.end('We will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
})
// Delete all the dishes
.delete(function(req, res, next) {
  res.end('Deleting all the dishes...');
});

// Chained routes for /dishes/:dishId
dishRouter.route('/:dishId')
// Retrieve a specific dish
.get(function(req, res, next) {
  res.end('Here are the details of the dish: [id: ' + req.params.dishId + "]");
})
// Update a dish
.put(function(req, res, next) {
  res.write('Updating dish #' + req.params.dishId + "\n");
  res.end("We will update the dish: " + req.body.name + ' with details: ' + req.body.description);
})
// Delete a specific dish
.delete(function(req, res, next) {
  res.end('Deleting dish #' +req.params.dishId);
});

// Apply the dishRouter to anything to do with /dishes
app.use('/dishes', dishRouter);

// Determine where to serve static files
app.use(express.static(__dirname + '/public'));

// Initiate server
app.listen(port, hostname, function() {
  console.log(`Server running at http://${hostname}:${port}/`);
});

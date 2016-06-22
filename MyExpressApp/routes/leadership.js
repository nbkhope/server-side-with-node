module.exports = (function() {
  var express = require('express');
  var bodyParser = require('body-parser');

  // Create a router
  var router = express.Router();

  // Convert data coming in as JSON to a JavaScript object
  router.use(bodyParser.json());

  // Chained routes for /leadership
  router.route('/')
  // Gets called for each of the routes pertaining to /leadership
  .all(function(req, res, next) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    next();
  })
  // Retrieves all the leadership
  .get(function(req, res, next) {
    res.end('Here are all the leadership!');
  })
  // Create a new leadership
  .post(function(req, res, next) {
    res.end('We will add the leadership: ' + req.body.name + ' with details: ' + req.body.description);
  })
  // Delete all the leadership
  .delete(function(req, res, next) {
    res.end('Deleting all the leadership...');
  });

  // Chained routes for /leadership/:dishId
  router.route('/:leadershipId')
  // Retrieve a specific dish
  .get(function(req, res, next) {
    res.end('Here are the details of the leadership: [id: ' + req.params.leadershipId + "]");
  })
  // Update a dish
  .put(function(req, res, next) {
    res.write('Updating leadership #' + req.params.leadershipId + "\n");
    res.end("We will update the leadership: " + req.body.name + ' with details: ' + req.body.description);
  })
  // Delete a specific leadership
  .delete(function(req, res, next) {
    res.end('Deleting leadership #' + req.params.leadershipId);
  });

  return router;
})();

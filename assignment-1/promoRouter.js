module.exports = (function() {
  var express = require('express');
  var bodyParser = require('body-parser');

  // Create a router
  var router = express.Router();

  // Convert data coming in as JSON to a JavaScript object
  router.use(bodyParser.json());

  // Chained routes
  router.route('/')
  .all(function(req, res, next) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    next();
  })
  // Retrieves all the promotions
  .get(function(req, res, next) {
    res.end('Here are all the promotions!');
  })
  // Create a new promotion
  .post(function(req, res, next) {
    res.end('We will add the promotion: ' + req.body.name + ' with details: ' + req.body.description);
  })
  // Delete all the promotions
  .delete(function(req, res, next) {
    res.end('Deleting all the promotions...');
  });

  // Chained routes for /promotion/:promotionId
  router.route('/:promotionId')
  // Retrieve a specific promotion
  .get(function(req, res, next) {
    res.end('Here are the details of the promotion: [id: ' + req.params.promotionId + "]");
  })
  // Update a promotion
  .put(function(req, res, next) {
    res.write('Updating promotion #' + req.params.promotionId + "\n");
    res.end("We will update the promotion: " + req.body.name + ' with details: ' + req.body.description);
  })
  // Delete a specific promotion
  .delete(function(req, res, next) {
    res.end('Deleting promotion #' + req.params.promotionId);
  });

  return router;
})();

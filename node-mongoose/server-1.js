// Require modules
var mongoose = require('mongoose'),
    assert = require('assert');

// Require the dishes model
var Dishes = require('./models/dishes-1');

// Connection URL
var url = 'mongodb://localhost:27017/conFusion';
mongoose.connect(url);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('Connected correctly to the server');

  // Make a new dish
  var newDish = Dishes({
    name: "Uthapizza",
    description: "Test",
  });

  // Save the dish to the db
  newDish.save(function(err) {
    // Throw an error if any
    if (err) {
      throw err;
    }

    Dishes.find({}, function(err, dishes) {
      if (err) {
        throw err;
      }

      console.log(dishes);
      // Drop all the records and close the connection to the db
      db.collection('dishes').drop(function() {
        db.close();
      });
    });
  });
});

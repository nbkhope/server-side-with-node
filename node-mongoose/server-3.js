// Require modules
var mongoose = require('mongoose'),
    assert = require('assert');

// Require the dishes model
var Dishes = require('./models/dishes-3');

// Connection URL
var url = 'mongodb://localhost:27017/conFusion';
mongoose.connect(url);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('Connected correctly to the server');

  // Create a new dish
  // (does it right away instead of having to save it later)
  Dishes.create({
    name: "Uthapizza",
    description: "Test",
    comments: [
      {
        rating: 2,
        comment: "Well, what can I say about this dish?",
        author: "JJ Doe",
      }
    ]
  }, function(err, dish) {
    if (err) {
      throw err;
    }

    console.log("A dish was created!");
    console.log(dish);
    console.log("----------------------------------------");

    // Get the dish id
    var id = dish._id;

    // Pause for 3s before doing the update
    // (this was done to illustrate how updatedAt field changes everytime a record is updated)
    setTimeout(function() {
      Dishes.findByIdAndUpdate(id, {
        $set: {description: "Cheelicious!!"}
      }, { new: true })
      .exec(function(err, dish) {
        if (err) {
          throw err;
        }
        console.log("Updated a dish: ");
        console.log(dish);

        // Add new comments locally
        dish.comments.push({
          rating: 4,
          comment: "Not too bad. . .",
          author: "Some Dude",
        });

        // Save the dish to update the comments in the DB
        dish.save(function(err, dish) {
          console.log("Updated comments for dish");
          console.log(dish);
          console.log("----------------------------------------");

          db.collection('dishes').drop(function() {
            db.close();
          });
        });

      });
    }, 3000);

  });

});

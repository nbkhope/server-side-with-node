// Require Node modules
var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

// Database Connection URL
var url = 'mongodb://localhost:27017/conFusion';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  // Stops the app if an error was found
  assert.equal(err, null);
  console.log("Successfully connected to the server");

  // identify the collection
  var collection = db.collection("dishes");

  // insert a record into the collection
  collection.insertOne({
    name: "Uthapizza",
    description: "test",
  }, function(err, result) {
    assert.equal(err, null);

    console.log("After INSERT: ");
    console.log(result.ops);
    console.log();

    // Argument to find() is the filter value; {} means no filtering (all documents)
    // Convert result into an array of documents
    collection.find({}).toArray(function(err, docs) {
      assert.equal(err, null);

      console.log("Records found:");
      console.log(docs);
      console.log();

      // Clear up the database collection
      db.dropCollection("dishes", function(err, result) {
        assert.equal(err, null);
        // Close connection to the database
        db.close();
      });
    });
  });
});

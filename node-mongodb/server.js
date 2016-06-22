// Require Node modules
var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

// Require local module for db operations
var dboper = require('./operations');

// Database Connection URL
var url = 'mongodb://localhost:27017/conFusion';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  // Stops the app if an error was found
  assert.equal(err, null);
  console.log("Successfully connected to the server");

  dboper.insertDocument(db, {
    name: "Vadonut", description: "Some strange donut"
  }, "dishes", function(result) {
    console.log("Inserted document: ");
    console.log(result.ops);
    console.log("----------------------------------------");

    dboper.findDocuments(db, "dishes", function(docs) {
      console.log("All documents: ");
      console.log(docs);
      console.log("----------------------------------------");

      dboper.updateDocument(db, { name: "Vadonut" }, { description: "A delicious donut despite its name" }, "dishes", function(result) {
        console.log("Updated record: ");
        console.log(result.result);
        console.log("----------------------------------------");

        dboper.findDocuments(db, "dishes", function(docs) {
          console.log("All documents: ");
          console.log(docs);
          console.log("----------------------------------------");

          db.dropCollection("dishes", function(result) {
            console.log("Dropping collection. . . " + result);

            // Close database connection
            db.close();
          });
        });
      });
    });
  });
});

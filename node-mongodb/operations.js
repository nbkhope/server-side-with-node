var assert = require('assert');

exports.insertDocument = function(db, document, collection, callback) {
  // Get the collection
  var coll = db.collection(collection);

  coll.insert(document, function(err, result) {
    assert.equal(err, null);

    console.log("Inserted " + result.result.n + " documents into the collection " + collection);

    callback(result);
  });
};

exports.findDocuments = function(db, collection, callback) {
  // Get the collection
  var coll = db.collection(collection);

  // Retrieve all the documents for the collection
  coll.find({}).toArray(function(err, docs) {
    assert.equal(err, null);

    callback(docs);
  });
};

exports.removeDocument = function(db, document, collection, callback) {
  // Get the collection
  var coll = db.collection(collection);

  // Delete a document from the collection
  coll.deleteOne(document, function(err, result) {
    assert.equal(err, null);

    console.log("Remove the document " + document);

    callback(result);
  });
};

exports.updateDocument = function(db, document, update, collection, callback) {
  // Get the collection
  var coll = db.collection(collection);

  // Update the document
  coll.updateOne(document, { $set: update }, null, function(err, result) {
    assert.equal(err, null);

    console.log("Updated the document with ");
    console.log(update);
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

    callback(result);
  });
};

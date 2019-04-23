var MongoClient = require('mongodb').MongoClient;
var assert = require('assert')
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://127.0.0.1:27017/goa';

var insertDocument = function(db, callback) {
   db.collection('phones').insertOne( {
      "age": 11, 
      "id": "motorola-xoom-with-wi-fi", 
      "imageUrl": "img/phones/motorola-xoom-with-wi-fi.0.jpg", 
      "name": "Proverbs 19:11", 
      "tags": ["control","temper","respect","overlooking","wrong"],
      "snippet": "L\u00E2ng \u016B k\u0069\u00E0n-s\u0065k ch\u0069\u016B b\u00F4 kh\u006F\u00E0\u0069-kh\u006F\u00E0\u0069 s\u0069\u016B-kh\u00EC; S\u0069\u00E0-b\u0069\u00E1n l\u00E2ng \u00EA k\u00E8-s\u0069t ch\u0069\u016B-s\u012B \u0069 \u00EA \u00EAng-kng."
   }, function(err, result) {
    assert.equal(err, null);
    console.log("Inserted a document into the restaurants collection.");
    console.log(result);
    callback(result);
  });
};

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  insertDocument(db, function() {
      db.close();
  });
});
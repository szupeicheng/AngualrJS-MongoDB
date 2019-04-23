var MongoClient = require('mongodb').MongoClient;
var assert = require('assert')
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://127.0.0.1:27017/goa';

var findPhones = function(db, callback) {
   var cursor =db.collection('phones').find({tags:{$in:["woman","faith","praise"]}});
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
         console.dir(doc);
      } else {
         callback();
      }
   });
};

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  findPhones(db, function() {
      db.close();
  });
});
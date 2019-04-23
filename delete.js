var MongoClient = require('mongodb').MongoClient;
var assert = require('assert')
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://127.0.0.1:27017/goa';

var removeRestaurants = function(db, callback) {
   db.collection('phones').deleteOne(
      { "_id" : ObjectId("58787b85f83ee10444c52fe3") },
      function(err, results) {
         console.log(results);
         callback();
      }
   );
};

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);

  removeRestaurants(db, function() {
      db.close();
  });
});
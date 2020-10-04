const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');

let  Pet = require('./src/models/pet')

let url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("pet-graveyard");
  dbo.createCollection("pets", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});

const mondoDB = url + "pet-graveyard"

mongoose.connect(mondoDB, { useNewUrlParser: true });

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  console.log("connected")
});

var pet = new Pet({name: "a", age: 12, gender: "male", email: "l@gmail.com" })
console.log(pet);
pet.save(function (err) {
  if (err) return handleError(err);
  // saved!
});
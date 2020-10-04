let mongoose = require('mongoose');
let validator = require('validator');

let petSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  age: {
    type: Number,
    required: true,
  },

  gender: {
    type: String,
    required: true,
    enum: ["male", "female", "null"]
  },

  dob: Date,

  deathDay: {
    type: Date,
    // required: true,
  },

  message: {
    type: String,
  },

  image: Array,

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: (value) => {
      return validator.isEmail(value)
    }
  }
});

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;
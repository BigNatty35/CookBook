const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create a new Schema instance and pass it to the mongoose model!!
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

//The User Model represents the collection of users in the database
module.exports = User = mongoose.model('users', UserSchema);
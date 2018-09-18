const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EntrySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  
  directions: {
    type: String,
    required: true
  }
});
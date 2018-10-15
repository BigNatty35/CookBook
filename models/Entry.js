const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EntrySchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  text: {
    type: String,
    required: true
  },
  title: {
    type: String,
    // required: true
  },
  question: {
    type: Schema.Types.ObjectId,
    ref: 'questions'
  },
  date: {
    type: Date,
    default: Date.now
  }
});


module.exports = Entry = mongoose.model('entry', EntrySchema);
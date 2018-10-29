const mongoose = require('mongoose');
const db = require("../config/keys").mongoURI;

mongoose
.connect(db);
mongoose.connection.on('error', function () {
  console.error('MongoDB Connection Error. Make sure MongoDB is running.');
})
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  responses: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
      },
      entry: {
        type: String
      }
    }
  ] 
});

module.exports = Question = mongoose.model('question', QuestionSchema);
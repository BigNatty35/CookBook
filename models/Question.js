const mongoose = require('mongoose');
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
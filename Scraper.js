// Grab all of the a-tags from inside of the big tags
const Question = require('./models/Question');
const mongoose = require("mongoose");
const rp = require('request-promise');
const $ = require('cheerio');
const db = require("./config/keys").mongoURI;




const getQuestions = (url) => {
  return rp(url)
    .then(function(html) {
      //success!
      let arr = [];
      $('li > a', html).each(function(i, elem){ // grab all of the a-tags from the html
        if(i === 499) {
          return false;
        }
       arr[i] = $(this).text(); // push the text from a-tag into an array.
      });
      return arr; // returns an array of questions
    })
    .catch(function (err) {
      console.log(err);
    });
};

getQuestions(
  "https://learning.blogs.nytimes.com/2014/11/13/500-prompts-for-narrative-and-personal-writing/"
).then(questions => {
  
  questions = questions.map(question => {
    const newQuestion =  new Question({title: question});
    console.log(newQuestion);
    question = newQuestion;
    question.save();
  });
})
.catch(err => {
  console.log(err);
});

module.exports = getQuestions;
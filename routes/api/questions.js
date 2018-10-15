const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Question = require('../../models/Question');

// router.get('/', (req, res) => {
//   res.json({msg: 'success'});
// });

router.get("/test", (req, res) => res.json({ msg: "questions route is working" }));




// router.get('/all', passport.authenticate('jwt', {session: false}), (req, res) => {
//   Question.find()
//     .then(questions => {
//       res.json(questions);
//     })
//     .catch(err => res.status(404).json({noquestions: 'no questions were found'}));
// });

router.get('/all', (req, res) => {
  Question.find()
    .sort({ date: -1 })
    .then(posts => res.json(posts))
    .catch(err => res.status(404).json({ nopostsfound: 'No posts found' }));
});



router.post('/', passport.authenticate('jwt', {session: false}), (req, res) => {

  const newQuestion = new Question({
    title: req.body.title
  });

  newQuestion.save().then(question => res.json(question));
});

module.exports = router;
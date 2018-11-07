const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Question = require('../../models/Question');



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

router.get("/:id", (req, res) => {
  Question.findById(req.params.id)
    .then(entry => res.json(entry))
    .catch(err =>
      res.status(404).json({ noentryfound: "No entry found with that ID" })
    );
});



// grab 3 random questions
router.get('/', (req, res) => {
  Question.aggregate().sample(3)
    .then(questions => res.json(questions))
    .catch(err => {
      res.status(404).json({noquestionsfound: "No Questions"});
    });
});





module.exports = router;
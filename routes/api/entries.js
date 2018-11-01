const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Entry = require('../../models/Entry');
const Question = require('../../models/Question');
const validateEntryInput = require('../../validation/entries');

router.get('/', (req, res) => {
  Entry.find()
    .sort({ date: -1 })
    .then(entries => res.json(entries))
    .catch(err => res.status(404).json({ noentryfound: 'No entries found' }));
});

router.get('/:id', (req, res) => {
  Entry.findById(req.params.id)
    .then(entry => res.json(entry))
    .catch(err =>
      res.status(404).json({ noentryfound: 'No entry found with that ID' })
    );
});

router.post(
  '/:question_id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateEntryInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }
    
    Question.findById(req.params.question_id)
    .then(question => {
      
      if(!question) {
       return res.status(404).json({noquestion: 'no question found'});
      } 
      
      if(question.responses.filter(responder => responder.user.toString() === req.user.id).length > 0) {
         return res.status(400).json({answered: 'you already answered this question '});
        }  else {
          
          const response = {
            user: req.user.id,
            entry: req.body.text,
            title: question.title
          };
  
            question.responses.push(response);
            question.save().then(() => res.json({success: true}));
            
          const newEntry = new Entry({
            text: req.body.text,
            question: req.params.question_id,
            user: req.user.id
          });

          newEntry.save().then(entry => res.json(entry));
        }



    })
    .catch(err => res.json(err));

    
  }
);

module.exports = router;
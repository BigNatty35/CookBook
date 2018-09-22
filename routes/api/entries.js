const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Entry = require('../../models/Entry');
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
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateEntryInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newEntry = new Entry({
      text: req.body.text,
      title: req.body.title,
      user: req.user.id
    });

    newEntry.save().then(entry => res.json(entry));
  }
);

module.exports = router;
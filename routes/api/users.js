const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
// tells express router to make a get request to the test route.
// the response is a json object with a message.
router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));

module.exports = router;
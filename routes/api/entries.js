const express = require("express");
const router = express.Router();
// tells express router to make a get request to the test route.
// the response is a json object with a message.
router.get("/test", (req, res) => res.json({ msg: "This is the events route" }));

module.exports = router;
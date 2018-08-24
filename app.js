const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys');

mongoose
  .connect(db)
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));
  
app.get('/', (req, res) => res.send("Hello Carey!"));
// tell express what port to run on
const port = process.env.PORT || 5000;


app.listen(port, () => console.log(`Server is running on port:${port}`));
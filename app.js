const express = require('express');
const app = express();
const db = require('./config/keys').mongoURI;
const mongoose = require('mongoose');

// imported routes
const users = require("./routes/api/users");
const events = require("./routes/api/events");
const bodyParser = require('body-parser');

// connect to MongoDB using mongoose
mongoose
.connect("db")
.then(() => console.log("Connected to MongoDB successfully"))
.catch(err => console.log(err));

// tells express to use these new routes
app.use("/api/users", users);
app.use("/api/events", events);

app.get('/', (req, res) => res.send("Hello Baby!"));
app.get('/test', (req, res) => res.send("Hello BRO!"));

app.use(bodyParser.urlencoded({extented:false}));
app.use(bodyParser.json());
// tell express what port to run on
const port = process.env.PORT || 5000;

// tell Express to start a socket and listen for connections on the path.
app.listen(port, () => console.log(`Server is running on port ${port}`));
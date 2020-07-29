/*
  index.js

  Server to host workout API functions 
*/

const express = require("express"); 
const bodyParser = require("body-parser");
const cors = require("cors"); 
const config = require("./config.json");
const mongoose = require("mongoose"); 
const passport = require("passport"); 

const app = express(); 
const server = require("http").Server(app);

app.use(cors());
app.options("*", cors());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport setup for authenticating routes 
const User = require("./models/user.model"); 
app.use(passport.initialize()); 
app.use(passport.session()); 
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser()); 
passport.deserializeUser(User.deserializeUser()); 

// API route definitions 
const UserAPI = require("./app/routes/user.routes");
app.use("/api/user", UserAPI);

// Start listening for connections on the server 
const port = process.env.PORT || "4000";
server.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});

// Connect to MongoDB database
mongoose.connect(
  "mongodb://" + config.db.ip + ":" + config.db.port + "/workout",
  { user: config.db.username, pass: config.db.password }
);

process.on("SIGINT", function() {
  console.log("Severing MongoDB connection...");
  mongoose.connection.close(function () {
    console.log("Disconnected from MongoDB");
    process.exit(0);
  });
});

let db = mongoose.connection;
db.on("error", console.error.bind(console, "Mongoose Connection Error:"));
db.once("open", function() {
  console.log("Connected to database: " + config.db.ip + ":" + config.db.port);
}); 

/*
  index.js

  Server to host workout API functions 
*/

const express = require("express"); 
const bodyParser = require("body-parser");
const cors = require("cors"); 
const config = require("./config.json");
const mongoose = require("mongoose"); 

const app = express(); 
const server = require("http").Server(app);

app.use(cors());
app.options("*", cors());
app.use(bodyParser.json());

// API
const UserAPI = require("./routes/api/user");
app.use("/api/user", UserAPI);

const port = process.env.PORT || "4000";

// Start listening for connections on the server 
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

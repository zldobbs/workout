/*
  models/user.model.js

  Defines the User model and associated functions
*/

const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

// TODO Add additional fields
// - Followers 
// - Following 
// - Workouts 
// - Workout Plans 
// - Etc...

const UserSchema = mongoose.Schema({
  email: { type: String, unique: true },
  username: { type: String, unique: true },
  firstName: { type: String },
  lastName: { type: String }
});

// Plugins 
UserSchema.plugin(passportLocalMongoose); 

const User = module.exports = mongoose.model("User", UserSchema);
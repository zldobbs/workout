/*
  models/user.model.js

  Defines the User model and associated functions
*/

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const passport = require("passport");

// TODO Add additional fields
// - Followers 
// - Following 
// - Workouts 
// - Workout Plans 
// - Etc...

const UserSchema = mongoose.Schema({
  id: { type: String, unique: true },
  email: { type: String, unique: true, required: true },
  username: { type: String, unique: true, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true }
});

// Save user to database using bcrypt to generate password hash
UserSchema.pre(
  'save',
  async function (next) {
    const user = this;
    const hash = await bcrypt.hash(this.password, 10);

    this.password = hash;
  }
);

// Verify password against saved hash
UserSchema.methods.verifyPassword = async function (password) {
  const user = this;
  const compare = await bcrypt.compare(password, user.password); 

  return compare;
}

const User = module.exports = mongoose.model("User", UserSchema);
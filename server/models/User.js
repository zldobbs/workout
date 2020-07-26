/*
  models/User.js

  Defines the User model and associated functions
*/

const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    email: { type: String, unique: true },
    passHash: String,
    salt: String
});

const User = module.exports = mongoose.model("User", UserSchema);
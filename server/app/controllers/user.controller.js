/*
  app/controllers/user.controller.js

  Controller for user model
*/

const User = require("../../models/user.model");

module.exports = class UserController {
  
  // Ensure validity of user registration request 
  static async verifyUserRequest(
    {
      email = "", 
      username = "", 
      firstName = "",
      lastName = "",
      password = ""
    }
  ) {
    // Email check 
    let atSign = email.indexOf("@"); 
    if (atSign < 1) {
      return { status: false, error: "Invalid email format" };
    }
    else {
      let dot = email.indexOf(".");
      if (dot < atSign) {
        return { status: false, error: "Invalid email format" };
      }
    }

    // Length restriction checks
    if (username.length < 1 || username.length > 14  || 
        firstName.length < 1 || firstName.length > 28 || 
        lastName.length < 1 || lastName.length > 28 || 
        password.length < 1 ||  password.length > 28) {
      return { status: false, error: "Invalid field lengths" };
    }

    // Uniqueness checks
    const usernameCheck = await User.findOne({ username: username });
    if (usernameCheck) {
      return { status: false, error: "Username already in use" };
    }
    const emailCheck = await User.findOne({ email: email });
    if (emailCheck) {
      return { status: false, error: "Email already in use" };
    }

    return { status: true };
  }

  // Fetch a User's information based on their Id. 
  // TODO May need function for fetching "other" users. i.e. Not return all info about every user 
  static fetchUserByUsername(username) {
    return User.findOne({ username: username });
  }

  static fetchUserByEmail(email) {
    return User.findOne({ email: email });
  }
}
/*
  app/controllers/user.controller.js

  Controller for user model
*/

const User = require("../../models/user.model");

module.exports = class UserController {
  
  // Ensure validity of user registration request 
  static verifyUserRequest(
    {
      email = "", 
      username = "", 
      firstName = "",
      lastName = ""
    },
    password = "",
    confirmPassword = ""
  ) {
    // Email check 
    let atSign = email.indexOf("@"); 
    if (atSign < 1) {
      return false;
    }
    else {
      let dot = email.indexOf(".");
      if (dot < atSign) {
        return false; 
      }
    }

    // Length restriction checks
    if (username.length < 1 || username.length > 14  || 
        firstName.length < 1 || firstName.length > 28 || 
        lastName.length < 1 || lastName.length > 28 || 
        password.length < 1 ||  password.length > 28 ||
        confirmPassword.length < 1 || confirmPassword.length > 28) {
      return false; 
    }

    // Verify password is same 
    if (password !== confirmPassword) {
      return false; 
    }

    return true; 
  }

  // Fetch a User's information based on their Id. 
  // TODO May need function for fetching "other" users. i.e. Not return all info about every user 
  static fetchUserByUsername(username) {
    return User.findOne({ username: username });
  }
}
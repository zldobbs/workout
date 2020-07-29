/* 
  app/routes/user.routes.js

  Manage routes for user functionality 
*/

const express = require("express");
const passport = require("passport"); 
const User = require("../../models/user.model");
const UserController = require("../controllers/user.controller"); 
const router = express.Router();

router.get("/", (req, res) => {
  // TODO Return user's profile information. 
});

// Handle registration attempts
router.post("/register", (req, res) => {
  let userRequest = new User({ 
    email: req.body.email, 
    username: req.body.username,
    firstName: req.body.firstName, 
    lastName: req.body.lastName 
  });

  if (!UserController.verifyUserRequest(userRequest, req.body.password)) {
    res.status(400).json({
      message: "Invalid input data provided"
    });
    return; 
  }

  // Register a new user with passport 
  User.register(userRequest, req.body.password, (err, user) => {
    if (err) {
      res.status(400).json({
        message: "Unable to create new account",
        error: err,
        request: userRequest
      });
      return; 
    }

    passport.authenticate('local')(req, res, () => {
      res.json({
        message: "Authenticated!"
      });
    });
  });
});

// Handle login requests 
router.post("/login", passport.authenticate('local'), (req, res) => {
  res.json({
    message: "Authenticated!"
  });
});

module.exports = router;
/* 
  app/routes/user.routes.js

  Manage routes for user functionality 
*/

const express = require("express");
const passport = require("passport"); 
const router = express.Router();
const jwt = require("jsonwebtoken");

// Returns authenticated user information if signed in 
router.get("/", passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json({
    message: "Authenticated",
    user: req.user
  });
});

// Handle registration attempts
router.post("/register", async (req, res, next) => {
  passport.authenticate('register-local', async (err, user, info) => {
    try {
      if (err) {
        const error = new Error("Error occurred while registering");
        return next(error);
      }

      if (!user) {
        res.status(401).json(info);
      }
      else {
        res.json({
          message: "Registration successful",
          user: req.user
        });
      }
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
});

// Handle login requests 
router.post("/login", async (req, res, next) => {
  passport.authenticate('login-local', async (err, user, info) => {
    try {
      if (err) {
        const error = new Error("Error occurred while logging in");
        return next(error);
      }
      if (!user) {
        res.status(401).json(info);
      }
      else {
        req.login(user, { session: false }, async (error) => {
          if (error) return next(error);
  
          const body = { _id: user._id, email: user.email };
          // TODO Move token to config
          const token = jwt.sign({ user: body }, 'tonysoprano');
  
          return res.json({ token });
        });
      }
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
});

// Handle logout 
router.get("/logout", (req, res) => {
  req.logout();
  res.json({
    message: "Logged out"
  });
});

module.exports = router;
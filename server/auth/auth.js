const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;

const User = require("../models/user.model");
const UserController = require("../app/controllers/user.controller"); 

passport.use(
  new JWTStrategy(
    {
      // TODO Move key to config
      secretOrKey: 'tonysoprano',
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken()
    },
    async (token, done) => {
      try {
        return done(null, token.user); 
      } catch(error) {
        done(error);
      }
    }
  )
);

// TODO Make this work, duh
// Can passport use support an entire object instead of usernameField and passwordField
// Normally {usernameFiled: email, passwordField: password} would go after 'register', 
// If the entire object isn't supported, need to find some other way to save the user registration info (username, firstname, lastname, etc)
passport.use(
  'register-local',
  new LocalStrategy(
    {
      usernameField: "email", 
      passwordField: "password",
      passReqToCallback: true
    },
    async (req, username, password, done) => {
      try {
        const registerRequest = {
            email: req.body.email,
            username: req.body.username, 
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: req.body.password
        };

        // Validate registration information
        const registerCheck = await UserController.verifyUserRequest(registerRequest);
        if (!registerCheck.status) {
          return done(null, false, { message: registerCheck.error });
        }

        const user = await User.create(registerRequest);
        return done(null, user, { message: `Registered new user successfully: ${user.username}`}); 
      } catch (error) {
        return done(error, false, { message: "Server error" });
      }
    }
  )
);

passport.use(
  'login-local',
  new LocalStrategy(
    {
      usernameField: "email", 
      passwordField: "password",
      passReqToCallback: true
    },
    async (req, email, password, done) => {
      try {
        // Check for existing user with email provided
        const user = await User.findOne({ email });
        if (!user) {
          return done(null, false, { message: `Could not locate user with email ${email}`})
        }

        // Check for valid password
        const validPass = await user.verifyPassword(password);
        if (!validPass) {
          return done(null, false, { message: `Invalid password` });
        }

        return done(null, user, { message: `Successful login: ${user.email}` });
      } catch (error) {
        return done(error);
      }
    }
  )
);
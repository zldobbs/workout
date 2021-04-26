const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;

const config = require("../config.json"); 
const User = require("../models/user.model");
const UserController = require("../app/controllers/user.controller"); 

passport.use(
  new JWTStrategy(
    {
      secretOrKey: config.jwtkey,
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
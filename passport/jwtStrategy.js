const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

const User = require("../models/user.js");

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "omega";

passport.use(
  new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({ _id: jwt_payload.id }, function(err, user) {
      if (err) {
        return done(err, false);
      }
      return done(null, user || false);
    });
  })
);

'use strict';

import passport from 'passport';
import LocalStrategy from 'passport-local';
import User from '../models/user';

passport.use(new LocalStrategy((username, password, done) => {
  const message = 'Invalid username or password.';
  User.findOne({ username }, (findErr, user) => {
    if (findErr) return done(findErr);
    if (!user) return done(null, false, { message });
    user.comparePassword(password, (compareErr, isMatch) => {
      if (compareErr) return done(compareErr);
      if (!isMatch) return done(null, false, { message });
      return done(null, user);
    });
  });
}));

const authenticate = (strategy) => {
  const successRedirect = '/';
  const failureRedirect = '/login';
  const failureFlash = false;
  const afterAuthenticate = { successRedirect, failureRedirect, failureFlash };
  return passport.authenticate(strategy, afterAuthenticate);
};

module.exports = { authenticate };

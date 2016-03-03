'use strinct';
/* eslint-disable new-cap */
/* eslint-disable consistent-return */

import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const Schema = mongoose.Schema;
const SALT_WORK_FACTOR = 10;

const userSchema = new Schema({
  username: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true }
});

userSchema.pre('save', function preSave(next) {
  const user = this;
  if (!user.isModified('password')) next();
  bcrypt.genSalt(SALT_WORK_FACTOR, (saltErr, salt) => {
    if (saltErr) next(saltErr);
    bcrypt.hash(user.password, salt, (hashErr, hash) => {
      if (hashErr) next(hashErr);
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function comparePassword(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

module.exports = mongoose.model('User', userSchema);

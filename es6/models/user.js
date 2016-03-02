'use strinct';

import mongoose from 'mongoose';
/* eslint-disable new-cap */
const Schema = mongoose.Schema;
/* eslint-enable new-cap */

const userSchema = new Schema({
  name: { type: String, default: '' },
  email: { type: String, default: '' },
  provider: { type: String, default: '' },
  hashed_password: { type: String, default: '' },
  salt: { type: String, default: '' },
  authToken: { type: String, default: '' },
  facebook: {}
});

module.exports = mongoose.model('User', userSchema);

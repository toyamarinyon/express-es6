'use strinct';

import mongoose from 'mongoose';
/* eslint-disable new-cap */
const Schema = mongoose.Schema;
/* eslint-enable new-cap */

const reportSchema = new Schema({
  date: { type: Date, default: Date.now },
  title: { type: String, default: '', trim: true },
  lead: { type: String, default: '', trim: true },
  body: { type: String, default: '', trim: true },
  author: { type: Schema.ObjectId, ref: 'User' },
  score: { type: Number, default: 1 },
  point: {
    juice: { type: Number, default: 1 },
    pari: { type: Number, default: 1 },
    beer: { type: Number, default: 1 },
    garic: { type: Number, default: 1 },
    beauty: { type: Number, default: 1 }
  },
  location: { type: String, default: '', trim: true },
  tabelog: { type: String, default: '', trim: true },
  comments: [{
    body: { type: String, default: '' },
    user: { type: Schema.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now }
  }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Report', reportSchema);

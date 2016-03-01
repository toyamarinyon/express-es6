import mongoose from 'mongoose';
const Schema = mongoose.Schema();

const reportSchema = new Schema({
  date: Date,
  title: String,
  lead: String,
  body: String,
  author: String,
  score: Number,
  point: {
    juice: Number,
    pari: Number,
    beer: Number,
    garic: Number,
    beauty: Number
  },
  location: String,
  tabelog: String
});

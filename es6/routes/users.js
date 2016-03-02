import express from 'express';
import mongoose from 'mongoose';
import user from '../models/user.js';

/* eslint-disable new-cap */
const router = express.Router();
/* eslint-enable new-cap */
const User = mongoose.model('User');

/* GET users listing. */
router.get('/', (req, res) => {
  res.send('respond with a resource');
});

router.post('/new', (req, res) => {
  const user = new User(req.body);
  user.save((err) => {
    if (err) {
      res.send(err);
    }
    res.join({ message: 'User created!' });
  });
});

module.exports = router;

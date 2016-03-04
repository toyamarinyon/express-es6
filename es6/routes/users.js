/* eslint-disable new-cap */

import express from 'express';
import User from '../models/user.js';

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.send('respond with a resource');
});

router.post('/new', (req, res) => {
  const user = new User(req.body);
  user.save((saveErr) => {
    if (saveErr) return res.send(saveErr);
    req.login(user, (loginErr) => {
      if (loginErr) return res.send(loginErr);
      return res.json({ message: 'User created!' });
    });
  });
});

module.exports = router;

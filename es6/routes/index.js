import express from 'express';
/* eslint-disable new-cap */
const router = express.Router();
/* eslint-enable new-cap */

/* GET home page. */
router.get('/', (req, res) => {
  const title = 'Express';
  let user = 'Guest';
  if (req.user) {
    console.log(req.user);
    user = req.user;
  }
  res.render('index', { title, user });
});

module.exports = router;

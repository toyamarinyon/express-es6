import express from 'express';
/* eslint-disable new-cap */
const router = express.Router();
/* eslint-enable new-cap */

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

module.exports = router;

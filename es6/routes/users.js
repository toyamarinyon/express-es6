const express = require('express');
/* eslint-disable new-cap */
const router = express.Router();
/* eslint-enable new-cap */

/* GET users listing. */
router.get('/', (req, res) => {
  res.send('respond with a resource');
});

module.exports = router;

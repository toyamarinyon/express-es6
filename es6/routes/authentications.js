/* eslint-disable new-cap */

import express from 'express';
import authenticationHelper from '../helpers/authenticationHelper';

const router = express.Router();

router.post('/', authenticationHelper.authenticate('local'));

module.exports = router;


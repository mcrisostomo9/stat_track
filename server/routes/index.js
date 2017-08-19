const basketball = require('./basketball.js');


const express = require('express');
const router = express.Router();

router.use('/nba', basketball);

module.exports = router;
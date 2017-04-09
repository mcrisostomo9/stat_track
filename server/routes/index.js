const settings      = require('./settings.js');
  

const express       = require('express');
const router        = express.Router();

router.use('/settings', settings);

module.exports = router;
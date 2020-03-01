const echoController = require('../../controllers/apis/echo');
const authController = require('../../controllers/apis/auth');
const express = require('express');

let router = express.Router();
router.use('/echo', echoController);
router.use('/auth', authController);

module.exports = router;
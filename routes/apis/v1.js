const echoController = require('../../controllers/apis/echo');
const express = require('express');

let router = express.Router();
router.use('/echo', echoController);

module.exports = router;
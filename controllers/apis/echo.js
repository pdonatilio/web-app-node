const express = require('express');
const echoService = require('../../services/echo');

let router = express.Router();

router.get('/', echoService.getEcho);


module.exports = router;
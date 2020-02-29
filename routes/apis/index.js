const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('./swagger');

const v1ApiController = require('./v1');
//import * as specs from './swagger';

let router = express.Router();

router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

router.use('/v1', v1ApiController);

module.exports = router;
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  
  apis: ['./controllers/apis/*.js'],  
  swaggerDefinition: {  
    info: {
      description: 'Web API - Node js && Express',
      swagger: '2.0',
      title: 'WEB API - Tests',
      version: '1.0.0',
    },
    basePath: '/api/v1'
  } 
};

const specs = swaggerJsdoc(options);

module.exports = specs;
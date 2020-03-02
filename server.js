const server = require('./configs/app')();
const env = require('./configs/env');

//create the basic server setup 
server.create(env);

//start the server
server.start();
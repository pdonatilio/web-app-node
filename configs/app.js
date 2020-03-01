
const express = require('express');
const globalService = require('../services/global_services');
const bodyParser = require('body-parser');

module.exports = function () {
    let server = express(),
        create,
        start;

    create = (config) => {
        let routes = require('../routes');
        // set all the server things
        server.set('env', config.env);
        server.set('port', config.port);
        server.set('hostname', config.hostname);
        
        // add middleware to parse the json
        server.use(bodyParser.json());
        server.use(bodyParser.urlencoded({
            extended: false
        }));

        // Set up routes
        routes.init(server);
    };

    
    start = () => {
        let hostname = server.get('hostname'),
            port = server.get('port');
        server.listen(port, function () {
            let today = new Date();
            console.log('[INFO] - ' + globalService.getDateAmericaFormat() + ' Express server listening on - http://' + hostname + ':' + port);
        });
    };
    return {
        create: create,
        start: start
    };
};
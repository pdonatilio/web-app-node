const apiRoute = require('./apis');
const globalService = require('../services/global_services');

const init = (server) => {
    server.get('*', function (req, res, next) {
        console.log('[INFO] - ' + globalService.getDateAmericaFormat() + ' Request was made to: ' + req.originalUrl);
        return next();
    });
    
    server.use('/api', apiRoute);
}

module.exports = {
    init: init
};
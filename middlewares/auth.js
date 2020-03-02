const jwt = require('jsonwebtoken');
const globalService = require('../services/global_services');
const env = require('../configs/env');

const auth = (req, res, next) => {

  const token = req.headers.authorization;

  if(!token){
    return res.status(401).json({
      'date': globalService.getDateAmericaFormat(),
      'message': `Token not send`
    });
  }

  jwt.verify(token, env.jwt_secret_word, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        'date': globalService.getDateAmericaFormat(),
        'message': `Invalid Token`
      });
    }

    return next();
  });
  
}

module.exports = auth;
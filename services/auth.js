const globalService = require('./global_services');

const authentication = (user) => {

  let result = undefined;

  //TODO - Change this to login validation with real data
  if (user.email == "admin@admin" && user.password == "admin") {
  
    user.name = "admin";

    const token = globalService.generateToken(1);

    result = {
      'ok': true,
      'message': 'Login was successful',
      'data': {
        user,
        token
      }
    };

  }else{
    result = {
      'ok': false,
      'message': 'The login or password was incorrect',
      'data': null
    };
  }

  return result;
}

module.exports = {
  authentication: authentication
}
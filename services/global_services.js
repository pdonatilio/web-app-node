const jwt = require('jsonwebtoken');

const getDateAmericaFormat = (complement = "time") => {
  try {

    //2020-02-28
    const currentdate = new Date(); 

    let datetime = currentdate.getFullYear() + "-"
                  + (currentdate.getMonth()+1)  + "-"
                  + currentdate.getDate() + " ";

    if(complement === "time"){
      datetime = datetime
                + currentdate.getHours() + ":"
                + currentdate.getMinutes() + ":"
                + currentdate.getSeconds();
    }

    return datetime;

  } catch (error) {
    return '00/00/000'
  }
}

const getDateBrazilianFormat = (complement = "time") => {
  try {

        //28/02/2020
    const currentdate = new Date(); 
    let datetime =+ currentdate.getDate() + "/" 
                  + (currentdate.getMonth()+1)  + "/" 
                  + currentdate.getFullYear() + " ";

    if(complement === "time"){
        datetime = datetime
                  + currentdate.getHours() + ":"
                  + currentdate.getMinutes() + ":"
                  + currentdate.getSeconds();
    }

    return datetime;

  } catch (error) {
    return '00/00/000'
  }
}

const generateToken = (id) => {
  return jwt.sign({ id: id }, 'jwt_secret_word', { expiresIn: '1d' })  ;
}

module.exports = {
  getDateAmericaFormat: getDateAmericaFormat,
  getDateBrazilianFormat: getDateBrazilianFormat,
  generateToken: generateToken
};
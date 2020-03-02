const dotenv = require('dotenv');

dotenv.config();

let localConfig = {
  environment: process.env.NODE_ENV,
  port: process.env.PORT,
  hostname: process.env.hostname,
  jwt_secret_word: process.env.jwt_secret_word,
  jwt_expires: process.env.jwt_expires
};

module.exports = localConfig;
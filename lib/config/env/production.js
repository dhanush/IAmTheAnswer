'use strict';

module.exports = {
  env: 'production',
  mongo: {
    uri: process.env.MONGOLAB_URI ||
         process.env.MONGOHQ_URL ||
         'mongodb://iamtheanswer:IAmTheAn$w3r@oceanic.mongohq.com:10047/iamtheanswer'
  }
};
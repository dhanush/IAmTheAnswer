'use strict';

module.exports = {
  env: 'development',
  mongo: {
    uri: 'mongodb://localhost/iamtheanswer-dev'
  },
  
  facebook: {
      clientID: 'APP_ID',
      clientSecret: 'APP_SECRET',
      callbackURL: 'http://localhost:9000/auth/facebook/callback'
  },
  twitter: {
      clientID: 'CONSUMER_KEY',
      clientSecret: 'CONSUMER_SECRET',
      callbackURL: 'http://localhost:9000/auth/twitter/callback'
  },
  google: {
      clientID: '154052355325-dm893fv3f57nf86j758t0ftcjjgb0qps.apps.googleusercontent.com',
      clientSecret: '0R-6j1mqi1-8nx7b_kSAoxfv',
      callbackURL: 'http://localhost:9000/auth/google/callback'
  }
};
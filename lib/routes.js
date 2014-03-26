'use strict';

var api = require('./controllers/api'),
	dialogs = require('./controllers/dialogs'),
    index = require('./controllers'),
    users = require('./controllers/users'),
    passport = require('./config/passport'),
    session = require('./controllers/session');

var middleware = require('./middleware');

/**
 * Application routes
 */
module.exports = function(app) {

//  app.all('*', function(req, res, next){
//	  if (!req.get('Origin')) return next();
//	  // use "*" here to accept any origin
//	  res.set('Access-Control-Allow-Origin', '*');
//	  res.set('Access-Control-Allow-Methods', 'GET, POST');
//	  res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
//	  // res.set('Access-Control-Allow-Max-Age', 3600);
//	  if ('OPTIONS' == req.method) return res.send(200);
//	  next();
//	});
	  
  // Server API Routes
  app.get('/api/dialogs', dialogs.all);
  app.get('/api/dialogs/:id', dialogs.show);
  app.post('/api/dialogs', dialogs.create);
  
  app.get('/api/genres', api.genres);
  
  app.post('/api/users', users.create);
  app.put('/api/users', users.changePassword);
  app.get('/api/users/me', users.me);
  app.get('/api/users/:id', users.show);

  app.post('/api/session', session.login);
  app.del('/api/session', session.logout);

  
  
//// Setting the local strategy route
//app.post('/users/session', passport.authenticate('local', {
//    failureRedirect: '/signin',
//    failureFlash: true
//}), users.session);

// Setting the facebook oauth routes
//app.get('/auth/facebook', passport.authenticate('facebook', {
//    scope: ['email', 'user_about_me'],
//    failureRedirect: '/signin'
//}), users.signin);
//
//app.get('/auth/facebook/callback', passport.authenticate('facebook', {
//    failureRedirect: '/signin'
//}), users.authCallback);

//// Setting the twitter oauth routes
//app.get('/auth/twitter', passport.authenticate('twitter', {
//    failureRedirect: '/signin'
//}), users.signin);


//app.get('/auth/twitter', session.loginViaTwitter);
//
//app.get('/auth/twitter/callback',session.loginViaTwitterCB);

  app.get('/auth/twitter', passport.authenticate('twitter', {
		failureRedirect : '/login'
	}), users.signin)
	
	app.get('/auth/twitter/callback', passport.authenticate('twitter', {
		failureRedirect : '/login'
	}), users.authCallback)
  
//
// // Setting the google oauth routes
//app.get('/auth/google', passport.authenticate('google', {
//    failureRedirect: '/signin',
//    scope: [
//        'https://www.googleapis.com/auth/userinfo.profile',
//        'https://www.googleapis.com/auth/userinfo.email'
//    ]
//}), users.signin);
//
//app.get('/auth/google/callback', passport.authenticate('google', {
//    failureRedirect: '/signin'
//}), users.authCallback);
  
  // All undefined api routes should return a 404
  app.get('/api/*', function(req, res) {
    res.send(404);
  });
  
  // All other routes to use Angular routing in app/scripts/app.js
  app.get('/partials/*', index.partials);
  app.get('/*', middleware.setUserCookie, index.index);
  
  

  
};
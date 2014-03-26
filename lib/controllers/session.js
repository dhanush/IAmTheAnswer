'use strict';

var mongoose = require('mongoose'),
    passport = require('passport');

/**
 * Logout
 */
exports.logout = function (req, res) {
  req.logout();
  res.send(200);
};

/**
 * Login
 */
exports.login = function (req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    var error = err || info;
    if (error) return res.json(401, error);

    req.logIn(user, function(err) {
      
      if (err) return res.send(err);
      res.json(req.user.userInfo);
    });
  })(req, res, next);
};

exports.loginViaTwitter = function (req, res, next) {
//	passport.authenticate('twitter',  { failureRedirect: '/login'}, function (err, user, info) {
//		var error = err || info;
//	    if (error) return res.json(401, error);
//
//	    req.logIn(user, function(err) {
//	      
//	      if (err) return res.send(err);
//	      res.json(req.user.userInfo);
//	    });
//	})(req, res, next);
	
	passport.authenticate('twitter', {
	      failureRedirect: '/login'
	    });
}

exports.loginViaTwitterCB = function (req, res, next) {
	passport.authenticate('twitter', {
	    failureRedirect: '/login'
	})
}


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


//app.get('/auth/twitter', passport.authenticate('twitter',  { failureRedirect: '/login'}), function(req,res){
//    console.log("loggedin", {user : req.user});
//} );
//
//app.get('/auth/twitter/callback', , users.authCallback);


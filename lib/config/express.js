'use strict';

var express = require('express'),
    path = require('path'),
    config = require('./config'),
    passport = require('passport'),
    mongoStore = require('connect-mongo')(express);

/**
 * Express configuration
 */
module.exports = function(app) {
	
	var allowCrossDomain = function(req, res, next) {
	    res.header('Access-Control-Allow-Origin', '*');
	    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
	      
	    if ('OPTIONS' == req.method) {
	    	res.send(200);
	    }
	    else {
	    	next();
	    }
	};	
	
  app.configure('development', function(){
    app.use(require('connect-livereload')());

    // Disable caching of scripts for easier testing
    app.use(function noCache(req, res, next) {
      if (req.url.indexOf('/scripts/') === 0) {
        res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
        res.header('Pragma', 'no-cache');
        res.header('Expires', 0);
      }
      next();
    });

//    app.use(function(req, res, next) {
//    	res.header('Access-Control-Allow-Credentials', true);
//    	res.header('Access-Control-Allow-Origin', '*');
//    	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//    	res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
//    	if ('OPTIONS' == req.method) {
//    	     res.send(200);
//    	 } else {
//    	     next();
//    	 }
//    	});
    
    
    app.use(express.static(path.join(config.root, '.tmp')));
    app.use(express.static(path.join(config.root, 'app')));
//    app.use(express.errorHandler());
    app.use(express.errorHandler({dumpExceptions: true, showStack: true}));
    app.set('views', config.root + '/app/views');
  });

  app.configure('production', function(){
    app.use(express.favicon(path.join(config.root, 'public', 'favicon.ico')));
    app.use(express.static(path.join(config.root, 'public')));
    app.set('views', config.root + '/views');
  });

  app.configure(function(){
    app.engine('html', require('ejs').renderFile);
    app.set('view engine', 'html');
    app.use(express.logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded());
    app.use(express.methodOverride());
    app.use(express.cookieParser());
    app.use(express.cookieSession({ secret: 'secret', maxAge: 360*5 }));
    app.use(express.bodyParser());
    // Persist sessions with mongoStore
    app.use(express.session({
      secret: 'secret',
      store: new mongoStore({
        url: config.mongo.uri,
        collection: 'sessions',
        auto_reconnect: true 
      }
//      , function () {
//          console.log("db connection open");
//      }
      )
    }));

    //use passport session
    app.use(passport.initialize());
    app.use(passport.session());
    
    // This could be moved to view-helpers :-)
    app.use(function(req, res, next){
      res.locals.csrf_token = req.session._csrf
      next()
    })
    
    // Router needs to be last
    app.use(app.router);
  });
};
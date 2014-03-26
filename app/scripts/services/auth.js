'use strict';

angular.module('iamTheAnswerApp')
  .factory('Auth', function Auth($location, $rootScope, Session, User, $cookieStore, TwitterSession, $http) {
    
    // Get currentUser from cookie
    $rootScope.currentUser = $cookieStore.get('user') || null;
    $cookieStore.remove('user');

    
    function setCookie(httpService, currentRoute) {
        var deferred = $q.defer();
        // set the current route's needsLogin false so the 
        // interceptor doesn't catch this infinitely.
        currentRoute.needsLogin = false;

        if (!$cookies.userId) {
          return httpService.get('/see-if-user-is-logged-in-on-server')
            .success(function (user) {
              if (user) {
                $cookies.userId = user.id;
                deferred.resolve();
              } else {
                delete $cookies.userId;
                deferred.reject();
              }
            })
            .error(function (user) {
              deferred.reject();
            });
        }
      }

    
    return {

      /**
       * Authenticate user
       * 
       * @param  {Object}   user     - login info
       * @param  {Function} callback - optional
       * @return {Promise}            
       */
      login: function(user, callback) {
        var cb = callback || angular.noop;

        return Session.save({
          email: user.email,
          password: user.password
        }, function(user) {
          $rootScope.currentUser = user;
          return cb();
        }, function(err) {
          return cb(err);
        }).$promise;
      },

      loginViaTwitter: function(callback) {
    	  var cb = callback || angular.noop;
    	  
    	  TwitterSession.login(function(user){
//    		  $rootScope.currentUser = user;
              return cb();
    	  }, function(err) {
              return cb(err);
          });
      },
      
      /**
       * Unauthenticate user
       * 
       * @param  {Function} callback - optional
       * @return {Promise}           
       */
      logout: function(callback) {
        var cb = callback || angular.noop;

        return Session.delete(function() {
            $rootScope.currentUser = null;
            return cb();
          },
          function(err) {
            return cb(err);
          }).$promise;
      },

      /**
       * Create a new user
       * 
       * @param  {Object}   user     - user info
       * @param  {Function} callback - optional
       * @return {Promise}            
       */
      createUser: function(user, callback) {
        var cb = callback || angular.noop;

        return User.save(user,
          function(user) {
            $rootScope.currentUser = user;
            return cb(user);
          },
          function(err) {
            return cb(err);
          }).$promise;
      },

      /**
       * Change password
       * 
       * @param  {String}   oldPassword 
       * @param  {String}   newPassword 
       * @param  {Function} callback    - optional
       * @return {Promise}              
       */
      changePassword: function(oldPassword, newPassword, callback) {
        var cb = callback || angular.noop;

        return User.update({
          oldPassword: oldPassword,
          newPassword: newPassword
        }, function(user) {
          return cb(user);
        }, function(err) {
          return cb(err);
        }).$promise;
      },

      /**
       * Gets all available info on authenticated user
       * 
       * @return {Object} user
       */
      currentUser: function() {
        return User.get();
      },

      /**
       * Simple check to see if a user is logged in
       * 
       * @return {Boolean}
       */
      isLoggedIn: function() {
        var user = $rootScope.currentUser;
        return !!user;
      },
    };
  });
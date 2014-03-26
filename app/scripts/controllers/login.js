'use strict';

angular.module('iamTheAnswerApp')
  .controller('LoginCtrl', function ($scope, Auth, $location, $http) {
    $scope.user = {};
    $scope.errors = {};

    $scope.login = function(form) {
      $scope.submitted = true;
      
      if(form.$valid) {
        Auth.login({
          email: $scope.user.email,
          password: $scope.user.password
        })
        .then( function() {
          // Logged in, redirect to home
          $location.path('/');
        })
        .catch( function(err) {
          err = err.data;
          $scope.errors.other = err.message;
        });
      }
    };
    
    $scope.loginViaTwitter = function () {
    	
    	Auth.loginViaTwitter(function (data) {
    		console.log(data);
    	});
    }
  });
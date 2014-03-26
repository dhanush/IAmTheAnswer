'use strict';

angular.module('iamTheAnswerApp')
  .factory('TwitterSession', function ($http) {
//    return $resource('/auth/twitter/');
	  
	  return {
		  login : function (callback) {
			  $http.get('/auth/twitter/').success(function (data) {
				  callback(data);
			  });
		  }
	  }
  });

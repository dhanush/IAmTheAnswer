'use strict';

angular.module('iamTheAnswerApp')
  .controller('MainCtrl', function ($scope, $http) {
	  
	bindAllTextElements();
	  
    $http.get('/api/dialogs').success(function(dialogs) {
        $scope.dialogs = dialogs;
        console.log(dialogs)
      });
  });

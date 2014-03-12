'use strict';

angular.module('iamTheAnswerApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('/api/awesomeThings').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });
    $http.get('/api/dialogs').success(function(dialogs) {
        $scope.dialogs = dialogs;
      });
  });

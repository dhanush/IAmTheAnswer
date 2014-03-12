'use strict';

angular.module('iamTheAnswerApp')
  .controller('DialogsCtrl', function ($scope, $http) {
    $http.get('/api/dialogs').success(function(dialogs) {
      $scope.dialogs = dialogs;
    });
  });

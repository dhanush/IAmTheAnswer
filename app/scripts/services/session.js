'use strict';

angular.module('iamTheAnswerApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });

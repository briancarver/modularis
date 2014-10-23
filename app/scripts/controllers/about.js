'use strict';

/**
 * @ngdoc function
 * @name modularisApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the modularisApp
 */
angular.module('modularisApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

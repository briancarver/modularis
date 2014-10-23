'use strict';

/**
 * @ngdoc function
 * @name modularisApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the modularisApp
 */
angular.module('modularisApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

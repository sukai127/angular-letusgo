'use strict';

/**
 * @ngdoc function
 * @name angularLetusgoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularLetusgoApp
 */
angular.module('angularLetusgoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

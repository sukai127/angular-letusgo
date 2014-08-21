'use strict';

/**
 * @ngdoc function
 * @name angularLetusgoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularLetusgoApp
 */
angular.module('angularLetusgoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

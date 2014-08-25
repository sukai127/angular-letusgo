'use strict';

angular.module('angularLetusgoApp')
  .controller('MainCtrl', function ($scope) {
       $scope.$parent.highLight('active_index');
  });

'use strict';

angular.module('angularLetusgoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.$emit('parent_highLight_active','index');
  });

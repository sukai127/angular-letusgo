'use strict';

/**
 * @ngdoc function
 * @name angularLetusgoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularLetusgoApp
 */
angular.module('angularLetusgoApp')
  .controller('ResultCtrl', function ($scope) {
    $scope.cartItems = new Cart($scope.$parent.cart).cartItems;
    $scope.clearData = function(){
        Util.storage.removeStorageItem('cart');
        $scope.$parent.cart = null;
        $scope.$parent.totalCount = 0;
    };
  });

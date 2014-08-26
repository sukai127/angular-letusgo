'use strict';

/**
 * @ngdoc function
 * @name angularLetusgoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularLetusgoApp
 */
angular.module('angularLetusgoApp')
  .controller('ResultCtrl', function ($scope,CartService) {
    $scope.cartItems = CartService.create($scope.$parent.cart).cartItems;
    $scope.clearData = function(){
        Util.storage.removeStorageItem('cart');
        $scope.$parent.cart = null;
        $scope.$parent.totalCount = 0;
    };
  });

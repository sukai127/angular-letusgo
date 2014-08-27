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
    $scope.cartItems = $scope.$parent.cart.cartItems;
    $scope.getSubtotal = function(cartitem){
        return CartService.getSubtotal(cartitem);
    };
    $scope.clearData = function() {
        CartService.remove();
        $scope.$parent.cart = {};
        $scope.$parent.cart.len = 0;
    }
  });

'use strict';

angular.module('angularLetusgoApp')
    .controller('CartCtrl', function ($scope,CartService) {
        $scope.cart = CartService.get();
        $scope.$parent.highLight('active_cart');
        $scope.flag = $scope.cart.cartItems.length == 0;
        $scope.totalMoney = CartService.getTotalMoney($scope.cart);
        $scope.getSubtotal = function(cartitem){
            return CartService.getSubtotal(cartitem);
        };
        $scope.updateCount = function(){

            $scope.$parent.cart.len = CartService.getTotalCount($scope.cart);
            $scope.totalMoney = CartService.getTotalMoney($scope.cart);
            CartService.add($scope.cart);

        };
        $scope.deleteItem = function(index){
            $scope.cart.cartItems.splice(index,1);
            $scope.$parent.cart.len = CartService.getTotalCount($scope.cart);
            $scope.totalMoney = CartService.getTotalMoney($scope.cart);
            CartService.add($scope.cart);
            return false;
        };
    });



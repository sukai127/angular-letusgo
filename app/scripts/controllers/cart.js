'use strict';

angular.module('angularLetusgoApp')
    .controller('CartCtrl', function ($scope,CartService) {
        $scope.cartItems = $scope.$parent.cart.cartItems;
        $scope.$parent.highLight('active_cart');
        $scope.flag = $scope.cartItems ? false : true;
        $scope.totalMoney = CartService.getTotalMoney($scope.$parent.cart);
        $scope.getSubtotal = function(cartitem){
            return CartService.getSubtotal(cartitem);
        };
        $scope.updateCount = function(){

            $scope.$parent.cart.len = CartService.getTotalCount($scope.$parent.cart);
            $scope.totalMoney = CartService.getTotalMoney($scope.$parent.cart);
            CartService.add($scope.$parent.cart);

        }
        $scope.deleteItem = function(index){
            $scope.$parent.cart.cartItems.splice(index,1);
            $scope.$parent.cart.len = CartService.getTotalCount($scope.$parent.cart);
            $scope.totalMoney = CartService.getTotalMoney($scope.$parent.cart);
            CartService.add($scope.$parent.cart);
            return false;
        }
    });



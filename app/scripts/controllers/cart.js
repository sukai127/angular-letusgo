'use strict';

angular.module('angularLetusgoApp')
    .controller('CartCtrl', function ($scope,CartService) {
        $scope.cart = CartService.get();
        $scope.$emit('parent_highLight_active','cart');
        $scope.flag = $scope.cart.cartItems.length == 0;
        $scope.totalMoney = CartService.getTotalMoney($scope.cart);
        $scope.getSubtotal = function(cartitem){
            return CartService.getSubtotal(cartitem);
        };
        $scope.deleteItem = function(index){
            $scope.cart.cartItems.splice(index,1);
            return false;
        };
        $scope.$watch('cart',function(){
          $scope.totalMoney = CartService.getTotalMoney($scope.cart);
          CartService.add($scope.cart);
          $scope.$emit('parent_updateCount',$scope.cart);
        },true);
    });



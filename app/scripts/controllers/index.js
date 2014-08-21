'use strict';
/**
 * Created by sukai on 14-8-20.
 */
angular
    .module('angularLetusgoApp')
    .controller('IndexCtrl',function($scope){
        $scope.cart = Util.storage.getStorageItem('cart');
        if(!$scope.cart){
            $scope.cart = new Cart(null);
        }
        $scope.totalCount = $scope.cart.len;

        $scope.getSubtotal = function(cartitem){
            return cartitem.product.price * cartitem.count;
        };
        $scope.getTotalMoney = function(){
            var sum = 0;
            _.forEach($scope.cart.cartItems,function(cartitem){
                sum += $scope.getSubtotal(cartitem);
            });
            return sum;
        };

    })
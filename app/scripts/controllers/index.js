'use strict';
/**
 * Created by sukai on 14-8-20.
 */
angular
    .module('angularLetusgoApp')
    .controller('IndexCtrl',function($scope){
        $scope.cart = Util.storage.getStorageItem('cart') || new Cart(null);
//        if(!$scope.cart){
//            $scope.cart = new Cart(null);
//        }

        $scope.totalCount = $scope.cart.len;

        $scope.addCount = function(){
            if(!$scope.cart){
                $scope.cart = new Cart(null);
            }
            $scope.cart.len++;
            Util.storage.getStorageItem('cart',$scope.cart);
        };
        $scope.getTotalCount = function(){
            var sum = 0;
            _.forEach($scope.cart.cartItems,function(cartitem){
                sum += cartitem.count;
            });
            return sum;
        };
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
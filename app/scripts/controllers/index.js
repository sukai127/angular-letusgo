'use strict';
/**
 * Created by sukai on 14-8-20.
 */
angular
    .module('angularLetusgoApp')
    .controller('IndexCtrl',function($scope,CartService){
        $scope.cart = Util.storage.getStorageItem('cart') || CartService.create(null);

        $scope.totalCount = $scope.cart.len;
        $scope.addCount = function(){
            $scope.cart = Util.storage.getStorageItem('cart') || CartService.create(null);
            $scope.cart.len++;
            $scope.totalCount++;
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

        $scope.changeCount = function(){
            $scope.cart = Util.storage.getStorageItem('cart') || CartService.create(null);
            $scope.cart.len++;
            Util.storage.getStorageItem('cart',$scope.cart);
        };

        $scope.active_index = true;
        $scope.active_list = false;
        $scope.active_cart = false;

        $scope.highLight = function(highLightItem){
            var allItems = ['active_index','active_list','active_cart'];
            _.forEach(allItems,function(item){
               if(highLightItem === item){
                   eval('$scope.' + item + " = true");
               } else{
                   eval('$scope.' + item + " = false");
               }
            });
        }

    })

'use strict';
/**
 * Created by sukai on 14-8-20.
 */
angular
    .module('angularLetusgoApp')
    .controller('IndexCtrl',function($scope,CartService){
        $scope.cart = CartService.get();

        $scope.$on('parent_addCount',function(){
          $scope.cart = CartService.get();
          $scope.cart.len++;
          CartService.add($scope.cart);
        });
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

        $scope.$on('parent_highLight_active_cart',function(){
          $scope.highLight('active_cart');
        });
        $scope.$on('parent_highLight_active_list',function(){
          $scope.highLight('active_list');
        });
        $scope.$on('parent_highLight_active_index',function(){
          $scope.highLight('active_index');
        });
        $scope.$on('parent_updateCount',function(event,cart){
          cart.len = CartService.getTotalCount(CartService.get());
          $scope.cart.len = cart.len;
          CartService.add(cart);
        });
        $scope.$on('parent_clear',function(){
          $scope.cart = {cartItems: [],len:0};
        });
    })

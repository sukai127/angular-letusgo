'use strict';
/**
 * Created by sukai on 14-8-20.
 */
angular
    .module('angularLetusgoApp')
    .controller('IndexCtrl',function($scope,CartService){
        $scope.cart = CartService.get();

        $scope.addCount = function(){
            $scope.cart = CartService.get();
            $scope.cart.len++;
            CartService.add($scope.cart);
        };
        $scope.totalMoney = CartService.getTotalMoney($scope.cart);

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

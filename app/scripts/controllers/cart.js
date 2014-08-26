'use strict';

angular.module('angularLetusgoApp')
    .controller('CartCtrl', function ($scope,CartService) {
        $scope.cartItems = CartService.create($scope.$parent.cart).cartItems;
        $scope.$parent.highLight('active_cart');
        $scope.flag = $scope.cartItems.length ===0;
        $scope.updateCount = function(){
            Util.storage.add2Storage('cart',$scope.$parent.cart);
            $scope.$parent.totalCount = $scope.$parent.getTotalCount();
        }
        $scope.deleteItem = function(index){
            $scope.$parent.cart.cartItems.splice(index,1);
            Util.storage.add2Storage('cart',$scope.$parent.cart);
            $scope.$parent.totalCount = $scope.$parent.getTotalCount();
            return false;
        }
    });



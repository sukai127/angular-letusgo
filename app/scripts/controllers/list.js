'use strict';

/**
 * @ngdoc function
 * @name angularLetusgoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularLetusgoApp
 */
angular.module('angularLetusgoApp')
  .controller('ListCtrl', function ($scope,CartItemService,ProductService) {
    $scope.products = ProductService.loadAllProducts();
    $scope.$parent.highLight('active_list');
    $scope.add2Cart = function(product){
        $scope.$parent.addCount();
        var isOk = updateCount($scope.$parent.cart,product);
        if(isOk){
            $scope.$parent.cart.cartItems.push(CartItemService.create(product,1));
        }
        Util.storage.add2Storage('cart',$scope.$parent.cart);
    }
  });

function updateCount(cart,product){
    var flag = true;
    _.forEach(cart.cartItems,function(item){
        if(product.name == item.product.name){
            item.count++;
            flag = false;
        }
    });
    return flag;
}

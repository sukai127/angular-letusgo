'use strict';

/**
 * @ngdoc function
 * @name angularLetusgoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularLetusgoApp
 */
angular.module('angularLetusgoApp')
  .controller('ListCtrl', function ($scope,CartService,ProductService) {
    $scope.products = ProductService.loadAllProducts();
    $scope.cart = CartService.get();
    $scope.$emit('parent_highLight_active_list');
    $scope.add2Cart = function(product){
        $scope.$emit('parent_addCount');
        ProductService.add2Cart($scope.cart,product);
    }
  });

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
        ProductService.add2Cart($scope.$parent.cart,product);
    }
  });

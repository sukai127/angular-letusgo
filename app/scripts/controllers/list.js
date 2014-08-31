'use strict';

angular.module('angularLetusgoApp')
  .controller('ListCtrl', function ($scope,CartService,ProductService,CategoryManageService) {
    $scope.products = ProductService.loadAllProducts();
    $scope.cart = CartService.get();
    $scope.$emit('parent_highLight_active','list');
    $scope.add2Cart = function(product){
        $scope.$emit('parent_addCount');
        ProductService.add2Cart($scope.cart,product);
    }
    $scope.getCategoryName = function(id){
      return CategoryManageService.getCategoryNameById(id);
    }
  });

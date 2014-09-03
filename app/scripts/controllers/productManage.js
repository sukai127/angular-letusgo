'use strict';

angular.module('angularLetusgoApp')
  .controller('ProductManageCtrl', function ($scope,ProductManageService) {

    $scope.products = ProductManageService.loadAllProducts();
    $scope.$watch('products',function(){
      ProductManageService.add($scope.products);
    },true);

    $scope.remove = function(index){
      $scope.products.splice(index,1);
      return false;
    };
    $scope.$emit('parent_highLight_active','product');
    $scope.add = function(){
      var isOk = $scope.product.name && $scope.product.price && $scope.product.unit && $scope.product;
      if(!isOk){return;}
      $scope.products.push($scope.product);
      //$('.mymodal').modal('hide');
    };
  });

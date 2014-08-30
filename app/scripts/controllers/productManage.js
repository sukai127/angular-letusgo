'use strict';

angular.module('angularLetusgoApp')
  .controller('ProductManageCtrl', function ($scope,CategoryManageService,ProductManageService) {
    $scope.products = ProductManageService.loadAllProducts();
    $scope.categories = CategoryManageService.loadAllCategories();
    $scope.getCategoryName = function(id){
      return CategoryManageService.getCategoryNameById(id);
    }
    $scope.$watch('products',function(){
      ProductManageService.add($scope.products);
    },true);
    $scope.remove = function(index){
      $scope.products.splice(index,1);
      return false;
    };
    $scope.add = function(){
      var isOk = $scope.product.name&& $scope.product.price && $scope.product.unit && $scope.product;
      if(!isOk){return;}
      $scope.products.push($scope.product);
      $('.mymodal').modal('hide');
    };
  });

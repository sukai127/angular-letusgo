'use strict';

angular.module('angularLetusgoApp')
  .controller('CategoryManageCtrl', function ($scope,CategoryManageService) {
      $scope.categories = CategoryManageService.loadAllCategories();
      $scope.id = parseInt($scope.categories[$scope.categories.length-1].id);
      $scope.add = function(){
        if(!$scope.name){return;}
        var category = {};
        category.id = ++$scope.id;
        category.name = $scope.name;
        $scope.categories.push(category);
        $('.mymodal').modal('hide');
      };
      $scope.$emit('parent_highLight_active_category');
      $scope.remove = function(index){
        $scope.categories.splice(index,1);
      };
      $scope.$watch('categories',function(){
        CategoryManageService.add($scope.categories);
      },true);
  });

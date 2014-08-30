'use strict';

angular.module('angularLetusgoApp')
  .controller('CategoryManageCtrl', function ($scope,CategoryManageService) {
      $scope.categories = CategoryManageService.loadAllCategories();
      var id = parseInt($scope.categories[$scope.categories.length-1].id);
      $scope.add = function(){
        if(!$scope.name){return;}
        var category = {};
        category.id = ++id;
        category.name = $scope.name;
        $scope.categories.push(category);
        $('.mymodal').modal('hide');
      };
      $scope.remove = function(index){
        $scope.categories.splice(index,1);
      };
      $scope.$watch('categories',function(){
        CategoryManageService.add($scope.categories);
      },true);
  });

'use strict';

describe('Controller: ListCtrl', function () {

  var createController,$controller,$scope,categories,categoryManageService;

  beforeEach(function(){
    module('angularLetusgoApp');
    inject(function ($injector) {
      $scope = $injector.get('$rootScope').$new();
      $controller = $injector.get('$controller');
      categoryManageService = $injector.get('CategoryManageService');
    });

    createController = function(){
      return $controller('CategoryManageCtrl', {
        $scope: $scope,
        CategoryManageService: categoryManageService
      });
    };
    categories = [
      {id : 1, name: 'grocery'},
      {id : 2, name: 'device'}
    ];
  });

  it('should init success', function () {
    spyOn(categoryManageService,'loadAllCategories').andReturn(categories);
    createController();
    expect($scope.id).toBe(2);
    expect($scope.categories.length).toBe(2);
    expect($scope.categories[1].id).toBe(2);
  });

  it('should add() work', function () {
    createController();
    $scope.add();
    expect($scope.categories.length).toBe(2);
  });

  it('should remove() work', function () {
    createController();
    $scope.remove(1);
    expect($scope.categories.length).toBe(1);
  });

});

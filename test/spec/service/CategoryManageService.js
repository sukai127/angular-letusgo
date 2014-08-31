'use strict';

describe('Service: ProductService', function () {

    var localStorageService,categoryManageService,categories;
    beforeEach(function(){
        module('angularLetusgoApp');
        inject(function ($injector) {
            localStorageService = $injector.get('localStorageService');
            categoryManageService = $injector.get('CategoryManageService');
        });
        categories = [
          {id : 1, name: 'grocery'},
          {id : 2, name: 'device'}
        ];
    });

    it('should loadAllCategories() work  when get() is OK', function () {
        spyOn(localStorageService,'get').andReturn(categories);
        var result = categoryManageService.loadAllCategories();
        expect(result.length).toEqual(2);
        expect(result[1].name).toBe('device');
    });
    it('should loadAllCategories() work with get() return null', function () {
      spyOn(localStorageService,'get').andReturn(null);
      spyOn(localStorageService,'add');
      var result = categoryManageService.loadAllCategories();
      expect(localStorageService.add.calls.length).toBe(1);
      expect(result[1].name).toBe('device');
    });
    it('should add() work', function () {
      spyOn(localStorageService,'add');
      categoryManageService.add(categories);
      expect(localStorageService.add.calls.length).toBe(1);
    });
    it('should getCategoryNameById() work', function () {
      spyOn(categoryManageService,'loadAllCategories').andReturn(categories);
      var result = categoryManageService.getCategoryNameById(2);
      expect(result).toBe('device');
      result = categoryManageService.getCategoryNameById(3);
      expect(result).toBe(3);
    });

});

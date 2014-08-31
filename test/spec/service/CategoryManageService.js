'use strict';

describe('Service: ProductService', function () {

    var localStorageService,categoryManageService,categories,products;
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
        products = [
          {name: 'Instant_noodles', unit: 'bag', category: '1', price: 1},
          {name: 'apple', unit: 'kg', category: '1', price: 2.5},
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
    it('should isIncludeProduct() work', function () {
      spyOn(localStorageService,'get').andReturn(products);
      var result = categoryManageService.isIncludeProduct(1);
      expect(result).toBe(true);
      result = categoryManageService.isIncludeProduct(3);
      expect(result).toBe(false);
    });

});

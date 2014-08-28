'use strict';

describe('Service: CartService', function () {

  var localStorageService,CartService;
  beforeEach(function(){
      module('angularLetusgoApp');
      inject(function ($injector) {
          localStorageService = $injector.get('localStorageService');
          CartService = $injector.get( 'CartService' );
      })
  });

  it('should result.length equal 0', function () {
      spyOn(localStorageService,'get').and.returnValue({});
      expect(CartService.get().length).toBe(1);
  });
});

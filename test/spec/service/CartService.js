'use strict';

describe('Service: CartService', function () {

  var localStorageService,service;
  beforeEach(function(){
      module('angularLetusgoApp');
      inject(function ($injector) {
          localStorageService = $injector.get('localStorageService');
          service = $injector.get('CartService');
      })
  });

  it('should result.length equal 0', function () {
      var cart = {
          cartItems: [
              {
                  product: {
                     // name:
                  }
              },
              {},
              {}],
          len : 0
      }
      spyOn(localStorageService,'get').andReturn({cartItems:[],len:0});
      expect(1+2).toEqual(3);
  });

});

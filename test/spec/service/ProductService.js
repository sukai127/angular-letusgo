/**
 * Created by sukai on 14-8-28.
 */
'use strict';

xdescribe('Service: ProductService', function () {

    var localStorageService,productService,cartService,cart;
    beforeEach(function(){
        module('angularLetusgoApp');
        inject(function ($injector) {
            localStorageService = $injector.get('localStorageService');
            productService = $injector.get('ProductService');
            cartService = $injector.get('CartService');
        });
    });

    it('should get() work', function () {
        var result = productService.loadAllProducts();
        expect(result.length).toEqual(5);
        expect(result[2].name).toBe('coca_cola');
    });

  it('when it not exist should push it', function () {
    cart = {cartItems: [],len: 0};
    var product = {name : 'fan', unit : 'piece', category : 'device', price : 30};
    productService.add2Cart(cart,product);
    expect(cart.cartItems[0].product.name).toEqual('fan');
    expect(cart.len).toBe(1);
  });

  it('when it exist should count++', function () {
    var product = {name : 'fan', unit : 'piece', category : 'device', price : 30};
    productService.add2Cart(cart,product);
    expect(cart.cartItems.length).toBe(1);
    expect(cart.cartItems[0].count).toEqual(2);
    expect(cart.len).toBe(2);
  });

});

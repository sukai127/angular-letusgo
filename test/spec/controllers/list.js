'use strict';

describe('Controller: ListCtrl', function () {

  var createController,$controller,cart,cartService,productService,$scope,products;

  beforeEach(function(){
    module('angularLetusgoApp');
    inject(function ($injector) {
      $scope = $injector.get('$rootScope').$new();
      $controller = $injector.get('$controller');
      cartService = $injector.get('CartService');
      productService = $injector.get('ProductService');
    });

    createController = function(){
      return $controller('ListCtrl', {
        $scope: $scope,
        CartService: cartService,
        ProductService: productService
      });
    }
     products = [
      {name : 'Instant_noodles', unit : 'bag', category : 'grocery', price : 1},
      {name : 'apple', unit : 'kg', category : 'grocery', price : 2.5}
      ];
    cart = {
      cartItems: [
        {
          product: {name : 'Instant_noodles', unit : 'bag', category : 'grocery', price : 1},
          count : 4
        },
        {
          product: {name : 'coca_cola', unit : 'bottle', category : 'grocery', price : 0.5},
          count : 3
        },
        {
          product: {name : 'kettle', unit : 'piece', category : 'device', price : 43.5},
          count : 1
        }
      ],
      len : 8
    };
    spyOn(productService,'loadAllProducts').andReturn(products);
    spyOn(cartService,'get').andReturn(cart);
    spyOn($scope,'$emit');
  });

  it('should init success', function () {

    createController();
    expect($scope.cart.cartItems.length).toBe(3);
    expect($scope.products.length).toBe(2);
    expect($scope.products[1].name).toBe('apple');
    expect($scope.$emit).toHaveBeenCalled();
  });
  it('should add2Cart work', function () {
      createController();
      $scope.add2Cart(products[0]);
      expect($scope.$emit).toHaveBeenCalled();
      expect($scope.cart.cartItems.length).toBe(3);
  });
});

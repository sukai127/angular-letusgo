'use strict';

describe('Controller: IndexCtrl', function () {

  beforeEach(module('angularLetusgoApp'));

  var createController,$controller,$scope,cartService,cart,$rootScope;

  beforeEach(inject(function ($injector) {
    $rootScope = $injector.get('$rootScope');
    $scope = $injector.get('$rootScope').$new();
    $controller = $injector.get('$controller');
    cartService = $injector.get('CartService');
    createController = function(){
      return $controller('IndexCtrl', {
        $scope: $scope,
        CartService: cartService
      });
    }
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
  }));

  it('should init work', function () {
    spyOn(cartService,'get').andReturn(cart);
    createController();
    expect($scope.cart.cartItems.length).toBe(3);
  });

  it('should on_parent_addCount event trigger', function () {
    spyOn(cartService,'get').andReturn(cart);
    spyOn(cartService,'add');
    createController();
    $rootScope.$broadcast('parent_addCount');
    expect($scope.cart.len).toBe(9);
    expect($scope.active_index).toEqual(true);
    expect($scope.active_list).toEqual(false);
    expect(cartService.add).toHaveBeenCalled();
  });
  it('should highLight trigger', function () {
    createController();
    $scope.highLight('active_list');
    expect($scope.active_index).toEqual(false);
    expect($scope.active_list).toEqual(true);
    $scope.highLight('active_cart');
    expect($scope.active_cart).toEqual(true);
  });

  it('should on_parent_highLight_active_* event trigger', function () {
    createController();
    $rootScope.$broadcast('parent_highLight_active_list');
    expect($scope.active_list).toEqual(true);
    expect($scope.active_cart).toEqual(false);
    $rootScope.$broadcast('parent_highLight_active_cart');
    expect($scope.active_cart).toEqual(true);
  });

  it('should on_parent_clear event trigger', function () {
    createController();
    $rootScope.$broadcast('parent_clear');
    expect($scope.cart.len).toEqual(0);
    expect($scope.cart.cartItems.length).toEqual(0);
  });

  it('should on_parent_updateCount event trigger', function () {
    spyOn(cartService,'getTotalCount').andReturn(8);
    createController();
    $rootScope.$broadcast('parent_updateCount',cart);
    expect(cartService.getTotalCount.calls.length).toEqual(1);
    expect($scope.cart.len).toEqual(8);
  });

});

'use strict';
angular.module('angularLetusgoApp')
    .service('ProductManageService',function(localStorageService){
      this.loadAllProducts = function(){
        var products = [
          {name : 'Instant_noodles', unit : 'bag', category : '1', price : 1},
          {name : 'apple', unit : 'kg', category : '1', price : 2.5},
          {name : 'coca_cola', unit : 'bottle', category : '1', price : 0.5},
          {name : 'kettle', unit : 'piece', category : '2', price : 43.5},
          {name : 'fan', unit : 'piece', category : '2', price : 30}
        ];
        var temp = localStorageService.get('products');
        return temp ? temp : (localStorageService.add('products',products),products);
      };
      this.add = function(products){
          localStorageService.add('products',products);
      };
    });

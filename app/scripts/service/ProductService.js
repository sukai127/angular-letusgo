'use strict';

angular.module('angularLetusgoApp')
    .service('ProductService',function(CartItemService,localStorageService,CartService){
        this.loadAllProducts = function(){
            return localStorageService.get('products') || [];
        };
        this.add2Cart = function(cart,product){
            var isOk = function (){
                var flag = true;
                _.forEach(cart.cartItems,function(item){
                    if(product.name == item.product.name){
                        item.count++;
                        flag = false;
                    }
                });
                return flag;
            };
            if(isOk()){
                cart.cartItems.push(CartItemService.create(product,1));
            }
            cart.len = CartService.getTotalCount(cart);
            localStorageService.add('cart',cart);
        };
    });

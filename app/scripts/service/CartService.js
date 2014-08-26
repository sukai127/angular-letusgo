/**
 * Created by sukai on 14-8-14.
 */
angular.module('angularLetusgoApp')
    .service('CartService',function(){
        this.create = function(cart){
            if(cart){
                return {cartItems:cart.cartItems,len:cart.len};
            }else{
                return {cartItems:[],len:0};
            }
        };
    });


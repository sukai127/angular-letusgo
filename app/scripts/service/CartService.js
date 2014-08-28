/**
 * Created by sukai on 14-8-14.
 */
angular.module('angularLetusgoApp')
    .service('CartService',function(localStorageService){
        this.create = function(){
           return {cartItems:[],len:0};
        };
        this.get = function(){
            return localStorageService.get('cart') || this.create();
        }
        this.add = function(cart){
            localStorageService.add('cart',cart);
        }
        this.getTotalMoney = function(cart){
            var sum = 0;
            _.forEach(cart.cartItems,function(cartitem,index){
                if(cartitem.count <= 0){
                    cart.cartItems.splice(index,1);
                }else{
                    sum += cartitem.product.price * cartitem.count;
                }
            });
            return sum;
        };
        this.getTotalCount = function(cart){
            var sum = 0;
            _.forEach(cart.cartItems,function(cartitem){
                sum += cartitem.count;
            });
            return sum;
        };
        this.getSubtotal = function(cartitem){
            return (cartitem.product.price * cartitem.count).toFixed(2);
        };
        this.remove = function(){
            localStorageService.remove('cart');
        };
    });


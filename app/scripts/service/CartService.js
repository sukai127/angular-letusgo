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
        this.get = function(){
            return Util.storage.getStorageItem('cart') || this.create(null);
        }
        this.add = function(cart){
            Util.storage.add2Storage('cart',cart);
        }
        this.getTotalMoney = function(cart){
            var sum = 0;
            _.forEach(cart.cartItems,function(cartitem){
                sum += cartitem.product.price * cartitem.count;
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
            Util.storage.removeStorageItem('cart');
        };
    });


/**
 * Created by sukai on 14-8-14.
 */
function Cart(cart){
    if(cart){
        this.cartItems = cart.cartItems;
        this.len = cart.len;
    }else{
        this.cartItems = [];
        this.len = 0;
    }

}


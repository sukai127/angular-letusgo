angular.module('angularLetusgoApp')
    .service('ProductService',function(CartItemService){
        this.create = function(name,unit,category,price){
            return {name : name, unit : unit, category : category, price : price};
        };
        this.loadAllProducts = function(){
            return [
                {name : 'Instant_noodles', unit : 'bag', category : 'grocery', price : 1},
                {name : 'apple', unit : 'kg', category : 'grocery', price : 2.5},
                {name : 'coca_cola', unit : 'bottle', category : 'grocery', price : 0.5},
                {name : 'kettle', unit : 'piece', category : 'device', price : 43.5},
                {name : 'fan', unit : 'piece', category : 'device', price : 30}
            ];
        };
        this.add2Cart = function(cart,product){
            var isOk = function (cart,product){
                var flag = true;
                _.forEach(cart.cartItems,function(item){
                    if(product.name == item.product.name){
                        item.count++;
                        flag = false;
                    }
                });
                return flag;
            };
            if(isOk){
                cart.cartItems.push(CartItemService.create(product,1));
            }
            Util.storage.add2Storage('cart',cart);
        };
    });

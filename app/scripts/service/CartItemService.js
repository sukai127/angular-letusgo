angular.module('angularLetusgoApp')
    .service('CartItemService',function(){
        this.create = function(product,count){
            return {product : product, count : count};
        };
        this.getPrice = function(){
            return this.product.price;
        };
        this.getSubtotal = function(){
            return this.getPrice() * this.count;
        }
    });
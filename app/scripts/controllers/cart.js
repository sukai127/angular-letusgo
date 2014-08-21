'use strict';

/**
 * @ngdoc function
 * @name angularLetusgoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularLetusgoApp
 */
angular.module('angularLetusgoApp')
    .controller('CartCtrl', function ($scope) {
        $scope.cartItems = new Cart($scope.$parent.cart).cartItems;
        $scope.flag = $scope.cartItems.length ===0;
        $scope.updateCount = function(cartitem){
            console.log(cartitem);
        }
        $scope.deleteItem = function(cartitem){
            return false;
        }
    });

function changeCount(oldcart,cartitem,number){

    var cart = new Cart(oldcart);
    _.forEach(cart.cartItems,function(item){
        if(item.product.name === cartitem.product.name){
            cart.len = cart.len - item.count + number;
            item.count = number;
            item = new CartItem(item.product,item.count);
            // $('#'+name).text(item.getSubtotal());
        }
    });
//    cart = new Cart(cart);
//    $('#buy').text('Total : $' +cart.getTotalMoney()+", And Pay it Now >>>");
//    $('#cart').text('Cart(' + cart.getCount() + ')');
    Util.storage.add2Storage('cart',cart);
}


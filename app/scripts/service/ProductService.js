
function loadAllProducts(){
    return [
        {name : 'Instant_noodles', unit : 'bag', category : 'grocery', price : 1},
        {name : 'apple', unit : 'kg', category : 'grocery', price : 2.5},
        {name : 'coca_cola', unit : 'bottle', category : 'grocery', price : 0.5},
        {name : 'kettle', unit : 'piece', category : 'device', price : 43.5},
        {name : 'fan', unit : 'piece', category : 'device', price : 30}
    ];
};

angular.module('angularLetusgoApp')
    .service('ProductService',function(){
        this.create = function(name,unit,category,price){
            return {name : name, unit : unit, category : category, price : price};
        };
    });

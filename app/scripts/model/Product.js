/**
 * Created by sukai on 14-8-14.
 */
function Product(name,unit,category,price){
    this.name = name;
    this.unit = unit;
    this.category = category;
    this.price = price;
}

function getProductByName(name){
    var products = loadAllProducts();
    var result = null;
    _.forEach(products,function(product){
        if(product.name === name) {
            result = product;
        }
    });
    return result;
}

function loadAllProducts(){
    return [
        new Product('Instant_noodles','bag','grocery',1.00),
        new Product('apple','kg','grocery',2.50),
        new Product('coca_cola','bottle','grocery',0.50),
        new Product('kettle','piece','device',43.5),
        new Product('fan','piece','device',30.0)
    ];
};

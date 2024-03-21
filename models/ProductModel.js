const fs = require('fs');

class ProductModel {
    constructor() {
        this.products = JSON.parse(fs.readFileSync('public/products.json'));
    }

    getProductBySku(sku) {
        return this.products.find(product => product.sku === sku);
    }
}

module.exports = ProductModel;

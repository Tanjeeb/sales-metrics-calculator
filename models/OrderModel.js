const fs = require('fs');

class OrderModel {
    constructor() {
        this.orders = JSON.parse(fs.readFileSync('public/orders.json'));
    }

    getAllOrders() {
        return this.orders;
    }
}

module.exports = OrderModel;

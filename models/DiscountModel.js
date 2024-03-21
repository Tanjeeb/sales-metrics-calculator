const fs = require('fs');

class DiscountModel {
    constructor() {
        this.discounts = JSON.parse(fs.readFileSync('public/discounts.json'));
    }

    getDiscountByKey(key) {
        return this.discounts.find(discount => discount.key === key);
    }
}

module.exports = DiscountModel;

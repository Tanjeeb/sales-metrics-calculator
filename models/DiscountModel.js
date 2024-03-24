const fs = require('fs');

class DiscountModel {
    constructor() {
        this.discounts = JSON.parse(fs.readFileSync('public/discounts.json'));
    }

    getDiscountByKeys(keys) {
        const discounts = keys.map(key => {
            const discount = this.discounts.find(discount => discount.key === key);
            return discount ? discount.value : 0;
        });
        return discounts.reduce((total, value) => total + value, 0);
    }
}

module.exports = DiscountModel;

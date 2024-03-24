// SalesController.js
const ProductModel = require('../models/ProductModel');
const OrderModel = require('../models/OrderModel');
const DiscountModel = require('../models/DiscountModel');

const productModel = new ProductModel();
const orderModel = new OrderModel();
const discountModel = new DiscountModel();

class SalesController {
    getTotalSales() {
        const orders = orderModel.getAllOrders();
        let totalSales = 0;
        orders.forEach(order => {
            order.items.forEach(item => {
                const product = productModel.getProductBySku(item.sku);
                if (product) {
                    totalSales += product.price * item.quantity;
                }
            });
        });
        return totalSales;
    }

    getTotalSalesAfterDiscount() {
        const orders = orderModel.getAllOrders();
        let totalSalesAfterDiscount = 0;
        orders.forEach(order => {
            const discountKeys = order.discount ? order.discount.split(',') : [];
            const totalDiscount = discountModel.getDiscountByKeys(discountKeys);
            order.items.forEach(item => {
                const product = productModel.getProductBySku(item.sku);
                if (product) {
                    totalSalesAfterDiscount += (product.price * item.quantity) * (1 - totalDiscount);
                    //console.log('withdiscount',totalSalesAfterDiscount);
                }
            });
        });
        return totalSalesAfterDiscount;
    }

    getTotalLostAmount() {
        const orders = orderModel.getAllOrders();
        let totalLostAmount = 0;
        orders.forEach(order => {
            const discountKeys = order.discount ? order.discount.split(',') : [];
            const totalDiscount = discountModel.getDiscountByKeys(discountKeys);
            order.items.forEach(item => {
                const product = productModel.getProductBySku(item.sku);
                if (product) {
                    totalLostAmount += (product.price * item.quantity) * totalDiscount;
                }
            });
        });
        return totalLostAmount;
    }

    getAverageDiscount() {
        const orders = orderModel.getAllOrders();
        let totalDiscount = 0;
        let totalCustomers = 0;
        orders.forEach(order => {
            const discountKeys = order.discount ? order.discount.split(',') : [];
            const totalDiscountPercentage = discountModel.getDiscountByKeys(discountKeys) * 100;
            if (totalDiscountPercentage > 0) {
                totalDiscount += totalDiscountPercentage;
                totalCustomers++;
            }
        });
        //console.log('total customers:',totalCustomers);
        if (totalCustomers === 0) return 0;
        return totalDiscount / totalCustomers;
    }
}

module.exports = SalesController;

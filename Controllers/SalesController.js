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
            let discount = 0;
            if (order.discount) {
                const discountValue = discountModel.getDiscountByKey(order.discount)?.value;
                if (discountValue) {
                    discount = discountValue;
                }
            }
            order.items.forEach(item => {
                const product = productModel.getProductBySku(item.sku);
                if (product) {
                    totalSalesAfterDiscount += (product.price * item.quantity) * (1 - discount);
                }
            });
        });
        return totalSalesAfterDiscount;
    }

    getTotalLostAmount() {
        const orders = orderModel.getAllOrders();
        let totalLostAmount = 0;
        orders.forEach(order => {
            if (order.discount) {
                const discountValue = discountModel.getDiscountByKey(order.discount)?.value;
                if (discountValue) {
                    order.items.forEach(item => {
                        const product = productModel.getProductBySku(item.sku);
                        if (product) {
                            totalLostAmount += (product.price * item.quantity) * discountValue;
                        }
                    });
                }
            }
        });
        return totalLostAmount;
    }

    getAverageDiscount() {
        const orders = orderModel.getAllOrders();
        let totalDiscount = 0;
        let totalCustomers = 0;
        orders.forEach(order => {
            if (order.discount) {
                const discountValue = discountModel.getDiscountByKey(order.discount)?.value;
                if (discountValue) {
                    totalDiscount += discountValue;
                    totalCustomers++;
                }
            }
        });
        if (totalCustomers === 0) return 0;
        return (totalDiscount / totalCustomers) * 100;
    }
}

module.exports = SalesController;

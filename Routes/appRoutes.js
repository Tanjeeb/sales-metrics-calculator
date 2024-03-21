const express = require('express');
const SalesController = require("../Controllers/SalesController");
const router = express.Router();
const salesController = new SalesController();

router.get('/', (req, res) => {
    const totalSales = salesController.getTotalSales();
    const totalSalesAfterDiscount = salesController.getTotalSalesAfterDiscount();
    const totalLostAmount = salesController.getTotalLostAmount();
    const averageDiscount = salesController.getAverageDiscount();

    res.render('../views/index', { pageTitle: 'Home',
        appName: 'My Sales App',
        totalSales,
        totalSalesAfterDiscount,
        totalLostAmount,
        averageDiscount

    });
});
module.exports = router;
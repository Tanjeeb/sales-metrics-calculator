const express = require('express');
const SalesController = require("../Controllers/SalesController");
const router = express.Router();

const salesController = new SalesController();


router.get('/total-sales', (req, res) => {
    const totalSales = salesController.getTotalSales();
    res.json({ totalSales });
});

router.get('/total-sales-after-discount', (req, res) => {
    const totalSalesAfterDiscount = salesController.getTotalSalesAfterDiscount();
    res.json({ totalSalesAfterDiscount });
});

router.get('/total-lost-amount', (req, res) => {
    const totalLostAmount = salesController.getTotalLostAmount();
    res.json({ totalLostAmount });
});

router.get('/average-discount', (req, res) => {
    const averageDiscount = salesController.getAverageDiscount();
    res.json({ averageDiscount });
});

module.exports = router;
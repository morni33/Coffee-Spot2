// route handler using Express.js
const express = require('express');
const router = express.Router();
const CoffeeShop = require('./models/coffeeShop');
const Drink = require('./models/drink');

// GET all coffee shops
router.get('/coffee-shop2', async (req, res) => {
    try {
        const coffeeShops = await CoffeeShop.find();
        res.json(coffeeShops);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET all drinks
router.get('/drinks', async (req, res) => {
    try {
        const drinks = await Drink.find();
        res.json(drinks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;

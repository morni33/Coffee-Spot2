const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define schema for coffee shop locations
const locationSchema = new Schema({
    name: String,
    address: String,
    city: String,
    state: String,
    // Other location properties as needed
});

// Define schema for types of drinks
const drinkSchema = new Schema({
    name: String,
    description: String,
    // Other drink properties as needed
});

// Define models based on schemas
const Location = mongoose.model('Location', locationSchema);
const Drink = mongoose.model('Drink', drinkSchema);

module.exports = { Location, Drink };

const { Location, Drink } = require('./models');

// Create a new coffee shop location
const newLocation = new Location({
    name: 'Futuro',
    address: '123 Main St',
    city: 'Anytown',
    state: 'AZ',
});
newLocation.save();

// Create a new type of drink
const newDrink = new Drink({
    name: 'Latte',
    description: 'Espresso with steamed milk',
});
newDrink.save();

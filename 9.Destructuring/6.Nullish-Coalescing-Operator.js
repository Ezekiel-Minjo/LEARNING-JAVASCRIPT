const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20: 00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2},and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },
};

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish are: null and undefined
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

/* 
// Nullish Coalescing Operator (??)

// Before: using OR (||) to set default values
// Problem: 0 or '' are considered falsy, so defaults get used incorrectly
// Example:
const guests = restaurant.numGuests || 10; // 0 would give 10, which is wrong

// Solution: Nullish Coalescing Operator (??)
// Only treats null and undefined as "nullish" (ignores 0 and '')
// Example:
const guestsCorrect = restaurant.numGuests ?? 10;

// Works as expected:
// If numGuests = 0 --> guestsCorrect = 0
// If numGuests = undefined --> guestsCorrect = 10

// Nullish values: null and undefined only
// Good when 0 or '' are valid values that we want to keep
*/

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
// 1. Destructuring

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);
const [pizza, , Risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, Risotto, otherFood);

// objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2. Functions
// rest parameters
const add = function (...numebers) {
  let sum = 0;
  for (let i = 0; i < numebers.length; i++) sum += numebers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('Mushrooms', 'onions', 'olives', 'spinach');
restaurant.orderPizza('Mushrooms');

/**  🟢 Rest Pattern & Rest Parameters — Summary
 * The rest syntax (...) looks exactly like spread, but does the opposite: it collects elements into an array.
 * ✅ In arrays (destructuring)
 * ✅ In objects (destructuring)
 * ✅ In functions (rest parameters)
 * You can also mix fixed and rest parameters
 * ⚡ Spread vs Rest
 * Spread = expand values into individual elements (where we write values separated by commas).
 * Rest   = collect multiple elements into one array (where we write variable names separated by commas).
 **/

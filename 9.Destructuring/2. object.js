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
};
// call a function and pass objects of options
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

// destructuring objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// changing variables names to be diffrent from the properties names
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// set default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables while destructuring objects
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj); // wrap this in paranthesis

// nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
/*
🔎 Object Destructuring in JavaScript — Summary

✅ Basic concept
- Use curly braces {} to extract properties from an object into variables.
- Order doesn't matter (unlike arrays), but variable names must match property names.

✅ Renaming variables
- Use colon syntax to assign a new local variable name:
  const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;

✅ Default values
- Provide fallback values if a property doesn't exist:
  const { menu = [], starterMenu: starters = [] } = restaurant;

✅ Mutating existing variables
- To reassign (mutate) already declared variables from an object, wrap in parentheses:
  ({ a, b } = obj);

✅ Nested destructuring
- Useful to extract nested properties in one step:
  const { fri: { open, close } } = openingHours;

✅ Functions with destructured parameters
- Functions can immediately destructure object arguments to avoid relying on argument order.
- Also supports default values for missing properties.

Example:
restaurant.orderDelivery({
  time: '23:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

In the function:
orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
  // use starterIndex, mainIndex, time, address directly
}

⚡ Benefits
- Cleaner code.
- Reduces repetitive object access (e.g., obj.prop).
- Helps with flexible API data or large config objects.
- Makes functions easier to use and maintain, especially when they have many parameters.

💡 Tip
Default values and renaming can be combined when destructuring.

*/

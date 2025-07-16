// The Spread Operator (...)
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
};

// combine arrays easliy
const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];
console.log(newArr);
// pass multiple elements as an argument
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// important use cases of spread operator
// a). create shallow copies of arrays
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);
// b). merge two or more arrays together
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Ezekiel';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);

// Real world example
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

// objects
const NewRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(NewRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
/* 
✅ Spread Operator Summary

The spread operator (`...`) allows us to expand (unpack) an array or other iterable into individual elements. 

🔹 Usage in arrays:
- Create new arrays by adding elements before or after an existing array:
  const arr = [7, 8, 9];
  const newArr = [1, 2, ...arr]; // [1, 2, 7, 8, 9]

- Copy arrays (shallow copy):
  const copy = [...arr];

- Merge arrays:
  const merged = [...arr1, ...arr2];

- Use in function calls to pass array elements as separate arguments:
  func(...arr);

🔹 Usage with strings:
- Strings are iterables, so they can also be spread into arrays of characters:
  const str = 'Jonas';
  const letters = [...str, ' ', 'S']; // ['J','o','n','a','s',' ','S']

🔹 Spread with objects (since ES2018):
- Create new objects with additional or overridden properties:
  const newObj = { ...oldObj, newProp: 'value' };

- Shallow copy objects:
  const objCopy = { ...obj };

⚠️ Notes:
- Spread can only be used where multiple comma-separated values are expected (e.g., inside array literals or function argument lists).
- Spread does not create new variables — it only expands elements.
- Spread makes it easy to write cleaner, more flexible code without manual loops or hard-coded indices.

💡 Examples in the lesson included copying menus, merging menus, expanding ingredient arrays for functions, and creating object copies or new objects with added properties.
*/

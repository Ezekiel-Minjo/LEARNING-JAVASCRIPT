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

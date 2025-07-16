/**
 * 📌 Optional Chaining (ES2020)
 *
 * 1️⃣ Purpose:
 *    - Allows us to safely access deeply nested properties without having to manually check if each property exists.
 *    - If a property does not exist, it returns undefined instead of causing an error.
 *
 * 2️⃣ Syntax:
 *    - Use ?. (question mark and dot) after the property you want to check.
 *    - Example: restaurant.openingHours?.mon?.open
 *      - If 'openingHours' or 'mon' does not exist, it returns undefined.
 *
 * 3️⃣ Use with Arrays:
 *    - Check if an array element exists before accessing its properties.
 *    - Example: users[0]?.name
 *      - If users[0] does not exist, it returns undefined.
 *
 * 4️⃣ Use with Methods:
 *    - Check if a method exists before calling it.
 *    - Example: restaurant.order?.(0, 1)
 *      - If 'order' does not exist, returns undefined.
 *
 * 5️⃣ Combine with Nullish Coalescing Operator (??):
 *    - Provides a fallback value if the result is null or undefined.
 *    - Example: const open = restaurant.openingHours?.mon?.open ?? 'closed'
 *      - If open is undefined, 'closed' will be used instead.
 *
 * 6️⃣ Advantages:
 *    - Prevents runtime errors when accessing non-existing properties or methods.
 *    - Reduces the need for long if-checks.
 *    - Cleaner and more readable code.
 */

const weekdays = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[2]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20: 00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

// if a property does not exist, it returns undefined instead
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Methos does not exist');
console.log(restaurant.orderRissoto?.(0, 1) ?? 'Methos does not exist');

// Arrays
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];

console.log(users[0]?.name ?? 'User array empty');

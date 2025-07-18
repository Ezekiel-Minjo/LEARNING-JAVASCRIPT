/**
 * 📌 Looping over objects in JavaScript
 *
 * ⚡ Objects are not iterable directly like arrays,
 *    but we can loop over them indirectly using helper methods.
 *
 * ✅ 1️⃣ Object.keys(obj)
 *    - Returns an array of property names (keys).
 *    - Can use `for...of` loop to iterate over keys.
 *    - Example: Object.keys(openingHours)
 *
 * ✅ 2️⃣ Object.values(obj)
 *    - Returns an array of property values.
 *    - Example: Object.values(openingHours)
 *
 * ✅ 3️⃣ Object.entries(obj)
 *    - Returns an array of [key, value] pairs.
 *    - Example: Object.entries(openingHours)
 *    - Allows us to loop over both keys and values at the same time.
 *
 * 💡 Using Object.entries with destructuring
 *    - You can destructure key and value directly inside the loop.
 *    - When value is an object itself, we can destructure its properties too.
 *    - Example:
 *        for (const [day, { open, close }] of Object.entries(openingHours)) {
 *          console.log(`On ${day} we open at ${open} and close at ${close}`);
 *        }
 *
 * ⭐ Advantages
 *    - Cleaner, more readable way to iterate through objects.
 *    - Avoids manual for-in loops or manual indexing.
 */
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

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2},and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },
};

console.log('Properties Names');
const properties = Object.keys(restaurant.openingHours);
console.log(properties);

let openStr = `we are open on ${properties.length} days: `;
console.log('Object.keys(obj');
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

console.log('properties values');
const values = Object.values(restaurant.openingHours);
console.log(values);

console.log('Entire Object');
const entries = Object.entries(restaurant.openingHours);
// console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

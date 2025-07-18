/**
 * 📌 JavaScript Maps — Summary Notes (ES6+)
 *
 * ✅ What is a Map?
 * - A Map stores **key-value pairs** (like objects).
 * - Keys in Maps can be **any data type** (not just strings).
 * - Introduced in ES6.
 *
 * ────────────────────────────────
 * ✅ Creating a Map:
 *
 * const rest = new Map();
 * rest.set('name', 'Classico Italiano');
 * rest.set(1, 'Firenze, Italy');
 * rest.set(2, 'Lisbon, Portugal');
 *
 * ⚡ .set() returns the map → allows chaining:
 * rest
 *   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian'])
 *   .set('open', 11)
 *   .set('close', 23)
 *   .set(true, 'We are open')
 *   .set(false, 'We are closed');
 *
 * ────────────────────────────────
 * ✅ Reading values:
 *
 * rest.get('name');   // 'Classico Italiano'
 * rest.get(1);        // 'Firenze, Italy'
 * rest.get(true);     // 'We are open'
 *
 * ❗ Keys must match exactly (including type):
 * rest.get('1'); // undefined (string ≠ number)
 *
 * ────────────────────────────────
 * ✅ Smart use of Booleans as keys:
 *
 * const time = 21;
 * console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
 * // 'We are open' if time is between open and close
 *
 * ────────────────────────────────
 * ✅ Map Methods:
 *
 * - rest.has('categories');   // true
 * - rest.delete(2);           // deletes entry with key 2
 * - rest.size;                // number of entries
 * - rest.clear();             // removes all entries
 *
 * ────────────────────────────────
 * ✅ Using Arrays or Objects as Keys:
 *
 * const arr = [1, 2];
 * rest.set(arr, 'Test');
 * rest.get(arr);        // ✅ Works — same reference
 * rest.get([1, 2]);      // ❌ Doesn't work — different object
 *
 * // DOM element as key (advanced)
 * const heading = document.querySelector('h1');
 * rest.set(heading, 'Map title');
 *
 * ────────────────────────────────
 * ✅ Differences: Map vs Object
 *
 * | Feature         | Map                    | Object              |
 * |----------------|------------------------|---------------------|
 * | Key Types       | Any (incl. object, array) | Strings, Symbols    |
 * | Order           | Maintains insertion order | No guaranteed order |
 * | Iteration       | Easy with .entries() or for...of | Needs manual work |
 * | Use case        | When key types vary or need ordering | Basic data containers |
 *
 * 🔁 Use Map when:
 * - You need keys other than strings
 * - You want to maintain insertion order
 * - You need built-in methods like .set(), .get(), etc.
 *
 * 📚 More map methods like iteration will be covered next.
 */

'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
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

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
const question = new Map([
  ['Question', 'What is the best programming language?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'correct'],
  [false, 'Try again!'],
]);
console.log(question);
// convert object to Maps
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//  Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);
console.log(question.get(question.get('correct') === answer));

// map() to array
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);

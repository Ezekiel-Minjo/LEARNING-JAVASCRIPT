'use strict';
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// Destructuring arrays - from the right side.

// const [first, second] = restaurant.categories;
// console.log(first, second);
// skip elements
const [first, , third] = restaurant.categories;
console.log(first, third);

// swap variables
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from one function call
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// nested array
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

/**
 * 📌 Array Destructuring (ES6)
 *
 * ✅ What is it?
 *    - A way to unpack values from arrays into separate variables in a concise way.
 *
 * ✅ Basic syntax
 *    const [a, b, c] = arr;
 *    - 'a' gets first value, 'b' gets second, and so on.
 *    - Original array is not modified.
 *
 * ✅ Skipping elements
 *    const [first, , third] = arr;
 *    - Skips second element.
 *
 * ✅ Swapping variables
 *    [a, b] = [b, a];
 *    - Quickly swap values without a temporary variable.
 *
 * ✅ Functions returning arrays
 *    function example() { return [value1, value2]; }
 *    const [v1, v2] = example();
 *    - Easily assign multiple return values.
 *
 * ✅ Nested arrays
 *    const [i, , [j, k]] = [1, 2, [3, 4]];
 *    - Unpack values from nested arrays in one step.
 *
 * ✅ Default values
 *    const [p = 1, q = 1, r = 1] = [8, 9];
 *    - Use defaults if values are missing.
 *
 * ✅ Use case examples in the lesson
 *    - Extracting restaurant categories into variables.
 *    - Swapping main and secondary categories.
 *    - Ordering food from a function that returns an array, then destructuring.
 *
 * ⭐ Benefits
 *    - Cleaner code, avoids manual indexing.
 *    - Useful when working with API data or when extracting multiple values at once.
 */

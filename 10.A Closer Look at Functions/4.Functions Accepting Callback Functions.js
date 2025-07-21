"use strict";
const oneWord = function (str) {
  return str.replace(/ /g).toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};
transformer("JavaScript is the best!", upperFirstWord);

const high5 = function () {
  console.log("👌");
};
// document.body.addEventListener("click", high5);
["Jonas", "Martha", "Adam"].forEach(high5);
/*
========================================
 Creating Higher-Order Functions in JS
========================================

🔹 Goal:
- Build a higher-order function that takes in another function (a callback) and applies it to a string.
- Understand how callbacks help create **abstraction** in code.

🔹 Callback Functions:
- These are functions passed into another function to be executed later.
- In this case: `upperFirstWord` and `oneWord` are callbacks passed into `transformer`.

🔹 Why Use Callback Functions?
1. **Reusability** – Keep logic modular and flexible.
2. **Abstraction** – `transformer` doesn’t care *how* the string is changed, just that it *is*.
   > This allows us to work at a higher level of logic and clarity.

🔹 Abstraction in Practice:
- We "hide" low-level implementation details.
- High-level function (`transformer`) simply delegates work to lower-level functions.

🔹 More Examples of Callbacks in JS:
- `addEventListener('click', callbackFn)`
- `array.forEach(callbackFn)`
- `setTimeout(callbackFn, delay)`
- These are all higher-order functions accepting callbacks to define behavior.

🔹 Key Takeaways:
- JS uses **callbacks all the time**.
- Callbacks + Higher-Order Functions = Clean, abstract, powerful code.
- Abstraction helps manage complexity and improves readability.

*/

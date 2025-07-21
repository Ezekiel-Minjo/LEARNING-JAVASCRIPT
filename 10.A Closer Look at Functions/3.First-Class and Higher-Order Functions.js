/*
========================================
 First-Class & Higher-Order Functions
========================================

🔹 First-Class Functions (Concept):
- In JS, functions are treated as values (aka "first-class citizens").
- Functions are just another type of object.
- This means:
  ✓ Functions can be stored in variables or object properties.
  ✓ Functions can be passed as arguments.
  ✓ Functions can be returned from other functions.
  ✓ Functions can have their own methods (e.g. .bind()).

🔹 Example:
const greet = () => console.log('Hello');
button.addEventListener('click', greet);
// 'greet' is passed as a callback — it's just a value.

🔹 Higher-Order Functions (Practical):
- A higher-order function does **one of two things**:
  1. Takes another function as an argument.
  2. Returns a new function.

Examples:
1. `addEventListener('click', greet)` → receives a function → Higher-Order
2. `function multiplier(factor) { return function(x) { return x * factor; } }` → returns a function → Higher-Order

🔹 Callback Function:
- A function passed into another function to be "called back" later.
- Common in event handling, timers, array methods, etc.

🔹 First-Class vs Higher-Order:
- **First-Class** = concept: functions are values.
- **Higher-Order** = practical: functions that take/return functions.
- First-class functions **enable** higher-order functions.

*/

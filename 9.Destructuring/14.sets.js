/**
 * 📌 JavaScript Sets - Summary Notes
 *
 * 🔹 Sets are a new data structure introduced in ES6.
 * 🔹 A Set is a collection of **unique values** (no duplicates allowed).
 * 🔹 Sets can hold any data type and are iterable like arrays.
 *
 * ✅ Creating a Set:
 *    const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta']);
 *    console.log(ordersSet); // Set(3) { 'Pasta', 'Pizza', 'Risotto' }
 *
 * ✅ Set Properties & Methods:
 *    - .size          → Get number of unique elements.
 *    - .has(value)    → Check if value exists (like array.includes()).
 *    - .add(value)    → Add a new value (duplicates ignored).
 *    - .delete(value) → Remove a value.
 *    - .clear()       → Remove all elements.
 *
 * ⚠️ Sets do NOT support indexing (no .[0]) or duplicate values.
 *
 * ✅ Looping through a Set:
 *    for (const order of ordersSet) {
 *      console.log(order);
 *    }
 *
 * ✅ Common Use Case: Remove duplicates from an array
 *    const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
 *    const uniqueStaff = [...new Set(staff)];
 *    console.log(uniqueStaff); // ['Waiter', 'Chef', 'Manager']
 *
 * ✅ Counting unique values directly:
 *    console.log(new Set(staff).size); // 3
 *    console.log(new Set('EzekielMinjo').size); // Count unique letters
 *
 * 🧠 When to Use Sets:
 *    - When you need unique values only
 *    - When you don’t need indexing or value ordering
 *    - NOT for replacing arrays — arrays are better for general data storage/manipulation
 */
'use strict';
const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta']);
console.log(ordersSet);
console.log(new Set('Minjo'));
console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
// ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

console.log('=====Example=====');
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

console.log(new Set('Ezekiel').size);

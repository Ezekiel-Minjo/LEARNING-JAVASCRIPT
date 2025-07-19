// # JavaScript Data Structures Guide

// ## Data Sources
// 1. **Program source code** - Status messages, hardcoded values
// 2. **User interface** - Form inputs, DOM data (todo tasks, expenses)
// 3. **External sources** - Web APIs (weather, movies, currency rates)

// ## Choosing Data Structures

// ### Simple List vs Key-Value Pairs
// - **Simple list** → Array or Set
// - **Key-value pairs** → Object or Map

// ### Arrays vs Sets
// **Use Arrays when:**
// - Need ordered data
// - Values might contain duplicates
// - Need to manipulate data (many array methods available)

// **Use Sets when:**
// - Working with unique values only
// - High performance needed (searching/deleting up to 10x faster)
// - Removing duplicates from arrays

// ### Objects vs Maps
// **Use Objects when:**
// - Need functions as values (methods)
// - Working with JSON data
// - Want easy syntax (dot/bracket notation)
// - Need `this` keyword access

// **Use Maps when:**
// - Simple key-value mapping
// - Need non-string keys
// - Better performance required
// - Easy iteration and size computation needed

// ## Key Takeaway
// Arrays of objects are extremely common in JavaScript development, especially when working with API data like:

// ```javascript
// [
//   { title: "Recipe 1", publisher: "Chef A" },
//   { title: "Recipe 2", publisher: "Chef B" },
//   { title: "Recipe 3", publisher: "Chef C" }
// ]
// ```

// ## Other Data Structures
// JavaScript also has WeakSets and WeakMaps. Programming in general uses stacks, queues, linked lists, trees, and hash tables (not built into JS).

var createHelloWorld = function () {
  return function (...args) {
    return "Hello World";
  };
};

// Test examples
console.log("Example 1:");
const f1 = createHelloWorld();
console.log(f1()); // "Hello World"

console.log("\nExample 2:");
const f2 = createHelloWorld();
console.log(f2({}, null, 42)); // "Hello World"

// Additional test cases
console.log("\nAdditional tests:");
const f3 = createHelloWorld();
console.log(f3(1, 2, 3, 4, 5)); // "Hello World"
console.log(f3("any", "arguments", "here")); // "Hello World"
console.log(f3()); // "Hello World"

// Alternative solution using arrow functions
const createHelloWorldArrow =
  () =>
  (...args) =>
    "Hello World";

console.log("\nArrow function version:");
const f4 = createHelloWorldArrow();
console.log(f4()); // "Hello World"
console.log(f4(1, 2, 3)); // "Hello World"

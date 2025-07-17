var createCounter = function (n) {
  let current = n;

  return function () {
    return current++;
  };
};

// Test cases
console.log("Example 1:");
const counter1 = createCounter(10);
console.log(counter1()); // 10
console.log(counter1()); // 11
console.log(counter1()); // 12

console.log("\nExample 2:");
const counter2 = createCounter(-2);
console.log(counter2()); // -2
console.log(counter2()); // -1
console.log(counter2()); // 0
console.log(counter2()); // 1
console.log(counter2()); // 2

// Alternative solution using closure without explicit variable
var createCounterAlt = function (n) {
  return function () {
    return n++;
  };
};

console.log("\nAlternative solution test:");
const counter3 = createCounterAlt(5);
console.log(counter3()); // 5
console.log(counter3()); // 6
console.log(counter3()); // 7

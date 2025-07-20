var once = function (fn) {
  let hasBeenCalled = false;
  let result;

  return function (...args) {
    if (!hasBeenCalled) {
      hasBeenCalled = true;
      result = fn(...args);
      return result;
    }
    return undefined;
  };
};

// Test examples
console.log("Example 1:");
const fn1 = (a, b, c) => a + b + c;
const onceFn1 = once(fn1);
console.log(onceFn1(1, 2, 3)); // 6
console.log(onceFn1(2, 3, 6)); // undefined

console.log("\nExample 2:");
const fn2 = (a, b, c) => a * b * c;
const onceFn2 = once(fn2);
console.log(onceFn2(5, 7, 4)); // 140
console.log(onceFn2(2, 3, 6)); // undefined
console.log(onceFn2(4, 6, 8)); // undefined

// Additional test cases
console.log("\nAdditional tests:");
const fn3 = () => "Hello World";
const onceFn3 = once(fn3);
console.log(onceFn3()); // "Hello World"
console.log(onceFn3()); // undefined

const fn4 = (x) => x * 2;
const onceFn4 = once(fn4);
console.log(onceFn4(5)); // 10
console.log(onceFn4(10)); // undefined

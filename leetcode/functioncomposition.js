var compose = function (functions) {
  return function (x) {
    // Handle empty array case - return identity function
    if (functions.length === 0) {
      return x;
    }

    // Apply functions from right to left
    let result = x;
    for (let i = functions.length - 1; i >= 0; i--) {
      result = functions[i](result);
    }
    return result;
  };
};

// Alternative solution using reduce
var composeAlt = function (functions) {
  return function (x) {
    return functions.reduceRight((acc, fn) => fn(acc), x);
  };
};

// Alternative solution using recursion
var composeRecursive = function (functions) {
  return function (x) {
    if (functions.length === 0) return x;
    if (functions.length === 1) return functions[0](x);

    // Apply last function first, then compose with rest
    return functions[0](composeRecursive(functions.slice(1))(x));
  };
};

// Test cases
console.log("Example 1:");
const functions1 = [(x) => x + 1, (x) => x * x, (x) => 2 * x];
const composed1 = compose(functions1);
console.log(composed1(4)); // 65
// Step by step: 2 * 4 = 8, then 8 * 8 = 64, then 64 + 1 = 65

console.log("Example 2:");
const functions2 = [(x) => 10 * x, (x) => 10 * x, (x) => 10 * x];
const composed2 = compose(functions2);
console.log(composed2(1)); // 1000
// Step by step: 10 * 1 = 10, then 10 * 10 = 100, then 10 * 100 = 1000

console.log("Example 3:");
const functions3 = [];
const composed3 = compose(functions3);
console.log(composed3(42)); // 42 (identity function)

console.log("Testing alternative solutions:");
const composedAlt = composeAlt(functions1);
console.log(composedAlt(4)); // 65

const composedRec = composeRecursive(functions1);
console.log(composedRec(4)); // 65

console.log("Additional test cases:");
const functions4 = [(x) => x - 1];
const composed4 = compose(functions4);
console.log(composed4(5)); // 4

const functions5 = [(x) => x + 2, (x) => x * 3];
const composed5 = compose(functions5);
console.log(composed5(1)); // 5

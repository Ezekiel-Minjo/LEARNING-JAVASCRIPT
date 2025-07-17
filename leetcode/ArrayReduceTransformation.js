var reduce = function (nums, fn, init) {
  let val = init;

  for (let i = 0; i < nums.length; i++) {
    val = fn(val, nums[i]);
  }

  return val;
};

// Alternative solution using for...of loop
var reduceForOf = function (nums, fn, init) {
  let val = init;

  for (const num of nums) {
    val = fn(val, num);
  }

  return val;
};

// Alternative solution using forEach (though it uses a built-in method)
var reduceForEach = function (nums, fn, init) {
  let val = init;

  nums.forEach((num) => {
    val = fn(val, num);
  });

  return val;
};

// Alternative recursive solution
var reduceRecursive = function (nums, fn, init) {
  if (nums.length === 0) {
    return init;
  }

  return reduceRecursive(nums.slice(1), fn, fn(init, nums[0]));
};

// Test cases
console.log("Example 1:");
const nums1 = [1, 2, 3, 4];
const sum = function (accum, curr) {
  return accum + curr;
};
const init1 = 0;
console.log(reduce(nums1, sum, init1)); // 10
// Step by step: 0 + 1 = 1, 1 + 2 = 3, 3 + 3 = 6, 6 + 4 = 10

console.log("Example 2:");
const nums2 = [1, 2, 3, 4];
const sumSquares = function (accum, curr) {
  return accum + curr * curr;
};
const init2 = 100;
console.log(reduce(nums2, sumSquares, init2)); // 130
// Step by step: 100 + 1*1 = 101, 101 + 2*2 = 105, 105 + 3*3 = 114, 114 + 4*4 = 130

console.log("Example 3:");
const nums3 = [];
const anyFn = function (accum, curr) {
  return 0;
};
const init3 = 25;
console.log(reduce(nums3, anyFn, init3)); // 25 (empty array returns init)

console.log("Testing alternative solutions:");
console.log("For...of:", reduceForOf(nums1, sum, init1)); // 10
console.log("ForEach:", reduceForEach(nums1, sum, init1)); // 10
console.log("Recursive:", reduceRecursive(nums1, sum, init1)); // 10

console.log("Additional test cases:");
// Product example
const nums4 = [2, 3, 4];
const multiply = function (accum, curr) {
  return accum * curr;
};
const init4 = 1;
console.log(reduce(nums4, multiply, init4)); // 24 (1 * 2 * 3 * 4 = 24)

// Max example
const nums5 = [5, 2, 8, 1, 9];
const max = function (accum, curr) {
  return Math.max(accum, curr);
};
const init5 = 0;
console.log(reduce(nums5, max, init5)); // 9

// String concatenation example
const nums6 = [1, 2, 3];
const concat = function (accum, curr) {
  return accum + curr.toString();
};
const init6 = "";
console.log(reduce(nums6, concat, init6)); // "123"

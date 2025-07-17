var filter = function (arr, fn) {
  const filteredArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      filteredArr.push(arr[i]);
    }
  }

  return filteredArr;
};

// Alternative solution using for...of loop with index tracking
var filterForOf = function (arr, fn) {
  const filteredArr = [];
  let index = 0;

  for (const element of arr) {
    if (fn(element, index)) {
      filteredArr.push(element);
    }
    index++;
  }

  return filteredArr;
};

// Alternative solution using forEach (though it uses a built-in method)
var filterForEach = function (arr, fn) {
  const filteredArr = [];

  arr.forEach((element, index) => {
    if (fn(element, index)) {
      filteredArr.push(element);
    }
  });

  return filteredArr;
};

// Alternative solution using reduce (creative approach)
var filterReduce = function (arr, fn) {
  return arr.reduce((filteredArr, element, index) => {
    if (fn(element, index)) {
      filteredArr.push(element);
    }
    return filteredArr;
  }, []);
};

// Test cases
console.log("Example 1:");
const arr1 = [0, 10, 20, 30];
const greaterThan10 = function (n) {
  return n > 10;
};
console.log(filter(arr1, greaterThan10)); // [20, 30]

console.log("Example 2:");
const arr2 = [1, 2, 3];
const firstIndex = function (n, i) {
  return i === 0;
};
console.log(filter(arr2, firstIndex)); // [1]

console.log("Example 3:");
const arr3 = [-2, -1, 0, 1, 2];
const plusOne = function (n) {
  return n + 1;
};
console.log(filter(arr3, plusOne)); // [-2, 0, 1, 2]
// Explanation: -2+1=-1 (truthy), -1+1=0 (falsy), 0+1=1 (truthy), 1+1=2 (truthy), 2+1=3 (truthy)

console.log("Testing alternative solutions:");
console.log("For...of:", filterForOf(arr1, greaterThan10)); // [20, 30]
console.log("ForEach:", filterForEach(arr1, greaterThan10)); // [20, 30]
console.log("Reduce:", filterReduce(arr1, greaterThan10)); // [20, 30]

console.log("Additional test cases:");
// Filter even numbers
const arr4 = [1, 2, 3, 4, 5, 6];
const isEven = function (n) {
  return n % 2 === 0;
};
console.log(filter(arr4, isEven)); // [2, 4, 6]

// Filter elements at even indices
const arr5 = [10, 20, 30, 40, 50];
const evenIndex = function (n, i) {
  return i % 2 === 0;
};
console.log(filter(arr5, evenIndex)); // [10, 30, 50]

// Filter positive numbers
const arr6 = [-3, -1, 0, 1, 3];
const isPositive = function (n) {
  return n > 0;
};
console.log(filter(arr6, isPositive)); // [1, 3]

// Filter truthy values (similar to example 3)
const arr7 = [0, 1, false, 2, "", 3, null, 4, undefined, 5];
const isTruthy = function (n) {
  return Boolean(n);
};
console.log(filter(arr7, isTruthy)); // [1, 2, 3, 4, 5]

// Empty array test
const arr8 = [];
const alwaysTrue = function (n) {
  return true;
};
console.log(filter(arr8, alwaysTrue)); // []

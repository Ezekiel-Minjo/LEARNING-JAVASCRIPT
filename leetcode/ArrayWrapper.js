var ArrayWrapper = function (nums) {
  this.nums = nums;
};

ArrayWrapper.prototype.valueOf = function () {
  return this.nums.reduce((sum, num) => sum + num, 0);
};

ArrayWrapper.prototype.toString = function () {
  return `[${this.nums.join(",")}]`;
};

// Alternative ES6 Class syntax
class ArrayWrapperES6 {
  constructor(nums) {
    this.nums = nums;
  }

  valueOf() {
    return this.nums.reduce((sum, num) => sum + num, 0);
  }

  toString() {
    return `[${this.nums.join(",")}]`;
  }
}

// Test examples
console.log("Example 1:");
const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);
console.log(obj1 + obj2); // 10

console.log("\nExample 2:");
const obj = new ArrayWrapper([23, 98, 42, 70]);
console.log(String(obj)); // "[23,98,42,70]"

console.log("\nExample 3:");
const obj3 = new ArrayWrapper([]);
const obj4 = new ArrayWrapper([]);
console.log(obj3 + obj4); // 0

console.log("\nAdditional tests:");
const obj5 = new ArrayWrapper([1, 2, 3]);
const obj6 = new ArrayWrapper([4, 5]);
console.log(obj5 + obj6); // 15

const obj7 = new ArrayWrapper([]);
console.log(String(obj7)); // "[]"

const obj8 = new ArrayWrapper([42]);
console.log(String(obj8)); // "[42]"

// Test with ES6 class
console.log("\nES6 Class version:");
const es6Obj1 = new ArrayWrapperES6([1, 2, 3]);
const es6Obj2 = new ArrayWrapperES6([4, 5, 6]);
console.log(es6Obj1 + es6Obj2); // 21
console.log(String(es6Obj1)); // "[1,2,3]"

// Demonstrating how the methods work
console.log("\nMethod demonstrations:");
console.log("valueOf() result:", obj1.valueOf()); // 3
console.log("toString() result:", obj1.toString()); // "[1,2]"

Array.prototype.last = function () {
  if (this.length === 0) {
    return -1;
  }
  return this[this.length - 1];
};

// Alternative more concise solution
Array.prototype.lastAlt = function () {
  return this.length === 0 ? -1 : this[this.length - 1];
};

// Test cases
console.log("Example 1:");
const nums1 = [null, {}, 3];
console.log(nums1.last()); // 3

console.log("Example 2:");
const nums2 = [];
console.log(nums2.last()); // -1

console.log("Additional test cases:");
const nums3 = [1, 2, 3, 4, 5];
console.log(nums3.last()); // 5

const nums4 = ["hello"];
console.log(nums4.last()); // "hello"

const nums5 = [false, null, undefined, 0];
console.log(nums5.last()); // 0

const nums6 = [1, 2, 3];
console.log(nums6.lastAlt()); // 3 (testing alternative method)

// Edge cases
const nums7 = [0];
console.log(nums7.last()); // 0 (not -1, since array is not empty)

const nums8 = [-1];
console.log(nums8.last()); // -1 (actual last element, not empty array indicator)

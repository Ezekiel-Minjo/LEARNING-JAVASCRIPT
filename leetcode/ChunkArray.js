var chunk = function (arr, size) {
  if (arr.length === 0) return [];

  const result = [];

  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }

  return result;
};

// Alternative solution using while loop
var chunkAlternative = function (arr, size) {
  if (arr.length === 0) return [];

  const result = [];
  let i = 0;

  while (i < arr.length) {
    result.push(arr.slice(i, i + size));
    i += size;
  }

  return result;
};

// Alternative solution using reduce
var chunkReduce = function (arr, size) {
  if (arr.length === 0) return [];

  return arr.reduce((result, item, index) => {
    const chunkIndex = Math.floor(index / size);

    if (!result[chunkIndex]) {
      result[chunkIndex] = [];
    }

    result[chunkIndex].push(item);
    return result;
  }, []);
};

// Test examples
console.log("Example 1:");
console.log(chunk([1, 2, 3, 4, 5], 1)); // [[1],[2],[3],[4],[5]]

console.log("\nExample 2:");
console.log(chunk([1, 9, 6, 3, 2], 3)); // [[1,9,6],[3,2]]

console.log("\nExample 3:");
console.log(chunk([8, 5, 3, 2, 6], 6)); // [[8,5,3,2,6]]

console.log("\nExample 4:");
console.log(chunk([], 1)); // []

console.log("\nAdditional tests:");
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)); // [[1,2,3],[4,5,6],[7,8]]
console.log(chunk([1], 5)); // [[1]]

console.log("\nAlternative solution (while loop):");
console.log(chunkAlternative([1, 2, 3, 4, 5], 2)); // [[1,2],[3,4],[5]]

console.log("\nAlternative solution (reduce):");
console.log(chunkReduce([1, 2, 3, 4, 5, 6], 2)); // [[1,2],[3,4],[5,6]]

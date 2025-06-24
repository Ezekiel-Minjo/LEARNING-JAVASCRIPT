// copying an array
let arr = [10, 20, 30];
let arrCopy = [...arr];
console.log(arrCopy); // [10, 20, 30]

// combining arrays
let arr1 = [10, 20];
let arr2 = [30, 40];
let combined = [...arr1, ...arr2];
console.log(combined); // [10, 20, 30, 40]

// Adding elements to an array
let newArr = [0, ...arr, 40];
console.log(newArr); // [0, 10, 20, 30, 40]

// using in function arguments
function sum(x, y, z) {
  return x + y + z;
}

let nums = [1, 2, 3];
console.log(sum(...nums)); // 6

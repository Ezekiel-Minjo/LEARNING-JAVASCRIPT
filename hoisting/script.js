"use strict";
// console.log(me);
// console.log(job);
// console.log(year);

var me = "Minjo";
let job = "Student";
const year = 2001;

// functions
console.log(add(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function add(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

// Example
if (!numProducts) deleteShoppingCart();
var numProducts = 10;

function deleteShoppingCart() {
  console.log("All products deleted!");
}

var x = 1;
let y = 2;
const z = 3;
// console.log(x === window.x);

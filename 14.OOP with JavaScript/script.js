'use strict';
// 1. Implement OOP: Constructor function and the new operator
const Person = function (firstName, birthYear) {
  // instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};
const jonas = new Person('Jonas', 1991); // instance of Person
const matilda = new Person('Matilda', 2017); // instance of Person
const jack = new Person('Jack', 1975); // instance of Person
console.log(jonas, matilda, jack);
console.log(jonas instanceof Person);

// 2. prototypes
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();
jack.calcAge();
console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));

// setting properties on the prototype
Person.prototype.species = 'Home Sapiens';
console.log(jonas.species, matilda.species, jack.species);

console.log(jonas.hasOwnProperty('firstName')); // checking for objects own property
// object.prototype
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.log(Person.prototype.constructor);

const arr = [3, 6, 4, 5, 6, 9, 9];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());
const h1 = document.querySelector('h1');

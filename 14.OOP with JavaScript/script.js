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

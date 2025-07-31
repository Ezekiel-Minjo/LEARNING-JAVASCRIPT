'use strict';
// Implement OOP: Constructor function and the new operator
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

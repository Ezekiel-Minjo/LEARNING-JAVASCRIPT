'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);
// intersection method to find common elements
const commonFoods = italianFoods.intersection(mexicanFoods);
console.log('Intersection: ', commonFoods);
console.log([...commonFoods]);
// Union Method
const italianMexicanFusion = italianFoods.union(mexicanFoods);
console.log('Union: ', italianMexicanFusion);

console.log(...[[...italianFoods, ...mexicanFoods]]);

// Diffrence Method
const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
console.log(uniqueItalianFoods);

const uniqueMexicanFood = mexicanFoods.difference(italianFoods);
console.log('Differnece mexican', uniqueMexicanFood);

// SYMETRIC DIFFRENCE
const uniqueItalianMexicanFood = italianFoods.symmetricDifference(mexicanFoods);
console.log(uniqueItalianMexicanFood);
// disjoint from method
const x = italianFoods.isDisjointFrom(mexicanFoods);
console.log(x);

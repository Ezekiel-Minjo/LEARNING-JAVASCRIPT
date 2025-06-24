'use strict'
function logger() {
    console.log('My name is Jonas');
}
// calling / running / invoking function
logger(); // 
logger(); // 
logger(); // 

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

function calAge1(birthYear) {
    // const age = 2037 - birthYear;
    return 2037 - birthYear;
}
const age1 = calAge1(2001);
console.log(age1);

//  expression
const calAge2 = function (birthYear) {
     return 2037 - birthYear;
}
const age2 = calAge2(2001);
console.log(age1, age2);
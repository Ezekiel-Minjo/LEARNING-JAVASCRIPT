/*
const
-like let, it's block-scoped(only exist inside {}).
- you must assign a value when declaring it.
- you cannot reassign it later.
*/ 

const myBirthday = true;
// myBirthday = false; // Error: can't reassign
// BUT: Objects and arrrays declared with const can still be chnaged inside

const actors = ["Morgan", "Jennifer"];
actors[2]= "Tom";
console.log(actors[2]);
// actors = []; // you can't reassign the whole array
/*🔹 Other Ways to Declare Variables */
// Function parameters: used inside functions only
function hello(name) {
    console.log(`Hello, ${ name }`);
} 
hello("Eva"); // Hello, Eva

/* catch Clause */
// Variables in catch are blocked-scoped like let. 
try {
    throw "Oops";
} catch (err) {
    console.log(err); // Oops
}

/* 
✅ Summary:

const is for values you don’t plan to reassign (e.g., a birthday date).

Scoping matters: let and const are safer inside blocks; var can escape.

Functions and catch blocks also create their own mini-scopes.
*/
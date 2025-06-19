/*
var
-Function-scoped or globally scoped: this means a variable delclared with var is only visible inside the function where its declared, or everywhere if declared outside a function.
- Can be re-declared and updated
*/ 

// example inside a function
function greet() {
    var name = 'Alice';
    console.log(name);// Alice
}
greet();
// console.log(name); // Error: name is not defined

// if declared outside:
var city = 'Nairobi';
function showCity() {
    console.log(city); // Nairobi
}
showCity();

/*
Can be re-declared and updated
you can declare the same var variable more than once and change its value.
*/
// example

var job = 'Teacher';
var job = 'Engineer'; //  re-declared
job = 'Docter'; // updated
console.log(job); // Doctor

/*
✅ Summary with Real-Life Analogy:
Imagine var like a whiteboard in a classroom. If you're in the room (function), you can write and erase on it all you want. If it's a hallway board (global), everyone sees and can change it. You can also wipe it clean (re-declare) and write something new anytime.
*/
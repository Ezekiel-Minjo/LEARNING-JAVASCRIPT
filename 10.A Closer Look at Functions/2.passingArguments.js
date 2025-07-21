"use strict";

const flight = "LH234";
const zeki = {
  name: "Ezekiel Minjo",
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  (flightNum = "Lh999"), (passenger.name = "Mr. " + passenger.name);
  if (passenger.passport === 24739479284) {
    console.log("Checked In");
  } else {
    console.log("wrong passport!");
  }
};
checkIn(flight, zeki);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(zeki);
checkIn(flight, zeki);
/*
==============================
 Passing Arguments in JS Notes
==============================

🔹 Primitive vs Object in Functions:
- Primitives (e.g. strings, numbers) are passed **by value** — a copy is made.
- Objects are passed **by reference (technically)** — the reference (memory address) is passed.

🔹 Example:
let flight = 'LH234';
let passenger = { name: 'Jonas', passport: 123456789 };

function checkIn(flightNum, passengerObj) {
  flightNum = 'LH999';               // No effect outside
  passengerObj.name = 'Mr. ' + passengerObj.name; // Affects original object
}

checkIn(flight, passenger);
// flight remains 'LH234'
// passenger.name becomes 'Mr. Jonas'

🔹 Object Mutability:
- Objects passed into functions can be modified from inside the function.
- All variables pointing to the same object share changes.

🔹 Dangerous Case:
- Multiple functions modifying the same object (e.g. changing passport number before check-in) can cause bugs.

🔹 Example of side-effect:
function newPassport(person) {
  person.passport = Math.trunc(Math.random() * 1e10);
}
// This changes the original object's passport value

🔹 Important Distinction:
- JavaScript passes **everything by value**.
  > For objects, the value is a reference (memory address), but not the object itself.
- So: JS does NOT have pass-by-reference (like C++), even if it seems so.

🔹 Tip:
- Avoid changing object parameters directly inside functions when possible to prevent side effects.
*/

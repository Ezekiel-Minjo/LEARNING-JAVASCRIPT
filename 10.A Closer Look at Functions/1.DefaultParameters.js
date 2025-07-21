"use strict";
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
createBooking("LH123", 2, 800);
createBooking("LH123", 2);
createBooking("LH123", 5);
/*
==========================
 Default Parameters Notes
==========================

🔹 Overview:
- Functions can have default parameter values.
- Useful to avoid 'undefined' and simplify function calls.

🔹 Old ES5 Method:
numPassengers = numPassengers || 1;
price = price || 199;
// Uses short-circuiting to set defaults.

🔹 New ES6 Method:
function createBooking(flightNum, numPassengers = 1, price = 199) { ... }
// Cleaner syntax. Default values can be expressions or use earlier params.

Example:
price = numPassengers * 199;

🔹 Important Rules:
- You can’t skip parameters directly.
- To skip and use default, pass undefined:
  createBooking('LH123', undefined, 1000);

🔹 Tips:
- Don’t use same names for array and object.
- Default values apply only if parameter is undefined.

*/

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
lufthansa.book(239, "Ezekiel Minjo");
lufthansa.book(635, "John Smith");
console.log(lufthansa);

const euroWings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;

// book(23, "Sarah Williams");

// call method
book.call(euroWings, 23, "Sarah Williams");
console.log(euroWings);
book.call(lufthansa, 239, "Mary Cooper");

const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "LX",
  bookings: [],
};
book.call(swiss, 583, "Mary Alice");
console.log(swiss);

// Apply method
const flightData = [583, "George Cooper"];
book.apply(swiss, flightData);
console.log(swiss);
book.call(swiss, ...flightData);

// Bind method
const bookEW = book.bind(euroWings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(23, "Steven Williams");

const bookEW23 = book.bind(euroWings, 23);
bookEW23("Jonas Schmedtmann");
bookEW23("Martha Cooper");

// with Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

// document
//   .querySelector(".buy")
//   .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));

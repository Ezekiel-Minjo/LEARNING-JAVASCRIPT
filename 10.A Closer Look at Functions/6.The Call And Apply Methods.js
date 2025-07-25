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

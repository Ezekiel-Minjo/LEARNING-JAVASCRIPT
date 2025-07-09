'use strict';
const airline = 'TAP Air Portugal';
const plane = 'A320';
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(plane[3]);
// convert to numbers
console.log('B737'[0]);
// read length propert
console.log(airline.length);
console.log('B737'.length);
// position of a certain letter
console.log(airline.indexOf('r')); // find first index of a string
console.log(airline.lastIndexOf('r')); // find last index of a string
console.log(airline.indexOf('Portugal')); // search entire word

console.log(airline.slice(4)); // is called a substring
console.log(airline.slice(4, 7)); // is called a substring

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

const checkSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('you got the middle seat');
  else console.log('you got lucky');
};

checkSeat('11B');
checkSeat('23C');
checkSeat('3E');

console.log(new String('Ezekiel'));
console.log(typeof new String('Ezekiel'));

console.log(typeof new String('Ezekiel').slice(1));
console.log(airline.toLocaleLowerCase());
console.log(airline.toUpperCase());

const passenger = 'jOnAS'; // Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);
//  check user input email ||
const email = 'hello@minjo.io';
const loginEmail = ' Hello@minjo.Io \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalEmail = loginEmail.toLowerCase().trim();
console.log(normalEmail);

// replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);
const announcement = 'All passengers come to baording door 23!';
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));
// using a regullar expression
console.log(announcement.replace(/door/g, 'gate'));
// booleans
const planes = 'Airbus A320neo';
console.log(planes.includes('A320'));
console.log(planes.includes('Boeing'));
console.log(planes.includes('Airb'));

if (planes.startsWith('Airbus') && planes.endsWith('neo')) {
  console.log('Part of the New Airbus family');
}
// practice
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else console.log('Welcome aboard!');
};
checkBaggage('I have a laptopx, some food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
console.log('a+very+nice+string'.split('+'));
console.log('Ezekiel Minjo'.split(' '));

// split and join
const [firstName, lastName] = 'Ezekiel Minjo'.split(' ');
console.log(firstName, lastName);
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};
capitalizeName('jessica ann smith davis');
capitalizeName('ezekiel minjo');

// padding a string
const message = 'GO to get 23!';
console.log(message.padStart(25, '+').padEnd(30, '+'));
console.log('minjo'.padStart(25, '💯').padEnd(30, '*'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(4234161264254545));
console.log(maskCreditCard('423416126425454167877666'));
// Repeat
const msg = 'Bad weather...All Departures Delayed';
console.log(msg.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);

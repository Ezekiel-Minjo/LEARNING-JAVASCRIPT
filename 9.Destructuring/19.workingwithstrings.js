// JavaScript Strings - Methods & Operations PART 1
// Basic String Access
const airline = 'TAP Air Portugal';
const plane = 'A320';

// Access characters by index (zero-based)
console.log(plane[0]); // 'A'
console.log(airline[6]); // 'r'

// Get string length
console.log(airline.length); // 16

// String Search Methods
// indexOf() - first occurrence
airline.indexOf('r'); // 6

// lastIndexOf() - last occurrence
airline.lastIndexOf('r'); // 10

// Search for words (case sensitive)
airline.indexOf('Portugal'); // 8
airline.indexOf('portugal'); // -1 (not found)

// Slice Method - Extract Substrings
// Basic slice(start, end) - end not included
airline.slice(4); // 'Air Portugal'
airline.slice(4, 7); // 'Air'

// Dynamic slicing without hardcoded values
airline.slice(0, airline.indexOf(' ')); // 'TAP' (first word)
airline.slice(airline.lastIndexOf(' ') + 1); // 'Portugal' (last word)

// Negative indexes (count from end)
airline.slice(-2); // 'al' (last 2 characters)
airline.slice(1, -1); // 'AP Air Portuga' (remove first & last char)

// Practical Example - Airplane Seat Checker
function checkMiddleSeat(seat) {
  // B and E are middle seats in small planes (A320, Boeing 737)
  const s = seat.slice(-1); // Get last character

  if (s === 'B' || s === 'E') {
    console.log('You got the middle seat 😬');
  } else {
    console.log('You got lucky 😎');
  }
}

checkMiddleSeat('11B'); // Middle seat
checkMiddleSeat('23C'); // Lucky
checkMiddleSeat('3E'); // Middle seat

/*
Key Concepts
String Immutability

Strings are primitives and cannot be mutated
All string methods return new strings
Original string remains unchanged

Boxing Process

Strings are primitives but have methods
JavaScript automatically converts string primitives to String objects when calling methods
After operation, converts back to primitive
This process is called "boxing"
Important Notes

All string indexes are zero-based
slice(start, end) - end position is not included
Length of extracted string = end - start
String methods always return primitives
Case sensitivity matters in search methods
 */

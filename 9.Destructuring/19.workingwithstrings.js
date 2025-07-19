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

// # JavaScript String Methods - Part 2

// ## Case Conversion Methods
```javascript
const airline = 'TAP Air Portugal';

// Convert to lowercase/uppercase
airline.toLowerCase(); // 'tap air portugal'
airline.toUpperCase(); // 'TAP AIR PORTUGAL'

// Can call directly on strings
'Hello World'.toLowerCase(); // 'hello world'
``` // ## Practical Example - Fix Passenger Name
```javascript
const passenger = 'jOnAS'; // Wrong capitalization

// Step-by-step approach
const passengerLower = passenger.toLowerCase(); // 'jonas'
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
// Result: 'Jonas'
``` // ## Email Validation Example
```javascript
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n'; // User input with errors

// Method 1: Step by step
const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();

// Method 2: Method chaining (preferred)
const normalizedEmail = loginEmail.toLowerCase().trim();
// Result: 'hello@jonas.io'

// Compare emails
console.log(email === normalizedEmail); // true
``` // ## Trim Methods
```javascript
const str = '   hello world   \n';

str.trim();      // 'hello world' (removes whitespace from both ends)
str.trimStart(); // 'hello world   \n' (ES2019 - removes from start only)
str.trimEnd();   // '   hello world' (ES2019 - removes from end only)
``` // ## Replace Methods
```javascript
const priceGB = '288,97£';

// Single replacement (first occurrence only)
const priceUS = priceGB.replace('£', '$').replace(',', '.');
// Result: '288.97$'

// Replace words
const announcement = 'All passengers come to boarding door 23. Boarding door 23.';
announcement.replace('door', 'gate'); 
// Result: 'All passengers come to boarding gate 23. Boarding door 23.'

// Replace ALL occurrences
announcement.replaceAll('door', 'gate');
// Result: 'All passengers come to boarding gate 23. Boarding gate 23.'

// Alternative with Regular Expression (before replaceAll existed)
announcement.replace(/door/g, 'gate'); // 'g' flag = global (all occurrences)
``` // ## Boolean Methods
```javascript
const plane = 'A320neo';

// includes() - check if string contains substring
plane.includes('A320'); // true
plane.includes('Boeing'); // false

// startsWith() - check if string starts with substring
plane.startsWith('Airbus'); // false
plane.startsWith('A320'); // true

// endsWith() - check if string ends with substring
plane.endsWith('neo'); // true
plane.endsWith('A320'); // false

// Practical example
if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
    console.log('Part of the NEW Airbus family');
}
``` // ## Practical Example - Baggage Check
```javascript
function checkBaggage(items) {
    // Always convert to lowercase for consistent comparison
    const baggage = items.toLowerCase();
    
    if (baggage.includes('knife') || baggage.includes('gun')) {
        console.log('You are not allowed on board');
    } else {
        console.log('Welcome aboard');
    }
}

checkBaggage('I have a laptop, some food, and a pocket Knife'); // Not allowed
checkBaggage('I have some socks and a camera'); // Welcome aboard  
checkBaggage('Got some snacks and a gun for protection'); // Not allowed
```;

// ## Key Points

// ### Method Chaining
// - String methods return new strings, so you can chain them
// - Example: `str.toLowerCase().trim().replace('old', 'new')`

// ### Case Sensitivity
// - All string methods are **case-sensitive**
// - Always convert to lowercase when comparing user input
// - Prevents issues with different capitalizations

// ### String Immutability
// - All methods return **new strings**
// - Original strings are never modified
// - Store results in variables or chain methods

// ### Best Practices
// - Always normalize user input (toLowerCase + trim)
// - Use `replaceAll()` for multiple replacements
// - Use boolean methods (`includes`, `startsWith`, `endsWith`) for conditionals
// - Chain methods for cleaner code

// JavaScript Strings - Advanced Methods (Part 3)
// Split Method - String to Array
// Split string into array based on divider
'A+very+nice+string'.split('+');
// Result: ['A', 'very', 'nice', 'string']

'Jonas Schmedtmann'.split(' ');
// Result: ['Jonas', 'Schmedtmann']

// Using destructuring with split
const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');
// firstName = 'Jonas', lastName = 'Schmedtmann'
// Join Method - Array to String (Opposite of Split)
const nameArray = ['Mr.', 'Jonas', 'SCHMEDTMANN'];
const newName = nameArray.join(' ');
// Result: 'Mr. Jonas SCHMEDTMANN'

// Can use any separator
nameArray.join('-'); // 'Mr.-Jonas-SCHMEDTMANN'
nameArray.join(''); // 'Mr.JonasSCHMEDTMANN'

// Capitalize Names Function - Split & Join in Action
function capitalizeName(name) {
  const names = name.split(' '); // Split into array
  const namesUpper = []; // Empty array for results

  for (const n of names) {
    // Method 1: Using slice
    namesUpper.push(n[0].toUpperCase() + n.slice(1));

    // Method 2: Using replace (alternative approach)
    // namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }

  return namesUpper.join(' '); // Join back into string
}

capitalizeName('jessica ann smith davis');
// Result: 'Jessica Ann Smith Davis'

// Padding Methods - Add Characters to String
// const message = 'Go to gate 23';

// padStart(length, character) - pad at beginning
message.padStart(25, '+');
// Result: '+++++++++++Go to gate 23'

// padEnd(length, character) - pad at end
message.padEnd(25, '+');
// Result: 'Go to gate 23+++++++++'

// Method chaining with padding
'Jonas'.padStart(25, '+').padEnd(35, '+');
// Result: '++++++++++++++++++++Jonas+++++'

// Credit Card Masking - Practical Padding Example
function maskCreditCard(number) {
  const str = number + ''; // Convert number to string (trick: add empty string)
  const last = str.slice(-4); // Get last 4 digits
  return last.padStart(str.length, '*'); // Pad with stars to original length
}

maskCreditCard(64637836); // Result: '****7836'
maskCreditCard(4337346373467846); // Result: '************7846'
maskCreditCard('334859493847755'); // Works with strings too

// Repeat Method - Repeat String Multiple Times
const message = 'Bad weather... All departures delayed... ';
message.repeat(5);
// Result: 'Bad weather... All departures delayed... ' (repeated 5 times)

// Practical example - Airport display
function planesInLine(n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
}

planesInLine(5); // 'There are 5 planes in line ✈️✈️✈️✈️✈️'
planesInLine(12); // 'There are 12 planes in line ✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️'

// Number to String Conversion Trick
// Instead of: String(number) or number.toString()
const number = 12345;
const str = number + ''; // Add empty string - automatic conversion!
// Result: '12345' (as string)

// Key Concepts & Best Practices
// Split & Join Pattern (Very Common)
// Pattern: Split → Process → Join
const text = 'hello world javascript';
// const result = text
//   .split(' ') // ['hello', 'world', 'javascript']
//   .map(word => word[0].toUpperCase() + word.slice(1)) // Process each word
//   .join(' '); // 'Hello World Javascript'

//   Method Chaining
// Chain multiple string methods together
const result = 'HELLO WORLD'
  .toLowerCase() // 'hello world'
  .split(' ') // ['hello', 'world']
  .join('-') // 'hello-world'
  .padStart(15, '*'); // '***hello-world'

/*

Important Notes

Split creates an array from string using divider
Join creates string from array using separator
Padding adds characters until desired length is reached
Repeat duplicates the string specified number of times
All methods return new strings (immutable)
Number + empty string = automatic string conversion

Additional String Methods
javascript// Other useful methods available (check MDN for complete list):
// - concat() - joins strings
// - charAt() - gets character at index
// - charCodeAt() - gets character code
// - substring() - similar to slice
// - indexOf() / lastIndexOf() - find position
// - match() - pattern matching
// - search() - search with regex
<!-- 
Common Use Cases:
1. Name formatting and capitalization
2. Data parsing (CSV, user input)
3. Creating display strings with formatting
4. Security (masking sensitive data)
5. UI text manipulation and formatting
-->
 */

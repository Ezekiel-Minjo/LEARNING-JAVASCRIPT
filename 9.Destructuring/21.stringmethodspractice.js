// JavaScript String Manipulation Exercise - Summary & Comments

// === Overview ===
// Transform messy flight data strings into nicely formatted output
// using various JavaScript string methods.

// === Problem Statement ===
// Input: Raw flight string with data separated by '+' symbols
// Goal: Display formatted flight info with alignment and readability

// === Step-by-Step Solution ===

// 1. Initial Data Splitting
const flights =
  'delayed_departure;fao21;txl02;11:25+departure;bru14;fra14;11:45+delayed_arrival;txl02;fao21;12:05+arrival;fra14;bru14;12:30';
const flightArray = flights.split('+'); // Split the main string
console.log(flightArray); // Shows individual flight strings

// 2. Loop Through Each Flight
for (const flight of flights.split('+')) {
  console.log(flight); // Process each flight string
}

// 3. Extract Flight Details Using Destructuring
for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  // type: "delayed_departure", from: "fao21", to: "txl02", time: "11:25"
}

// 4. Format Each Component
// Time: Replace colon with 'H'
const formattedTime = '11:25'.replace(':', 'H'); // → "11H25"

// Type: Remove underscores
const formattedType = 'delayed_departure'.replaceAll('_', ' '); // → "delayed departure"

// Delay: Add emoji if delayed
const delayIndicator = 'delayed_departure'.startsWith('_delayed') ? '🔴' : '';

// Airport Code: Helper function to get uppercase 3-letter code
const getCode = str => str.slice(0, 3).toUpperCase();
const fromCode = getCode('fao21'); // → "FAO"
const toCode = getCode('txl02'); // → "TXL"

// 5. Final Output Assembly with Padding
const output = `🔴delayed departure FAO to TXL (11H25)`.padStart(36);

// === Complete Working Solution ===
const getCodeFinal = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const formattedType = type.replaceAll('_', ' ');
  const delayIndicator = type.startsWith('delayed') ? '🔴' : '';
  const fromCode = getCodeFinal(from);
  const toCode = getCodeFinal(to);
  const formattedTime = time.replace(':', 'H');
  const output =
    `${delayIndicator}${formattedType} ${fromCode} to ${toCode} (${formattedTime})`.padStart(
      36
    );
  console.log(output);
}

// === Key JavaScript Methods Used ===
// split()       → "a+b+c".split('+') → ['a','b','c']
// replaceAll()  → "a_b_c".replaceAll('_', ' ') → "a b c"
// replace()     → "11:25".replace(':', 'H') → "11H25"
// startsWith()  → "hello".startsWith('he') → true
// slice()       → "hello".slice(0,3) → "hel"
// toUpperCase() → "hello".toUpperCase() → "HELLO"
// padStart()    → "hi".padStart(5) → "   hi"

// === Learning Points ===
// - Method chaining: str.slice(0,3).toUpperCase()
// - Destructuring: const [a, b] = array
// - Template literals: `Hello ${name}`
// - Modern JS: replaceAll() is ES2021
// - Efficiency: define functions outside loops
// - Formatting: padStart() for alignment

// === Expected Output ===
// 🔴delayed departure FAO to TXL (11H25)
//    departure BRU to FRA (11H45)
// 🔴delayed arrival TXL to FAO (12H05)
//    arrival FRA to BRU (12H30)

var fibGenerator = function* () {
  let a = 0,
    b = 1;

  // Yield the first number (0)
  yield a;

  // Generate infinite fibonacci sequence
  while (true) {
    yield b;
    [a, b] = [b, a + b]; // Destructuring assignment to swap and calculate next
  }
};

// Alternative solution with more explicit variable names
var fibGeneratorAlt = function* () {
  let prev = 0,
    curr = 1;

  yield prev;

  while (true) {
    yield curr;
    let next = prev + curr;
    prev = curr;
    curr = next;
  }
};

// Alternative solution using array to track state
var fibGeneratorArray = function* () {
  let fib = [0, 1];
  let index = 0;

  while (true) {
    if (index < 2) {
      yield fib[index];
    } else {
      let next = fib[0] + fib[1];
      yield next;
      fib[0] = fib[1];
      fib[1] = next;
    }
    index++;
  }
};

// Test cases
console.log("Example 1 (callCount = 5):");
const gen1 = fibGenerator();
const result1 = [];
for (let i = 0; i < 5; i++) {
  result1.push(gen1.next().value);
}
console.log(result1); // [0, 1, 1, 2, 3]

console.log("Example 2 (callCount = 0):");
const gen2 = fibGenerator();
const result2 = [];
// No calls to gen2.next(), so result2 remains empty
console.log(result2); // []

console.log("Testing more values:");
const gen3 = fibGenerator();
const result3 = [];
for (let i = 0; i < 10; i++) {
  result3.push(gen3.next().value);
}
console.log(result3); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

console.log("Testing alternative solution:");
const genAlt = fibGeneratorAlt();
const resultAlt = [];
for (let i = 0; i < 8; i++) {
  resultAlt.push(genAlt.next().value);
}
console.log(resultAlt); // [0, 1, 1, 2, 3, 5, 8, 13]

console.log("Manual step-by-step (like in example):");
const gen4 = fibGenerator();
console.log(gen4.next().value); // 0
console.log(gen4.next().value); // 1
console.log(gen4.next().value); // 1
console.log(gen4.next().value); // 2
console.log(gen4.next().value); // 3

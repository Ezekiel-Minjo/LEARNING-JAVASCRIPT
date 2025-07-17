async function sleep(millis) {
  return new Promise((resolve) => {
    setTimeout(resolve, millis);
  });
}

// Alternative solution without async/await
function sleepAlt(millis) {
  return new Promise((resolve) => {
    setTimeout(resolve, millis);
  });
}

// Test cases
console.log("Example 1:");
let t1 = Date.now();
sleep(100).then(() => {
  console.log(Date.now() - t1); // Should be around 100ms
});

console.log("Example 2:");
let t2 = Date.now();
sleep(200).then(() => {
  console.log(Date.now() - t2); // Should be around 200ms
});

// Using async/await syntax
async function testSleep() {
  console.log("Testing with async/await:");

  let start = Date.now();
  await sleep(150);
  console.log(`Slept for: ${Date.now() - start}ms`);

  start = Date.now();
  await sleepAlt(250);
  console.log(`Alternative sleep for: ${Date.now() - start}ms`);
}

testSleep();

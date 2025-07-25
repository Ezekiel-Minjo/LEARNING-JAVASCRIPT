const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// accumulate is like a snow ball
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 100);
// use arrow function
const balance = movements.reduce((acc, cur) => acc + cur, 100);
console.log(balance);

// with for...of
let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

// Maximum value
const max = movements.reduce(
  (acc, mov) => (acc > mov ? `${acc}` : `${mov}`),
  movements[0]
);
//   if (acc > mov) return acc;
//   else return mov;
console.log(max);

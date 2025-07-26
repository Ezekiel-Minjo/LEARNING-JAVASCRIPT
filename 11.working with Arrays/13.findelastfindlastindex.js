const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const lastwithdrawal = movements.findLast(mov => mov < 0);

// console.log(lastwithdrawal);

const latestLargeMovementIndex = movements.findLastIndex(
  mov => Math.abs(mov) > 1000
);
// console.log(latestLargeMovementIndex);
console.log(
  `Your latest large movement was ${
    movements.length - latestLargeMovementIndex
  } movements ago`
);
// some and every
// console.log(movements.includes(-130)); // checks for equality
// some checks for condition
const anyDeposits = movements.some(mov => mov > 5000);
console.log(anyDeposits);

// every
console.log(movements.every(mov => mov > 0));

// separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

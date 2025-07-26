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

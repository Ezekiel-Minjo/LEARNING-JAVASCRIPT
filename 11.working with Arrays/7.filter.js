const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// Deposits
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

// withdrawals
const withdrawal = movements.filter(mov => mov < 0);
console.log(withdrawal);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;
const movementsUSD = movements.map(mov => mov * eurToUsd);
console.log(movements);
console.log(movementsUSD);
const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

const movementDiscriptions = movements.map((mov, i) => {
  const transactions =
    mov > 0
      ? `Movment ${i + 1}: You deposited ${mov}`
      : `Movment ${i + 1}: You withdrew ${Math.abs(mov)}`;
  return transactions;
});
console.log(movementDiscriptions);

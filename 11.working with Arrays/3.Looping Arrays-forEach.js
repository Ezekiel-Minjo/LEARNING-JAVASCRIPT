const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements)
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movment ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movment ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

// forEach()
console.log('==========forEach()==========');
movements.forEach(function (movement, i, arr) {
  if (movement > 0) {
    console.log(`Movment ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movment ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
});

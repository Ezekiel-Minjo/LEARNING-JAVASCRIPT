let arr = ['a', 'b', 'c', 'd', 'e'];
// slice()
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1)); // get the last value
console.log(arr.slice(1, -2));
console.log(arr.slice()); // shalow copy
console.log([...arr]);

// splice()
console.log('=====splice()=====');
console.log(arr.splice(-1));
console.log(arr);

// reverse
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'j'];
console.log(arr2.reverse());

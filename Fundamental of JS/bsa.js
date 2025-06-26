// push method: add elements at the end of an array
const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Minjo');
console.log(friends);
console.log(newLength);
// unshift method: add elements at the begining of the array
friends.unshift('Ezekiel');
console.log(friends);

// Removing elements
// pop method: removes the last element of the array
friends.pop()//
console.log(friends);
// remove the 1st element from an array
friends.shift();
console.log(friends)

console.log(friends.indexOf('Steven')); //
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));

if (friends.includes('Peter')) {
    console.log('You have a friend called Peter');
}
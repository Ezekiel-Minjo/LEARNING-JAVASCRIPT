const readline = require('readline');

const zeki = {
    firstName: 'Ezekiel',
    lastName: 'Minjo',
    age: 2025 - 2001,
    job: 'Student',
    friends: ['stiv', 'phoebe', 'grace', 'sharif', 'sammy']
};
// console.log(zeki);
console.log(zeki.friends[2]);
console.log(zeki['lastName'])

const nameKey = 'Name';
console.log(zeki['first' + nameKey]);
console.log(zeki['last' + nameKey]);

// const instrestedIn = prompt('what do you want to know about Zeki? Choose between firstName, lastName, age, job, and friends');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you want to know about Zeki? Choose between firstName, lastName, age, job, and friends: ', function(instrestedIn) {
  if (zeki[instrestedIn]) {
    console.log(zeki[instrestedIn]);
  } else {
    console.log('Wrong request!');
  }
  rl.close();
});

zeki.location = 'Kenya';
zeki['twitter'] = '@Zeki_minjo';
console.log(zeki);
console.log(`${zeki.firstName} has ${zeki.friends.length}, and his best friend is called ${zeki.friends[1]}`);
const zeki = [
    'Ezekiel',
    'Minjo',
    2025 - 2001,
    'Student',
    ['stiv', 'phoebe', 'grace', 'sharif', 'sammy'],
    true
];
const types = [];

for(let i = 0; i < zeki.length; i++){
    // reading jonas array
    console.log(zeki[i], typeof zeki[i]);

    // Filling types array
    // types[i] = typeof zeki[i];
    types.push(typeof zeki[i])
}

console.log(types);
const years = [1991, 2007, 1969, 2020];
const ages = [];

for(let i = 0; i < years.length; i++) {
    ages.push(2025-years[i]);
}
console.log(ages);
// continue and Break
console.log('---ONLY STRINGS---');
for(let i = 0; i < zeki.length; i++){
    if (typeof zeki[i] !== 'string') continue;
    console.log(zeki[i], typeof zeki[i]);
}

console.log('---BREAK WITH NUMBER---');
for(let i = 0; i < zeki.length; i++){
    if (typeof zeki[i] !== 'number') break;
    
    console.log(zeki[i], typeof zeki[i]);
}
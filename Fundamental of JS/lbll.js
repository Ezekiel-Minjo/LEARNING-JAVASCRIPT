const zeki = [
    'Ezekiel',
    'Minjo',
    2025 - 2001,
    'Student',
    ['stiv', 'phoebe', 'grace', 'sharif', 'sammy']
];

for(let i = zeki.length-1; i >= 0; i--) {
    console.log(zeki[i]);
}
// loop inside a loop
 for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`---Start exercise ${exercise}`);
    
    for (let rep = 1; rep < 6; rep++) {
        console.log(`Lifting weights repetition ${rep} :D`);

        for ( let rep = 1; rep < 3; rep++){
            console.log(`mini break ${rep}`);
        }
    }

 }
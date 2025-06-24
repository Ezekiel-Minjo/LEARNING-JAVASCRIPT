// Arrow function
const calAge3 = birthYear => 2037 -birthYear;
const age3 = calAge3(2001);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) =>{
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(2001, 'Minjo'));
console.log(yearsUntilRetirement(2000, 'Zeki'),);
// objects methods
const zeki = {
    firstName: 'Ezekiel',
    lastName: 'Minjo',
    birthYear: 2001,
    job: 'Student',
    friends: ['stiv', 'phoebe', 'grace', 'sharif', 'sammy'],
    hasDriversLicense: false,

    calcAge: function() {
        this.age = 2037- this.birthYear;
        return this.age;
    },
    getSummary: function() {
        return `${this.firstName} is a  ${this.calcAge()} -year old ${this.job}, and he has ${this.hasDriversLicense  ? 'a' : 'no'} driver's license. `
    }
};
console.log(zeki.calcAge());

console.log(zeki.age);
// console.log(zeki['calcAge'](2001));
console.log(`${zeki.firstName} is a ${zeki.age} old ${zeki.job}, and he has a ${zeki.hasDriversLicense = true ? 'has a drivers linces' : '...'}`);
console.log(zeki.getSummary());

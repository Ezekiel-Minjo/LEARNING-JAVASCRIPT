// Base Employee prototype
var Employee = {
    company: "TechCorp",
    getInfo: function() {
        return (`${this.name} works at ${this.company}`);
    },
    clockIn: function() {
        return (`${this.name} clocked in at 9 AM`);
    }
};

// Specific developer object
var developer = {
    name: "Ezekiel",
    role: "Frontend Developer",
    code: function() {
        return (`${this.name} is writing Javascript`)
    }
};

// Link developer to Employee prototype
Object.setPrototypeOf(developer, Employee);

// Developer can use both their own methods and inherited ones
console.log(developer.code()); // Sarah is writing Javascript
console.log(developer.clockIn()); // Sarah clocked in at 9 AM
console.log(developer.getInfo()); // Sarah works at TechCorp
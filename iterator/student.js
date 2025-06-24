// You (student object)
var student = {
    name: "Zeki",
    major: "Software Engineering"
};

// Your parent (prototype object)
var parent = {
    car: "Toyota camry",
    drive: function() {
        return (`Driving the ${this.car}`);
        // return "Driving the " + this.car;
    }
};

// Create the prototype link
Object.setPrototypeOf(student, parent);

// Now you can "borrow" your parent's car
console.log(student.drive()); // "Driving the Toyota Camry"
console.log(student.car); // "Toyota Camry"
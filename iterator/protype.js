function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function () {
    console.log(`Hi, I'm ${this.name}`);
}

const alice = new Person("Alice");
const bob = new Person("Bob");

alice.sayHello();
bob.sayHello();
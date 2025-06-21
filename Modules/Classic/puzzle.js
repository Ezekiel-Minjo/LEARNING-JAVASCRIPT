function Animal(name) {
    this.name = name;
}

const dog = new Animal('Rex');

console.log(dog instanceof Animal);
console.log(dog.__proto__ === Animal.prototype);
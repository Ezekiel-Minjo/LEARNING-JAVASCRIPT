class Animal {
  speak() {
    console.log("Some animal sound");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Meow");
  }
}

class Cow extends Animal {
  speak() {
    console.log("Moo");
  }
}

let pets = [new Cat(), new Cow()];

for (let pet of pets) {
  pet.speak(); // Each calls its own version of speak()
}

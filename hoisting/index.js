const jessica1 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};

function marryPerson(originalPerson, newLastName) {
  originalPerson.lastName = newLastName;
  return originalPerson;
}

const marriedJessica = marryPerson(jessica1, "Davis");
// marriedJessica.lastName = "Davis";
// console.log("Before:", jessica1);
// console.log("After:", marriedJessica);

const jessica = {
  firstName: "Jessica",
  lastName: "williams",
  age: 27,
  family: ["Alice", "Bob"],
};
// shalow copy
const jessicaCopy = { ...jessica };
jessicaCopy.lastName = "Davis";

console.log(jessica, jessicaCopy);
// jessicaCopy.family.push("Mary");
// jessicaCopy.family.push("John");
console.log("Before:", jessica);
console.log("After:", jessicaCopy);

// Deep copy / deep clone
const jessicaClone = structuredClone(jessica);
jessicaClone.family.push("Mary");
jessicaClone.family.push("John");
console.log("Original:", jessica);
console.log("Clone:", jessicaClone);

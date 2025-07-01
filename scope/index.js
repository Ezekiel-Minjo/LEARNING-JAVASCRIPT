const myName = "Ezekiel"; // Global Scope

function first() {
  const age = 30;

  if (age >= 30) {
    // true
    const decade = 3;
    var millenial = true;
  }

  function second() {
    const job = "teacher";

    console.log(`${myName} is a ${age}-old ${job}`);
    // Ezekiel is a 30-old tecaher
  }

  second();
}

first();

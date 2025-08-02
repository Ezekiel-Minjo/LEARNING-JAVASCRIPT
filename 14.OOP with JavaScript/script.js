'use strict';
// // 1. Implement OOP: Constructor function and the new operator
// const Person = function (firstName, birthYear) {
//   // instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };
// const jonas = new Person('Jonas', 1991); // instance of Person
// const matilda = new Person('Matilda', 2017); // instance of Person
// const jack = new Person('Jack', 1975); // instance of Person
// console.log(jonas, matilda, jack);
// console.log(jonas instanceof Person);

// // add static method
// Person.hey = function () {
//   console.log('Hey there 👋');
// };
// Person.hey();

// // 2. prototypes
// console.log(Person.prototype);
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// jonas.calcAge();
// matilda.calcAge();
// jack.calcAge();
// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(jonas));

// // setting properties on the prototype
// Person.prototype.species = 'Home Sapiens';
// console.log(jonas.species, matilda.species, jack.species);

// console.log(jonas.hasOwnProperty('firstName')); // checking for objects own property
// // object.prototype
// console.log(jonas.__proto__.__proto__);
// console.log(jonas.__proto__.__proto__.__proto__);

// console.log(Person.prototype.constructor);

// const arr = [3, 6, 4, 5, 6, 9, 9];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);
// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };
// console.log(arr.unique());
// const h1 = document.querySelector('h1');

// ES6 CLASSES
// class expression
// const PersonCl = class {};

// // class declaration
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   //   methods will be added to prototypr property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not full name`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   //   static method
//   static hey() {
//     console.log('Hey there 👋');
//   }
// }
// const jessica = new PersonCl('Jessica Davis', 1996);
// console.log(jessica);
// jessica.calcAge();
// console.log(jessica.age);
// PersonCl.hey();
// jessica.greet();

// const account = {
//   owner: 'jonas',
//   movements: [200, 530, 120, 300],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };
// console.log(account.latest);

// account.latest = 50;
// console.log(account.movements);

// Object.create
// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     (this.firstName = firstName), (this.birthYear = birthYear);
//   },
// };

// const Steven = Object.create(PersonProto);
// Steven.init('Steven', 2002);
// Steven.calcAge();

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1979);
// sarah.calcAge();

// Inheritance between "Classes": constructor functions.

// const Person = function (firstName, birthYear) {
//   // instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// // Link prototypes
// Student.prototype = Object.create(Person.prototype); // should be added before any new method of the student class

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };
// const mike = new Student('Mike', 2020, 'Computer Science');
// mike.introduce();
// mike.calcAge();
// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);
// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);

// Inheritance between "Classes": ES6 Classes
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //   methods will be added to prototypr property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not full name`);
  }

  get fullName() {
    return this._fullName;
  }

  //   static method
  static hey() {
    console.log('Hey there 👋');
  }
}

class StudentCL extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear); // --> needs to happen first
    this.course = course;
  }

  introduce() {
    console.log(
      `My name is ${this.fullName} and I study ${(this, this.course)}`
    );
  }
  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCL('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();

// Inheritance between "Classes": Object.create()
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    (this.firstName = firstName), (this.birthYear = birthYear);
  },
};

const Steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(
    `My name is ${this.firstName} and I study ${(this, this.course)}`
  );
};
const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();

// console.log('======BANKIST======');
// // 1. public fields
// // 2. private fields
// // 3. public methods
// // 4. private methods
// // 5. static version of these 4
// class Account {
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.pin = pin;
//     this.movements = [];
//     this.locale = navigator.language;

//     console.log(`Thanks for opening an account, ${owner} `);
//   }
//   // Public Interface
//   deposit(val) {
//     this.movements.push(val);
//   }

//   withdraw(val) {
//     this.deposit(-val);
//   }

//   approveLoan(val) {
//     return true;
//   }

//   requestLoan(val) {
//     if (this.approveLoan(val)) {
//       this.deposit(val);
//       console.log(`Loan approved!`);
//     }
//   }
// }

// const acc1 = new Account('Jonas', 'EUR', 111);
// console.log(acc1);
// acc1.deposit(250);
// acc1.withdraw(140);
// acc1.requestLoan(1000);
// console.log(acc1);

console.log('========================Encapsulations==================');
// 1. public fields: declared at the begging of a class
// 2. private fields: use #
// 3. public methods:
// 4. private methods: use #
// 5. static version of these 4
class Account {
  // 1. public fields
  locale = navigator.language;
  bank = 'Bankist';
  // 2. private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // this.movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner} `);
  }
  // Public Interface(API)
  getMovements() {
    return this.#movements;
  }
  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  // 4. private methods
  #approveLoan(val) {
    // fake method
    return true;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved!`);
    }
    return this;
  }
}

const acc1 = new Account('Jonas', 'EUR', 111);
const cashFlow = acc1
  .deposit(250)
  .withdraw(140)
  .withdraw(50)
  .requestLoan(25000)
  .withdraw(4000)
  .getMovements();
console.log(acc1);
console.log(cashFlow);

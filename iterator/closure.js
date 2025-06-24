function greeting(msg) {
    return function who(name) {
        console.log(`${msg}, ${name}`);
    }
}

var hello = greeting("Hello");
var howdy = greeting("Howdy");

hello("Kyle");
hello("Sarah");
howdy("Grant");

function counter(step = 1) {
    var count = 0;
    return function increaseCount() {
        count = count + step;
        return count;
    };
}

var incBy1 = counter(1);
var incBy3 =counter(3);

console.log(incBy1()); // 1
console.log(incBy1()); // 2

console.log(incBy3()); // 3
console.log(incBy3()); // 6
console.log(incBy3()); // 9
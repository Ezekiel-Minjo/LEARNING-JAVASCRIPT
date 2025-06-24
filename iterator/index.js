// an array is an iterable
var arr = [ 10, 20, 30 ];

for (let val of arr) {
    console.log(`Array value: ${val}`);
}

var arrCopy = [...arr];
// iterate characters in a string
var greeting = "Hello world!";
var chars = [...greeting];

chars;
console.log(`characters: ${greeting}`);
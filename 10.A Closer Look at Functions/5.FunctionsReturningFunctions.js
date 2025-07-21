// FUNCTION RETURNING ANOTHER FUNCTION (Closure Example)
// FUNCTIONAL PROGRAMMING USE:
// Returning functions is very useful in functional programming.
// SUMMARY:
// - A function can return another function
// - The returned function can use variables from the outer function (closure)
// - Useful for customization and reusable behavior
// - Can be written in concise arrow function syntax, but may reduce readability

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greeterHey = greet("Hey");
greeterHey("Zeki");
greeterHey("Steven");

greet("Hello")("Jonas");

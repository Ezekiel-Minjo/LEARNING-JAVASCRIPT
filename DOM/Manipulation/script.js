"use strict";
document.getElementById("paragraph").textContent = "Hello, World";
// use javascript to create a new HTML element
let element = document.createElement("p");
element.textContent = "Hello, there!";
document.body.appendChild(element);

const button = document.getElementById("my-button");
button.addEventListener("click", doSomething);

function doSomething() {
  alert("Hello, World!");
}

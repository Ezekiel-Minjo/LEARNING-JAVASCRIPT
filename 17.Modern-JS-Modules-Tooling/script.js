// IMPORTING MODULE
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// console.log('Importing modlues');
// addToCart('bread', 5);
// console.log(price, tq);
// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);
// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// import add, { cart } from './shoppingCart.js';
// add('pizza', 2);
// add('bread', 5);
// add('apples', 4);
// console.log(cart);

// const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
// const data = await res.json();
// console.log(data);

// const getLastPost = async function () {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   const data = await res.json();
//   //   console.log(data);

//   return { title: data.at(-1).title, text: data.at(-1).body };
// };
// const lastPost = getLastPost();
// console.log(lastPost);
// lastPost.then(last => console.log(last));
// top level await
// const lastPost2 = await getLastPost();
// console.log(lastPost2);

// const shoppingCart2 = (function () {
//   const cart = [];
//   const shoppingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;
//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} added to cart`);
//   };

//   const orderStock = function (product, quantity) {
//     console.log(`${quantity} ${product} ordered from supplier`);
//   };

//   return { addToCart, cart, totalPrice, totalQuantity };
// })();
// shoppingCart2.addToCart('apples', 4);
// shoppingCart2.addToCart('pizza', 2);
// console.log(shoppingCart2);

import cloneDeep from 'lodash-es';
const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
console.log(stateClone);

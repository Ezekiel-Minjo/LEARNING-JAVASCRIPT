import { Book, formatBookList } from "./modules/book.js";

// Bookstore focusses on pricing and sales
const storeBooks = [
    new Book("Harry Potter", "J.K Rowling", 15.99),
    new Book("The Martin", "Andy Weir", 12.99)
];

console.log("Bookstore Inventory:");
storeBooks.forEach(book => {
    book.applyDiscount(20); // 20% off sale
    book.print();
});

console.log("Sale items:", formatBookList(storeBooks));
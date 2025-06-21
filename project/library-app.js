import { Book, formatBookList } from "./modules/book.js";

// Library focusses on cataloging
const libraryBooks = [
    new Book("1984", "George Orwell"),
    new Book("Dune", "Frank Herbert"),
    new Book("Neuromancer", "William Gibson")
];

console.log("Library Catalog");
libraryBooks.forEach(book => book.print());
console.log("\nFormatted list:", formatBookList(libraryBooks));
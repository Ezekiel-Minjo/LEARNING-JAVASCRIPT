export class Book {
    constructor(title, author, price = 0) {
        this.title = title;
        this.author = author;
        this.price = price;
    }

    print() {
        console.log(`
            "${this.title}" by ${this.author} - $${this.price}
        `);
    }

    applyDiscount(percent) {
        this.price = this.price * (1 - percent / 100);
    }
}

export function formatBookList(books) {
    return books.map(book => `${book.title} (${book.author})`).join(',');
}
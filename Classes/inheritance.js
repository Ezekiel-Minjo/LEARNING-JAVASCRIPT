//  a class can take  properties and methods from another class.

class Publication {
    constructor(title, author, pubDate) {
        this.title = title;
        this.author = author;
        this.pubDate = pubDate;
    }
    print () {
        console.log(`
            Title: ${this.title}
            By: ${this.author}
            ${this.title}
            `)
    }
}

// more specific types of publication like Book and BlogPost:

class Book extends Publication {
    constructor(bookDetails) {
        super(
            bookDetails.title,
            bookDetails.author,
            bookDetails.publishedOn
        );
        this.publisher = bookDetails.publisher;
        this.ISBN = bookDetails.ISBN;
    }

    print() {
        super.print();
        console.log(`
            Publisher: ${ this.publisher }
            ISBN: ${ this.ISBN }
        `)
    }
}

class BlogPost extends Publication {
    constructor(title, author, pubDate, URL) {
        super(title, author, pubDate);
        this.URL = URL;
    }

    print() {
        super.print();
        console.log(this.URL);
    }
}

var YDKJS = new Book({
    title: "You Don't Know JS",
    author: "Kyle S impson",
    publishedOn: "June 2014",
    publisher: "O'Reilly",
    ISBN: "123456-789"
});

YDKJS.print();

var forAgainstLet = new BlogPost(
    "For and against let",
    "Kyle Simpson",
    "October 27, 2014",
    "https://davidwalsh.name/for-and-against-let"
);

forAgainstLet.print();
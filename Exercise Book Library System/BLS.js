// Step 1:Create the Parent publication class
class Publication {
    // Constructor runs when we create a  new Publication
    constructor(title,author, publishedDate) {
        this.title = title;
        this.author = author;
        this.publishedDate = publishedDate;
    }
    print() {
        console.log(`
            Title: ${ this.title}
            By: ${ this.author }
            Published: ${ this.publishedDate}
        `);
    }
}

// Step 2: Create Book class that inherits from publication
class Book extends Publication {
    // Constructor for Books - takes all publication properties plus ISBN
    constructor(title, author, publishedDate, ISBN) {
        super(title, author, publishedDate);
        this.ISBN = ISBN; //add the new property specific to book
    }
    // Override the print method to include ISBN
    print() {
        console.log(`
            Title: ${ this.title }
            By: ${ this.author }
            Published: ${ this.publishedDate }
            ISBN: ${ this.ISBN }
        `);
    }
}

// Step 3: Create Magazine class that inherits from Publication
class Magazine extends Publication{
    constructor(title, author, publishedDate, issueNumber) {
        super(title, author, publishedDate);
        this.issueNumber;
    }

    // Override print method to include issue number
    print() {
        console.log(`
        Title: ${ this.title }
        By: ${ this.author }
        Published: ${ this.publishedDate }
        Issue: ${this.issueNumber}    
        `);
    }
}

// Step 4: Create EBook class that inherits from publication
class EBook extends Publication {
    constructor(title, author, publishedDate, fileSize) {
        super(title, author, publishedDate);
        this.fileSize =fileSize;
    }

    // Override print method to include file size
    print() {
        console.log(`
            Title: ${ this.title }
            By: ${ this.author }
            Published: ${ this.publishedDate }
            File Size: ${ this.fileSize }
        `);
    }
}

// step 5: Create instances of each class
// console.log("=== Book Library System ===\n");

// Create a Magazine instance
const book1 = new Book("JavaScript Guide", "Kyle", "2020", "123456789");
book1.print();

// Create a Magazine instances
const magazine1 = new Magazine("Tech Weekly", "Sarah Johnson", "2024", "Issue #45");
magazine1.print();

// Create an EBook instance
const ebook1 = new EBook("Learning Python", "Alice Smith", "2023", "15.2MB");
ebook1.print();


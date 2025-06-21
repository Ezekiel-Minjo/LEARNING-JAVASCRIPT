// note the capital letter by convention
function Page(title) {
    this.title = title;
    this.views = 0;
    this.display = function() {
        console.log(`Page: ${ this.title }`);
    };
}

// creating instances using 'new'
let page1 = new Page("Home");
let page2 = new Page("About");

// call the display method to see output
page1.display();
page2.display();
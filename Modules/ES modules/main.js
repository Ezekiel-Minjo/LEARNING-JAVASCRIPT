import { create as newBlogPost } from "./blogpost.js"

var forAgainstLet = newBlogPost(
    "For and Against Let",
    "Kyle Simpson",
    "October 27, 2014",
    "https://davidwalsh.name/for-and-against-let"
);

forAgainstLet.print();
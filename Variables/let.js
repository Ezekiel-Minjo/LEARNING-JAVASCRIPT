/*
let: is block-scoped
This means the variable only exist inside the {} block where it's declared.
*/ 
// Example
{
    let name = 'Brian';
    console.log(name); // Brian
}

// console.log(name); //Error: name is not defined

// can be updated but NOT re-declared in the same scope
// Example
 let age = 39;
 age =40; // Updated
//  let age = 41; // Errror: already declared in the same scope

/*
✅ Summary:
Use let when you want variables that are temporary, private to a block, and safe from accidental re-declaration. It helps avoid bugs in loops and conditionals.
*/  
/* A module is simply a file. The purpose of module in JS is to break our code 
into separate files. This allows more modular code, can work with smaller files,
and these can imported or exported  */

// Say that we have a file named  that contains these codes.
export function addTwo(a, b) {
    console.log(a + b);
}

export function addThree(a, b, c) {
    console.log(a + b + c);
}
// to make it a JavaScript module is use the export syntax

/* In general, there are two ways to export modules in JavaScript:

1. Using default exports 
    export default  fun() {}
We can have one default export per JavaScript module

2. Using named exports
there can be only one default export, but as many named exports as we want so 
we use this method when we to export only certain parts of a given JavaScript file. */



// Importing Modules - see importing4rmModules.js


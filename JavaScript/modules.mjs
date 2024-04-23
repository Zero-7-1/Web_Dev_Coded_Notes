// Concept of Modules is important for React.js
// refer importing4rmModules with this 


/* A module is simply a file. The purpose of module in JS is to break our code 
into separate files. This allows more modular code, can work with smaller files,
and these can imported or exported  */

/* In general, there are two ways to export modules in JavaScript:

1. Using 'default' exports 
    export default  fun() {}

We can have one default export per JavaScript module

2. Using 'named' exports
there can be only one default export, but as many named exports as we want so 
we use this method when we want to export only certain parts of a given JS file. 
*/


// Say that we have a file that contains these codes.
export function addTwo(a, b) {
    console.log(a + b);
}

export function addThree(a, b, c) {
    console.log(a + b + c);
}
// to make it a JavaScript module we simply use the 'export' syntax for named export 

let per1 = "John Doe";
let per2 = "John Wick";

// we can also do something like this 
export {per1, per2};

// We can only have one default export in a file
function message() {
    let name = "Jesse";
    let age = 40;
    return name + ' is ' + age + ' years old.';
  }
 export default message; 
  










/*
   Q. DEFINE JS FUNCTION. 
   Functions can hold many lines of codes which can declared and can be resused 
   in other parts of the code performing same tasks . Additionally we can pass 
   data to the function, function can also return data too.  
   
   Function's type is obejct.

   JavaScript functions are defined with the 'function' keyword.

   Functions can also be defined with a built-in JavaScript function constructor
   called Function().


   Functions in js are actually just values, its not a type, so if its a value 
   we can store it in a variable, will get back to this later. 
*/



/* Q. WHAT'S THE DIFFERENCE BETWEEN FUNCTION AND METHOD ? 
Functions vs Methods - Key difference is that methods are associated with objects 
or class, method is also a function but the name is used in oops where function is part 
of a class whereas normal functions are independent of any class  */ 

 

// function usage 1 without a return 
 
function fun_name(a, b) {  // parameters acts as varibles for function
    let result = a + b;   
    console.log("Sum of a and b is " + result);
}
fun_name(5,5); // ivoking the function with arguments for parameters
/*  Q. WHAT IS DEFAULT PARAMETER ? 
We could provide a default parameter for a, b (Like a=3, a=4) so that if we 
don't pass any arguments while function call default parameter value will be 
arguments. 
*/

// Q. DIFFERENTIATE BETWEEN PARAMETER AND ARGUMENTS IN A FUNCTION
/*
Parameter are the varibales whose value needed to be passed 
while calling the function, simply that value is known as arguments for parameters. 
*/ 


// Objects as parameters 
// Q. CAN OBJECTS BE PASSED AS PARAMETERS TO A FUNCTION ? 

function loginUser(user) {
    return `The user ${user.name} with the id of ${user.id} is logged in`; 
}
const user = {
    id: 1,
    name: 'John'
};
console.log(loginUser(user)); 



// Arrays as parameters, logs a random element from an array 
// Q. CAN ARRAYS BE PASSED AS PARAMETERS TO FUNCTION ? 

function getRandom(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    console.log(item);
}
getRandom([1, 2, 3, 4, 5, 6, 7]);



// function with return 
function getArea(width, height) {
    return width * height;  // returns any value from fucntion 
}
wallWidth = 5;
wallHeight = 10;
var area = getArea(wallWidth,wallHeight);
console.log("Area is " + area);

// Q. DIFFERENCE BETWEEN A FUNCTION WITHOUT A RETURN TYPE AND WITH A RETURN TYPE 
/*
No return is suitable for cases where we want to perform an action that needs no
further processing outside the function. In that case we would only pass the arguments
for function if it is applicable and that's it.
whereas,
In return, we can use the returned value for further processing outside the 
function. 
*/

function calArea(width,height){
    var area = width * height;
    return area;
}
wallOne = getArea(5,3);
wallTwo = getArea(6,7);
console.log(wallOne);
console.log(wallTwo);

// Q. IS IT POSSIBLE TO RETURN MORE THAN ONE VALUE FROM A FUNCTION ? 
// function usage 4 - returning more than one value using array only  

function getSize(width, height, depth) {
    var area1 = width * height;
    var volume = width * height * depth;
    var sizes = [area1, volume]; // Create an array and return it 
    return sizes; // Return the array containing both values
}
/* When to use */ 
var sizes1 = getSize(3, 6, 8); // Call the function and get the array of sizes
var area_result = sizes1[0]; // Access the area value at index 0
console.log("Using Array for Area: " + area_result);
var volume_result = sizes1[1]; // Access the volume value at index 1
console.log("Using Array for Volume: " + volume_result);




// Q. WHAT'S THE DIFFERNCE BETWEEN FUNCTION AND FUNCTION EXPRESSION
// function expression

 let yourAge = function(presentYear, birthYear) {  // no name for function 
    return presentYear - birthYear;  
};
let age = yourAge(2024,1999);
console.log("Hi your age is:  " + age); 

/* In Function Expression, we don't use a name for the function 
   (Anynomous Function), rest everything is same but we store it in a varibale and that variable will be then 
   cary the function value.   
   Function declarations are hoisted and can be called before their declaration 
   in the code. But Function expressions are not hoisted and can only be 
   called after they have been defined in the code.
*/ 


 // Arrow Function
// Q. EXPLAIN HOW TO WRITE ARROW FUNCTION IN JS  ? 

/*
  It is a special form of function expression that is shorter and faster to write, 
  function keyword is not needed hence let and const can be used which can avoid 
  hoisting issues. Its always recommeded to use Arrow functions while coding in JS. 
  
  Note:
  Arrow functions do not have their own 'this'. 
  They are not well suited for defining object methods.
*/

// Arrow Function Example 1 

const yourAge2 = (presentYear, birthYear) => presentYear - birthYear; 

/* if there are not multiple parameters, we don't even need to enclose them 
   in parentheses.But () is needed for no parameters. 
   
   => is used to separate the parameters from the function body.  
   
   we can omit the braces {} and the return keyword if the function 
   is a single statement
*/

// Arrow Function Example 2 (same as 1)

const yourAge3 = (presentYear, birthYear) => { 
    return presentYear - birthYear 
};

let output = yourAge3(2024, 1999);
console.log(output);

// Functions are object so they have both methods and properties 
// we may use arguments.length property which will returns the number of arguments
  

// Q. CAN A FUNCTION CALL ANOTHER FUNCTION ? 
// Functions calling another function 

function cutFruit(fruit){
    return fruit * 8; // say fruit is cut into 8 pieces 
}; 
function jucieMaker(apple, orange) {
    const applePiece = cutFruit(apple); // calling cutFruit()
    const OrangePiece = cutFruit(orange); // calling function in another function 
    const jucie = `Jucie with ${applePiece} apple pieces and 
                   ${OrangePiece} oranges pieces`;
    return jucie;
};
 
myJuice = jucieMaker(1,3);
console.log(myJuice); // returns say juice with no of fruits pieces  



// Self-Invoking Functions or Immediately-Invoked Function Expression (IIFE)
/* Q. WHAT ARE SELF-INVOKING FUNCTIONS OR IIFE ? 
The primary purpose of an IIFE is to create a new scope for variables,
preventing them from polluting the global scope. 

This can be particularly useful for encapsulating code and avoiding variable 
name conflicts.

The function is defined within parentheses ( function() ). 
This ensures that the function is treated as an expression rather than a declaration.
Add another pair of () at the end which will immediately invoke the function.

*/
(function () {
    console.log("Hello!!");  
  }
) ();  // I will invoke myself





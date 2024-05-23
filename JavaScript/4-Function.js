


  /*
   DEFINE FUNCTION. 
   Functions can hold many lines of codes which can declared and can be resused in 
   other parts of the code performing same tasks . Additionally we can pass data 
   to the function, function can also return data too.  

   Functions in js are actually just values, its not a type, so if its a value 
   we can store it in a variable 
*/



/* Q. WHAT'S THE DIFFERENCE BETWEEN FUNCTION AND METHOD ? 
Functions vs Methods - Key difference is that methods are associated with objects or 
class, method is also a function but the name is used in oops where function is part 
of a class whereas normal functions are independent of any class  */ 

 

// function usage 1 without a return 
 
function fun_name(a, b) {    // parameters acts as varibles for function, gets defined 
    let result = a + b;         // once we call the function, represents the input data 
    console.log("Sum of a and b is " + result);
}
fun_name(5,5); // ivoking the function with arguments for parameters

// Q. DIFFERENTIATE BETWEEN PARAMETER AND ARGUMENTS IN A FUNCTION
/*
Parameter as learned earlier are the varibales whose value needed to be passed while
calling the function, simply that value is known as arguments for parameters 
*/ 

// function usage 2 with a return 
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

// function usage 3 

function calArea(width,height){
    var area = width * height;
    return area;
}
wallOne = getArea(5,3);
wallTwo = getArea(6,7);
console.log(wallOne);
console.log(wallTwo);

// function usage 4 - returning more than one value usuing array 

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



// function expression

 let yourAge = function(presentYear, birthYear) {  // no name for function 
    return presentYear - birthYear;  
};
let age = yourAge(2024,1999);
console.log("Hi your age is:  " + age);
// Q. WHAT'S THE DIFFERNCE BETWEEN FUNCTION AND FUNCTION EXPRESSION 

/* In Function Expression, we don't use a name for the function (Anynomous Function), 
   rest everything is same but we store it in a varibale and that variable will be then 
   the function  
   Function declarations are hoisted and can be called before their declaration 
   in the code.
   Function expressions are not hoisted and can only be 
   called after they have been defined in the code.*/ 




  // Arrow Function - added in ES6 

  /*
  It is a special form of function expression that is shorter and faster to write 
*/

// lets convert our function expression example to arrow function 
let yourAge2 = (presentYear, birthYear) => presentYear - birthYear; 
/* if there are not multiple parameters, we don't need to enclose them 
   in parentheses. 
   => is used to separate the parameters from the function body. 
   for single expression like this, we can omit the braces {} and the return keyword
*/


// Functions calling another function 

function cutFruit(fruit){
    return fruit * 8; // say fruit is cut into 8 pieces before jucie

}





function jucieMaker(apple, orange) {
    const jucie = `Jucie with ${apple} apple and ${orange} oranges`;
    return jucie;
}

myJuice = jucieMaker(1,3);
console.log(myJuice); // return say juice with no of fruits 

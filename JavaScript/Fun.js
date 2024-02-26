/* Functions vs Methods - Key difference is that methods are associated with objects whereas 
function is a standalone entity */ 

// function usage 1 

function fun_name(a, b) {    // parameters acts varibles for function
    let result = a + b;     
    console.log("Sum of a and b is " + result);
}
fun_name(5,5); // ivoking the function with arguments for parameters

// function usage 2 
function getArea(width, height) {
    return width * height;
}
wallWidth = 5;
wallHeight = 10;
var area = getArea(wallWidth,wallHeight);
console.log("Area is " + area);

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

 var area2 = function(width, height) {
    return width * height; 
};
var size2 = area2(7,7);
console.log("Function Expression value is " + size2);
/* Putting function where intrepreter would expect is treated as expression 
here name function name is ommited (anynomous function) and it is stored in a variable */
/* Function Decalration Vs Function Expression 
Function declarations are hoisted and can be called both before and 
after their declaration in the code.
Function expressions are not hoisted and can only be 
called after they have been defined in the code.*/ 


// Immidiately Ivoked Function Expressions (IIFE) ivoked immidiately after it is defined 
var area3 = (function(width, height) {
    return width * height; 
} (7,8) ); 
console.log("IIFE value is " + area3);


// Anonymous functions
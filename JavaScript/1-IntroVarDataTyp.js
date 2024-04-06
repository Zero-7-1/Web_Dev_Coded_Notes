/*----Codes here written in node.js enviroment which can run selected lines 
of code easily inside VS code terminal without browser console-----------*/






/*
JavaScript is different from other complied languages where the entire code is 
translated into machine code or an intermediate code before execution.
In the case of JavaScript, the source code is delivered to the browser, and 
the browser's JavaScript engine parses and executes the code on-the-fly. 
This process is known as interpretation. To be more specific modern browsers 
engines V8 of Chrome and SpiderMonkey use a combination of interpretation and 
compilation which is known as JIT (Just in Time) compilation 
(or simply run time compilation). 
*/

 /*   
 In most cases js codes will run fine without semicolon and we might think that it is 
 optional or no need like python but it important to enforce use of semicolon in js.
 In js we have a mechanism called automatic semicolon insertion (ASI), this gives 
 the appearance that semicolons are optional but it might casue problems like one
 below 
 */
// problem we might face if we habbituate js without semicolon 
 function foo() {
  return
  {
      bar: 'hello'
  };
}

console.log(foo());     // undefined
/* ASI automatically inserts a semicolon after return, 
resulting in the function returning undefined rather than the intended object 
{ bar: 'hello' }. */







/* JS variables can be declared directly without any data type or keyword 
     when used (not recommended) *
z = 5;
p = 5;
r = z+p;
console.log(r);
/* In these cases js treats above variables as global variables & attaches it to global 
object i.e. window for browsers. */

/* Only use var to support old browsers, it doesn't have block level 
it would be very bad idea to use var in a block level statement 
like function or if statement etc.. 
*/

/* We use const if we are absolutely sure about the value doesn't change as const 
cant't be redeclared, reassigned and has block level scope i.e. they are accessible 
in which block they were declared. We should use const when we declare:
A new Array
A new Object
A new Function
*/

const Colors= ["red", "blue", "green"];
Colors[0] ="Pink";  // replacing in the place of red. 
Colors.push("Yellow"); // we CAN do this but can't directly reassign
console.log(Colors);

const powers = {Fire:"Red", Sky:"Blue", Yellow:"Soil"};
powers.Yellow="changed";
powers.black="dark"; // can add 
console.log(powers);

/* 
CAN:
Change the elements of const ARRAY
   Change the properties of const OBJECT 
*/

/*
use let for other cases 
let can't be redeclared but can be reassigned and have block level scope
let and const has to be declared before use and have block level scope 

let and const declared outside a block can have global scope 
*/

let dr = "Sam"; // global let variable 
dr = "Ram";     // now dr is Ram , Reassignment 
// let dr = "Dan"  -- this is redeclare which will sytax error 
console.log(dr); // it will give no error 


const mr = "John"; // global const 
mr = "Sam"; // trying reassign, vs code will not show syntax error but 
console.log(mr); // here at runtime we get 'Assignment to constant variable error' 





/* Block Scope 
Block-level scope refers to the scope of variables or identifiers 
declared within a block of code. In many programming languages, including JavaScript,
a block is defined by a pair of curly braces {}. Examples of blocks include if 
statements, for loops, while loops, and function definitions.

In languages with block-level scope, variables declared within a block are 
only accessible within that block and any nested blocks. 
Once the block is exited, the variables declared within it are no longer accessible.
 */





// var can be used without declaration and var is hoisted globally
//  (another reason for var downfall) we shall see scope later in deatils 




/* In the beggining we saw that we can use variables directly without declaring them 
and it was not recommeded - reason Hoisting and var has the same problem. 

Hoisting: 
js engine runs through our codes 2x 
1. Creation phase - goes through the code and allocates memory for declarations 
2. Execution phase - actually executing the code, going through line by line, 
                     doing assignment, calling functions etc.. 
In short declarations comes first then assignment
*/
console.log('myName', myName); // myName undefined here 
var myName = 'John Wick';   
console.log('myName', myName);
/* No matter how we are declaring, js will always go through 
   1. Declaration 2. Initialization 3. Utilization so according to this 
  
   js will first check for declaration and allocates memory and here in the
   above code the value of the memory space will be undefiend and in second 
   run it will assign actual value  */

/* Hoisting wit var  */
console.log(x)        // initialized with undefined 
var x = 5;           // var x; is hoisted but not x = 5.
//This leads to unexpected results and bugs  

/* But in case  let and const we can't access the variable before declaration.*/ 
console.log(x)  
let x = 10; // reference error 
  
// we limit here to variable hoisting, we shall see other like function hoisting later  
  
/* Tips:  
- Use let and const instead of var or auto declaration as 
  they provide block level scope 
- always declare variables at the beiginning of the scope */ 





/* Identifiers - Unique names of variables 
rules of naming - case-sensitive, must beigin with letter(also $ and _), meaningful

Literals - Just the values associated with variables like numeric literals, string literls
*/


















// DATA TYPES 
/* JS is a dynamically typed language - it will automatically figure out the data type based 
on the value we assign to the variable at run time and these types can also change. */

let foo = 42; // foo is a number
foo = "Liku"; //  foo is now string 
console.log(foo);  

/* Also JS is weakly typed i.e. it performs type conversion when mismatch with types instead 
throwing errors.
Type Conversion (Implicit)- JS Converts one or more values to a common data type
for any operation to proceed. 
Implicit Rules like:
- String Concatenation: When we use the + operator to concatenate values, js will 
convert non-string values to strings.
- Arithmetic Operations: JS tries to convert non-numeric values to numbers. 
- When we use comparison operators (e.g., ==, !=, >, <), js may convert values to a common data 
type before comparing them. 
*/
let equality = 5 == "5";  // Result: true (automatic type conversion for equality)
console.log(equality);
/* The == operator performs type coercion if the operands are of different types. 
In this example, the string is automatically converted to a number for the equality comparison. */


let logicalAnd = "hello" && true;  // Result: true (automatic type conversion to boolean)
/* Logical operations may involve type coercion to boolean values. 
In this example, the non-boolean operand is automatically converted to a boolean 
for the logical AND operation.
To avoid issues related to automatic type conversion, some developers prefer to 
use strict equality (===) and inequality (!==) operators, 
which do not perform type coercion and require both value and type to be the 
same for equality.*/

/*
This type conversion can lead to unexpected results if we're not careful. So it's often a 
good practice to be explicit about data types and use type casting.

Type Casting (Explicit)- Explicitly changing the data type of a value using some functions. */

// - Number() function casts a value to number. 
let ExpNum = Number("8.14");
console.log(typeof(ExpNum));  

let EmpStr = Number("");
console.log(EmpStr);  // why 0 ? coz it's default for number 

let NotNum = Number("John");
console.log(NotNum); // Returns NaN (but type is of number) if conversion is not possible. 

// - parseInt() converts to an integer or whole number
/* note: - parses the string from left to right until it encounters a 
          character that is not a valid part of the integer, and then it stops.
         - The function takes two parameters - the string to be parsed and takes an 
           optional second argument represents the radix or base for parsing 
           the string. By default, it assumes base 10.
         - ignores leading white space.
         - parsing stops at the first non-numeric character
*/
const intNum = parseInt("123"); // Converts to an integer
console.log(typeof(intNum)); 

const binaryString = "1010"; // 10 in binary. 
const octString = "12"; // 10 in ocatl 
const hexString ="A"; // 10 in hexadecimal 
let parsedBinary = parseInt(binaryString, 2); // Parse as binary
let parsedOctal = parseInt(octString, 8);   // Parse as octal
let parsedHex = parseInt(hexString, 16);    // Parse as hexadecimal
console.log(parsedBinary); 
console.log(parsedOctal);  
console.log(parsedHex); 
console.log(typeof(parsedHex));

let spacedString = '   42';  // White spaces will be ignored here 
let parsedInt = parseInt(spacedString);
console.log(parsedInt); 

// - parseFloat() converts string into a floating-point number.
/* Note: - parses the string until it reaches an invalid character and then stops.
         - does ignore leading white space.
         - does not take a radix argument; it always assumes base 10.
 */
         let spacedString2 = "   42.5";
         let parsedFloat = parseFloat(spacedString2);
         console.log(parsedFloat); // Output: 42.5
         


// - String() explicitly cast a value to a string.
const aNum = 88;
const weString = String(aNum);
console.log(weString);
console.log(typeof(weString));

/* Note that Scenarios where we should consider using explicit type conversion in JavaScript 
are while user input processing. */
 
/* Primtive vs Reference- 
- Primitive data types are simple data types, its values can not be changed directly 
like objects and any operations that appears to change primitive value actually creates
a new value but it doesn't change the original value which will be still in the memory but is 
is not accessible by the current variable which now refers to new value. 
For example suppose we have x = 3.17 and if we do  
x = 9.11 then this value overides the previous value 
which is not essentially a direct change but rather reassignment.

-Also Primitives stores single vlaue unlike objects which stores many value.
and Primitive types stores a copy of exact value directly in the memory 
but reference types store reference to the memory location rather exact value.

- Operations with primitives are faster. */

// JS has 7 primitive data types and 1 reference data type (Object)

// 1. Strings - textual data within single or double quotes 

let text = "Sudhanshu Sekhar Barik"
let lenghth = text.length   // length property note this not a function or method 
console.log("Your name's lenghth is " + lenghth + " including spaces");

// slicing 
let originalString = "Sudhanshu";
let slicedString = originalString.substring(0,1); 
console.log(slicedString);

// upper casing and lower casing 
let originalString2 = "John Wick";
let upperCase_name = originalString2.toUpperCase();  // note that these do not take parameters
let lowerCase_name = originalString2.toLowerCase();
console.log(upperCase_name);
console.log(lowerCase_name);
/* To lowercase only specific characters in a string, we can manually manipulate the string by 
targeting those characters. This can be done by converting string to arrays and then 
modify specific elements (best way) */
// split() method splits a string to an array of substrings 
// '' is used as separator, string is split between words 
let originalString3 = 'john wick';
let charArray = originalString3.split('');
charArray[0] = charArray[0].toUpperCase();
charArray[5] = charArray[5].toUpperCase();
// joining the array back to string 
let newString = charArray.join('');
console.log(newString);

// there are many more methods & things related to string (refer bookmarked WP) .. 


// 2. Numbers - with and without decimals 
// Extra large or extra small numbers can be written with scientific (exponent) notation
let a = 123e5;
let b = 123e-5;
console.log(a);
console.log(b);
// Integers (numbers without a period or exponent notation) are accurate up to 15 digits.
let c = 999999999999999;
let d = 9999999999999999; // loses accuracy 
console.log(c);
console.log(d);
// Floating point arithmetic is not always 100% accurate.
/* NaN (Not a Number) indicates that the number is not legal, it is a special value we get due
of meaningless operations on numbers
*/
let x = 100/"Ten"; // NaN  
let y = 100/"10"; // is valid but o/p will be string 
console.log(x);
console.log(y);

// To check if a value is NaN, you can use the isNaN() function
let value = NaN;
console.log(isNaN(value));
// a direct equality check with === will return false

// similarly infininty indicate that number outside the largest possible number  

// There are various number methods like 
const num = 3.14159265359;
const formattedNum = num.toFixed(1); // Formats  decimal places
console.log(formattedNum); // Output: "3.14"
console.log(typeof(formattedNum)); // note that all methods will return string (why ?)

const num2 = 12345.6789;
const formattedNum2 = num2.toPrecision(7); // formats with a significant digits. 
console.log(formattedNum2); //  note that outputs are rounded. 

const num3 = 12345.6789;
const formattedNum3 = num3.toExponential(2); // formats to exponential notation  
console.log(formattedNum3); // Output: "1.23e+4"




// checking data types 
let g= typeof(originalString2);
console.log(g);

// 3. BigInt - 
/* BigInt can be used to store integer values that are too 
big to be represented by a normal JavaScript Number. As we know JavaScript integers 
are only accurate up to 15 digits */
let MybigInt = 99999999999999999n;   // to create BigInt append n at the end OR 
let MyBigInt2 = BigInt(999999999999999); // using BigInt constructor 
console.log(MybigInt);
console.log(MyBigInt2);
/* Note that when using the BigInt() constructor, it will truncate any decimal part of 
the number so appending n at end is the best method */

// Numbers methods & Properties -- refer WP Bookmark

let t = 500;
let tX = t.toString(); //returns a number as string
console.log(500 + tX); 

let d2 = 4.1234;
let d3 = d2.toFixed(2); // returns a string number with specified no. of decimals 
console.log("d3 value is " + d3); 


// 4. Boolean - TWO values T or F 
//  Basis for all JavaScript comparisons and conditions.
let Boo = (10<5);
console.log(Boo); // false 

// 5. Undefined - represents a variable that is declared but not assigned 
let MyVar;
console.log(MyVar);

// 6. null - intentional absence of any value. 
let nullVar = null; // or ""
console.log(nullVar);
// both null and undefined are considered false when tested with boolean and 
// typeof null is object 

// 7. Symbol 
/* Symbols are unique and immutable values that can be used as identifiers for object 
properties.  */
// Using symbol() constructor 
let uniqueSymbol = Symbol(); // Creating a symbol without a description
let symbolWithDescription = Symbol('mySymbol'); // Creating a symbol with a description
console.log(uniqueSymbol);
console.log(symbolWithDescription);
/* Symbols are commonly used as keys for object properties when you want to avoid naming 
conflicts and ensure uniqueness. They are often employed in scenarios where the specific
identity of a property is more critical than its value. */
let myObj = {};
let mySymbol = Symbol('uniqueKey');

myObj[mySymbol] = 'Hello, Symbol!';

console.log(myObj[mySymbol]);  // Hello, Symbol!   













// js non-primitive (reference types)
/* There are actually 2 types of memory i.e. Stack and Heap. 
Primitives are stored directly in the stack memory whereas reference types are 
stored in the heap memory and accessed by reference  */
// 8. Objects
/* Object data types includes 
   -> Arrays 
   -> Functions 
   -> Date & Math Objects  */


/* The JavaScript Math object helps us to perform mathematical tasks on numbers. */
 // Math.property 
 let x = Math.PI;  // Returns PI 
 console.log(x);
 
 // Math.method() 

 let x = Math.trunc(8.90);  // Return only interger part, ignore decimal part
 console.log(x);

 let x = Math.round(4.2);  // Rounds to nearest integer 
 console.log(x);

 let x = Math.ceil(4.3);  // Rounds UP to nearest integer 
 console.log(x);

 let x = Math.floor(5.9);  // Rounds DOWN to nearest integer
 console.log(x);

 let x = Math.sqrt(4);   // To find square root of a number 
 console.log(x);

 // How many times must we multiply 2 to get 8?
 let x = Math.log2(8);
 console.log(x);

 let x = Math.min(0, 150, 30, 20, -8, -200); // Finds lowest value 
 console.log(x);

 let x = Math.max(0, 150, 30, 20, -8, -200);  // Finds higest vlaue 
 console.log(x);

 let x = Math.abs(-4.7);  // Gives absolute positive value 
 console.log(x);

 let x = Math.pow(8, 2); // Returns x to the power of y
 console.log(x);

 let x = Math.sign(-3); // Returns sign of number -1 for negative, 1 for positive and NaN 
 console.log(x);  

 let x = Math.random();  // Gives random between 0 to 1 with every reload 
 console.log(x);
 // Suppose we want decimal between 1 to 10 then 
 let x = Math.random() * 10 + 1 ; // if we need 1 to 100 the * 100 + 1 
 console.log(x);
 // to make it whole number we round it down and this way we generate random numbers 
 let x = Math.trunc(Math.random() * 10 + 1) ;
 console.log(x);



 // Date Object 
 /* Date object represents date and time at a particular time. We can initiate a date 
 object with the new keyword  */
 let date;
 date = new Date();
 console.log(date);
// can convert date object to string too
date = date.toString();
console.log(date);
// giving specific date + time format 
date = new Date(1999, 8, 4, 6, 30, 0);  // note that 0 for jan i.e month starts with index 0
date = date.toString();
console.log(date);

/* Timestamp describes a point in time and its an integer representing number of seconds 
passed since some year.  */
let date2
date2 = Date.now()  // Timestamp in miliseconds for JS
// date2 = Math.floor(Date.now() / 1000) // Timestamp in seconds 
console.log(date2);
// to get timestamp of a specific date 
date2 = new Date(1999, 8, 4, 6, 30, 0);
date2 = date2.getTime();
console.log(date2);









 






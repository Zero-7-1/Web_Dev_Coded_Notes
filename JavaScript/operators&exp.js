/* An expression is a valid unit of code that resolves to a value. There are two types of expressions: 
those that have side effects (such as assigning values) and those that purely evaluate. */

x = 7;   // The expression itself has a side effect of changing the value of x. 
y = 3+4 ;  // These expressions purely evaluate and produce a value. 
console.log(y);
// All complex expressions are joined by operators, such as = and +.

/* Operators are symbols that perform operations on operands. 
Operands can be variables, values, or expressions. 
There are various types of operators in JavaScript:
1. Assignment operators 
2. Comparison operators
3. Logical operators  
4. Conditional (ternary) operator  
5. Arithmetic operators
6. BigInt operators
7. String operators
8. Bitwise operators 
9. Comma operator
10. Unary operators
11. Relational operators 
*/ 











/* The precedence of operators determines the order they are applied when evaluating an expression 
Here is a brief overview of the precedence of some common operators in JavaScript (from highest to lowest):

1. Member Access:
. (dot notation)
[] (bracket notation)

2. Function Call:
() (function invocation)

3. Postfix/Unary Operators:
expr++, expr-- (postfix increment/decrement)
++expr, --expr (prefix increment/decrement)
+expr, -expr, ~expr, !expr (unary plus, minus, bitwise NOT, logical NOT)

4. Multiplicative Operators:
*, /, % (multiplication, division, modulus)

5. Additive Operators:
+, - (addition, subtraction)

6. Relational Operators:
<, >, <=, >= (less than, greater than, less than or equal to, greater than or equal to)
instanceof, in

7 . Equality Operators:
==, !=, ===, !==

8. Logical AND:
&&
 
9. Logical OR:
||

10. Conditional (Ternary) Operator:
? :

11. Assignment Operators:
=, +=, -=, *=, /=, %= (and others)
*/
/*Associativity determines the direction in which operators with the same precedence are
evaluated—whether they are evaluated from left to right or right to left. 
Left-to-Right Associativity:
Most operators, such as addition (+), subtraction (-), and assignment (=), are left-to-right associative.

Right-to-Left Associativity:
The exponentiation operator (**) is an example of a right-to-left associative operator.
*/ 









// ASSIGNMENT OPERATORS 
 
 // Addition Assignment Operator adds a value to a variable
 let x = 10;
 x += 5;
 console.log(x);
// Similalry -=, *=, /=, %=(Remainder Assignment) 
// Exponentiation Assignment Operator(**=) raises a variable to the power of the operand. 
 let y = 9;
 y **= 5;
 console.log(y);   // (9^5)
// doubt in bitwise hence in bitwise assignment operators. 














// COMPARISON OPERATORS 

/* Comparison Operators used to compare values and return a Boolean result. 
Mostly used in conditional statements*/
 // Loose Equality checks only vlaue with type conversion 
 console.log( 5 == '5'); // Outputs true and type conversion occurs 
 // Strict Equality checks both value and the type without type conversion 
 console.log( 10 === '10'); // Returns false 
 // Loose Inequality checks if two values are not equal after type coercion.
 console.log(5 != '5'); // Output: false
 // Strict Equality checks if two values are not equal without type coercion. 
 console.log(5 !== '5'); // Output: true

 /* Also we have Greater Than (>), Less Than (<), Greater Than or Equal To (>=), 
 Less Than or Equal To (<=)  */ 











 /*  LOGICAL OPERATOR 
Logical operators determines the logic between variables or values (logical operations)
Logical AND && - TRUE if both operands are THRUE.  
Logical OR || - TRUE if at least one operand is TRUE.
Logical NOT ~ or ! - NEGATES the boolean value of operand. 
*/
console.log(50>100 && 30>15 && 40>30);
// returns false as one of them is false 
// similary 
console.log (10>60 || 30>2);

// Note && will return first fasly value or the last truthy value 
let a;
a = 10 && 20;
console.log(a);
a = 10 && 20 && 30; 
console.log(a);
a = 10 && 0 && 30; 
console.log(a);
a = 10 && '' && 0 && 30; 
console.log(a);
// example of && use 
const posts = [];
console.log(posts[0]);  // we would not like to display undefined 
// so we do this 
const post = [];
post.length > 0 && console.log(post[0]);

// Also note that || will return the first truthy value or the last value 
let b;
b = 10 || 20;
console.log(b);
b = 0 || 20;
console.log(b);
b = 0 || null || '' || undefined;
console.log(b);

  // In modern code we can use the Nullish coalescing operator (??) 
 // that works like ||, but it only returns the second expression, 
// when the first one is "nullish", i.e. null or undefined. 
let c;
c = 10 ?? 20;
console.log(c);
c = null ?? 20;
console.log(c);











// LOGICAL ASSIGNMENT 
 // ||=  assigns the right side value only if left is fasly value 
 let v = false;

 if (!v) {
   v = 10;
 }
console.log(v);
 
// short cut way 
 let v2 = false;
 v2 = v2 || 10;
 console.log(v2);

 // more shorter way using logical assignment 
 let a2 = null;
 a2 ||= 10
 console.log(a2);

// Similarly we have ??= assigns right side value only if the left is null or undefined
let f = undefined;
f ??= 30;
console.log(f);
 
 
 
 
 
 
 
/* Conditional (Ternary) Operator ssigns a value to a variable based on some condition.
 variablename = (condition) ? value1ifConTrue:value2ifConFalse
 Conditional operator is a concise way to write a simple if-else statement in JavaScript. 
 It is often used for short, one-line conditional expressions. */
 
 
 
 
 // using ternary operator 
 let age = 15;
 let message = (age < 18) ? "Too young":"Old enough";
 console.log(message);

 // or more shorter 
 let age2 = 19;
 (age2 < 18) ? console.log('You cannot have sex') : console.log('You can have sex')

 // for example we something like this 
 const auth = true;
 let redirect;
 
 if (auth) {
  console.log('Welcome to Dashboard');
  redirect ='/dashboard';
 } else {
  console.log('Access Denied');
  redirect = '/login';
}
console.log(redirect);

// Shorting this using ternary operator 
const auth2 = false;
let redirect2 = auth2 ? (console.log('Welcome to Dashboard'), '/dashboard') :
                         ( console.log('Access Denied'), '/login')
 console.log(redirect2);


 
 
 
 
 
 
 
 
 
 
 
 
 /* Airthmetic Operators like +, -,*, / performs airthmetic operations on two numbers and 
 two numbers can be literals or variables or expressions  */
 // % Modulus operator returns the remainder of divison 
 // The increment operator (++) increments numbers.
 let incri = 5;
 incri++;
 console.log(incri);
// Similarly the decrement operator (--) decrements numbers.

// The exponentiation operator (**) raises the first operand to the power of the second operand.
let poo = 8;
let poo2 = poo ** 2;
console.log(poo2); // 8^2 = 64








 



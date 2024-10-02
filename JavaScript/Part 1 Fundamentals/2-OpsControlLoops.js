/* Control flow refers to the order in which statements are exceuted. 
These statements allows us to make decisions, repeat actions, and control
the flow of excecution of in our code. These are fundamentals to any 
programming language. 

Now again we can say there are two types of control flow satements or 
we can achieve control flow in two ways

1. Conditional Statements (if, else if, switch)- As the name suggests these
statements performs actions based on certain conditions.

2. Looping Statements(for, while, do while, for...in, for...of)- These 
provides a way for iteration that is repeating something until a condtion is 
met. */



// general syntax of if statement without else
if (true) {
    console.log('This is true or Anything would Print');
}

if (false) {
    console.log('This would not run');
}

// Lets take two variable to understand better 
let x = 10;
let y = 5;

if (x > y) {
    console.log(`${x} is greater than ${y}`); // Note the Template literal method 
}

// Using else with if 
if (x === y) {
    console.log(`${x} is equal to ${y}`);
} else {
    console.log( x + ' ' + 'is not equal to' + ' ' + y ); // Concatnation Method 
 }

// Now there is else if which can handle more than one conditions. 
// lets play around date object to understand it in a intersting way. 

const d = new Date(7, 6, 2023, 8, 0, 0);  // date object creates a new date 
const hour = d.getHours();  // This will return set hour that is 8 if consoled 
console.log(hour);
if (hour < 12 ) {
    console.log('Good Morning');
} else if (hour < 18) {                  // we can have many else if but one else last
   console.log('Good Afternoon');
} else {
    console.log('Good Night');
}

// Now we have Nesting ifs. Lets take same date object.

const d2 = new Date(12, 6, 2023, 6, 0, 0);   
const hours = d2.getHours();    
console.log(hours);

if (hours < 12 ) {
    console.log('Good Morning');
     if (hours === 6){
        console.log('WAKE UP TO REALITY');
    }
} else if (hours < 18) {  
   console.log('Good Afternoon');
} else {
    console.log('Good Night');
    if (hours >= 20) {
        console.log('SWEET DREAMS zzZZzz');
    }
}

/* Q. CAN WE HAVE MULTIPLE CONDITIONS IN IF ELSE STATEMENTS ?  
We can have multiple conditions in a if else statement using operators
like && or || for example */
if (hours >=6 && hours < 15) {
    console.log('Work Hard, Cum Hard');
}




/* And the last of conditionals we have Switch which is considered a best
alternative to nested ifs as it provides a better readilibity. 
Lets take another date object for switch example.*/

const d3 = new Date(2024, 6, 1, 11, 0, 0);
const month = d3.getMonth(); // This would return set month that is 1 (jan). 

const hour2 = d3.getHours();
console.log(hour2);
// Swicth will take an expression or variable as its argument 
switch(month) {
    case 1:
        console.log('This is January');
        break;
    case 2:
        console,log('This is February');
        break;
    default:
        console.log('There is no such month');
}
/* The value of expression or variable is compared with the values of 
each case. We need break to break down from exceution if matched but 
we don't need break for last or deafult case. If break is omitted, the program
continues execution inside the switch statement and will execute statements 
under the next case, and so on 
Q. WHY DO WE NEED BREAK KEYWORD IN SWITCH STATEMENT ? */

// Also we could use switch like this
switch (true) {
    case hour2 < 12:
        console.log("BELIEVE IN YOURSELF,YOU WILL MAKE IT");
        break;
    case hour2 < 18:
        console.log("");
        break;
    default:
        console.log("");
}



/* FALSY AND TRUTHY VALUES 
Q. EXPLAIN WHAT IS FASLY AND TRUTHY VALUES IN JS ? 

Falsy Values - Values evaluated to be false in a boolean context or the values that
are not false intially but will become after boolean conversion. 
Q. HOW MANY FASLY VALUES ARE THERE IN JS ? 

The 5 falsy values in JavaScript are:-
false - The boolean value false.
0 - The number zero including, 
-0 - Negative zero
0n - BigInt zero

"" or '' - Empty string.
null - The null value.
undefined - The undefined value.
NaN - Not a Number. 
 
All other values are considered truthy:-
true - The boolean value true 
'0' - 0 with in string 
' ' - space within string 
"fasle" - fasle in a string 
[] - empty array 
{} - empty object 
function () {} - empty function 
*/
// check it here 
let z = undefined;
if (z) {
    console.log('This is truthy');
} else {
    console.log('This is Falsy');
}
console.log(Boolean(z));

// Q. WHAT KIND OF PROBLEMS WE MAY FACE FOR FASLY VALUES AND HOW TO DEAL WITH IT ? 
// Problems or confusion that arise for these values like with 0, []

   // lets say we have web form asking how many children we have 
const Children = 0;  // We have no children but still asking to enter 
if (Children) {
    console.log(`You have ${Children} Children`);
} else {
    console.log("Please enter your number of children");
}   // 0 is a fasly value so 2nd consoles 
   // so we can do this 
const Childrens = 0; 
if (Childrens != undefined) {     // this can be resolved using logical operators 
    console.log(`You have ${Childrens} Children`);
} else {
    console.log("Please enter your number of children");
}    
/* The variable Childrens is explicitly assigned a value of 0, which is a 
   defined value so the the condition becomes true  */

// Checking for empty arrays 
// or Checking how many posts 

const posts = [];
if (posts){
    console.log('list posts');
}  else {
    console.log('No posts to List')
}
// here we want to return No posts, but it evaluates to truthy even there are no posts  
 // so we can do this 
 const post = [];
if (post.length > 0){
    console.log('list posts');
}  else {
    console.log('No posts to List')
}

// Checking for empty objects

const user = {
};
if (user){
    console.log('User Found');
} else {
    console.log('User Not Found');
}
// so we can do 
const users = {
};
if (Object.keys(users).length > 0){
    console.log('User Found');
} else {
    console.log('User Not Found');
}
// Note we can not use length directly on objects but rather on array of keys of object 

// Using loose equality (always use strict equality ===)
console.log(false == 0);
console.log('' == 0);
console.log(null == undefined);
/*
Q. EXPALIN THE DIFFERENCE BETWEEN STRICT AND LOOSE EQUALITY OPERATOR ?
   Loose equality performs type conversion and returns value true while
   Strict equality returns false if unmatched in type. 

*/



// Boolean Logic and Logical Operators 
/* Boolean logic uses true or false values to solve problems using several 
   logical operators like AND, OR , NOT (I hope we remember truth tables,
   with AND all has to be true to be true and OR only one has to be true to be 
   true and NOT is inversion of someting !). 
   Here we represent those using &&, || and ! 
   Note: && in JS evaluates expressions from left to right and returns the first 
         falsy value it encounters. If all values are truthy, 
         it returns the last value.
        
        || returns first truthy value it encounters or the last value 
   
   */
   
   let ahh;
   ahh = 10 && 20;   
   ahh = 10 && 0 && 20;  
   console.log(ahh);
   // Practical uses of these behaviour in React 
   const Reactpost = [];
   Reactpost.length > 0 && console.log(Reactpost[0]); // we don't wanna show undefiend 


// Logical Assignment Operators 
/*
||= assigns right side value only if left side value is a fasly value 
*/
let hope = false; 
if (!hope) {
    hope = 100;
}
console.log(hope);
// short cut way of doing it is using logical assigment operator 
// let hope2 = false || 100;  even more straight forward and simple
let hope2 = 0;  // if set to a falsy 
hope2 ||= 100;  // this would set other not for truthy 
console.log(hope2); 
/*
Similarly we have 
&&= assigns right side value only if left is a truthy value 
??=
*/

/*
Q. WHAT IS THE DIFFERENCE BETWEEN STATEMENTS AND EXPRESSIONS ? 
  Expressions produces a value even a single number value or any boolean value 
  on the other hand statements are bigger piece of code which is exceuted and 
  necessarily doesn't produce a value by itself. Expressions along with declarations
  make ups statement 
*/



// Now looping statements and first we will see 'for loop' 
/* lets look at syntax of for loop 
for (IntaialExp; Condition; IncreExp) {
    code block to run as long as condition is met; 
}       
*/
for (let i=0; i<=10; i = i + 1) {   // Incrementing by 1 
    console.log('Number- ' + i);
  }
// Better alternative of i = i + 1 which is i++ 
  for (let i=0; i<=10; i++) {   
      console.log('Number- ' + i);
    }
// We can also increment by 2
  for (let i=0; i<=10; i = i + 2) {   
      console.log('Number- ' + i);
}
/* Q. WHAT HAPPENS WHEN WE USE CONST IN FOR LOOP ? WILL IT GIVE AN ERROR AND WHY ?  
Using const in for loop will give error as we want the initilaized 
variable that is i to be changed in every iteration which is not possible 
with const. */

// Including if-else statement with in for loop (Conditionals + Loops)
 
 for (let i = 0; i <= 10; i++) {
    if (i === 7) {
        console.log('7 is my favourite number'); // for 7 this will print 
    } else {
        console.log('Number - ' + i); // for other numbers this will print 
    }
}

// Nesting Loops 
for (let i=0; i<=10; i++) {   
    console.log('Number- ' + i);
  for (let j = 1; j<=10; j++) {
  console.log(`${i} * ${j} = ${i*j}`);
   }
}
// Q. CREATE SIMPLE MULTIPLICATION TABLE OF A GIVEN NUMBER SAY 10 OR UPTO 10 

// Loop through Array 
// OR Note: We have better alternative like for..each method 

const fruits = ['🍇', '🍉', '🍌', '🍋', '🍑'];
 for (let i=0; i< fruits.length; i++) {
    if (i === 4) {
        console.log('I love ' + fruits[i]);
    } else {
        console.log(fruits[i]);
   }
}

// Q. EXPLAIN THE USE OF BREAK IN A FOR LOOP. **
// Breaks allows us to break from a loop
for (let i=0; i<=20; i++) {   
    if (i === 15) {
       console.log('Breaking Bad..');
       break;
     }
     console.log('Number- ' + i);
 }

/* Q. EXPLAIN THE USE OF CONTINUE IN LOOP AND HOW IT DIFFERS FROM BREAK ? 
Then we have Continue. While other one breaks out of entire loop here 
it breaks from iteration and goes on.. */
for (let i=0; i<=20; i++) {  
    if ( i === 13 ) {
      console.log('Skipping 13th..');
      continue;
    }
      console.log('Number- ' + i);
 }


/* Now the last two of loops that are while and do while. Along with the 
normal loop these are old methods as now we have high order array methods like
for...each, for...in and for...of which works best for looping
*/

let i = 0;
while (i<10) {
    console.log('Number- ' + i);
    i++;
}
/* Q. EXPLAIN THE DIFFERENCE BETWEEN FOR LOOP AND WHILE LOOP ? WHICH IS TO BE USED ?  
Very similar and alternative to for loop. Note for loop is best if we 
know the number of times loop to run is known.
Also note not forget incremental as without it the condition will not be false and it 
would run infinitly.
*/

// Using while loop to loop over array
j = 0;
const arr = [10, 20, 30, 40];
while (j < arr.length) {
    console.log(arr[j])
    j++;
}

// Nesting while loop 
let i2 =0;
while (i2<=5) {
    console.log('Number: ' + i2);

    let j = 1;
    while (j<=5){
        console.log(`${i2} * ${j} = ${i2 * j}`);
        j++;
    }
    i2++;
}

/* Q. HOW DO WHILE DIFFERS FROM WHILE LOOP ? 
do while ensures that code block runs atleast once even if the condition is not
matched code block executes first here (it runs regardless of while) */
 let l = 20;
 do {
    console.log('Our Number is ' + l);
    l++;
 } while(l<=20); // condition not matched still runs 21 
 // Note that we can use break and continue here too like we did in for loops 


// Rest Operator 
/*
The rest operator in JavaScript allows us to collect all remaining elements 
into an array. It is mostly used in function parameters to handle an indefinite 
number of arguments, making functions more flexible. The rest operator is 
represented by three dots (...) followed by a name, like ...args.
*/
 // Using the Rest Operator in Function Parameters
 function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  
  console.log(sum(1, 2, 3)); // Output: 6
  console.log(sum(4, 5, 6, 7)); // Output: 22
  

// extract the remaining elements of an array or properties of an object
// (Destructuring Assignment) 
const [first, second, ...rest] = [1, 2, 3, 4, 5];

console.log(first);  // Output: 1
console.log(second); // Output: 2
console.log(rest);   // Output: [3, 4, 5], rest of elements 


const person = { name2: 'Alice', age: 25, job: 'Engineer' };
const { name2, ...rest2 } = person;

console.log(name2); // Output: 'Alice'
console.log(rest2); // Output: { age: 25, job: 'Engineer' }


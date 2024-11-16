
/* Arrays are special type of variable which can hold more than one value, it is also
 a special type of object and also a js data structure.
typeof operator in JavaScript returns "object" for arrays
*/
  

/* ---------------------------------------------ARRAY LITERAL & CONSTRUCTOR METHOD */

// Creation of Array using literal method 
const arr_name = ["item1", 
                "item2", 
                "and so on"];   // spaces and line breaks are not important 
console.log(arr_name);
console.log(typeof arr_name);
// Alawys declare array with const

// We can also first create an array, and then provide the elements using indexes 
const heros =[];
heros [0] = "Thor";   // Array index always start with 0 
heros [1] = "Iron Man";
heros [2] = 'Captain America';
console.log(heros);     

// Accessing array elements with index numbers and yes elements can be of 
   // any data type 
const cars = ['BMW', 'jagaur', 'Audi'];
cars [2] = 'Beattle';  // Arrays are mutable, they can be changed 
const car = cars[2];
console.log(cars);
let x = `My favourite car is ${cars[2]}`;
console.log(x);

// The length property returns the length (size) of an array
const users = ['user1', 'user2', 'user3'];
let size = users.length;
console.log(size);


// Appart from array literal method we can create arrays using array constructor
let p;
const snacks = new Array('Biscuit', 'KurKure', 'Cake');
p = `My favourite Snacks is ${snacks[0]}`;
console.log(p);

  



/* ---------------------------------------------------------- ARRAY METHODS */
// toString() converts an array to a string of (comma separated) array values
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
let str = fruits.toString();
console.log(str);

// join() method joins all array elements into a string, specifying a separator
const fruit = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruit);
let join = fruit.join(', ');
console.log(join);

// pop() method removes the last element from an array
const trees = ['Mango', 'Cocunut', 'Orange'];
console.log(trees);
let pop = trees.pop();
console.log(pop); // returns the element that was poped out
console.log(trees); // In this orange will not show

// The push() method adds a new element to an array (at the end):
const tree = ['Mango', 'Cocunut', 'Orange'];
let push_baby = tree.push('Apple');
console.log(tree);

// shift() equivalent to pop() but removes the first array element instead of last 
// Similarly unshift() adds new element at the beginning

/*Array elements can be deleted using the JavaScript operator delete.
Using delete() leaves undefined holes in the array.
Use pop() or shift() instead. */


/* at() is same as [] as it returns an indexed element from an array */
const gods = ['Jesus', 'Odin','Rama'];
let real_god = gods.at(3);
console.log(real_god);


// concat() method creates a new array by merging (concatenating) existing arrays
 
const myGirls = ["Sneha", "Shradha"];
const myBoys = ["Vikram", "Rahul", "Rohit"];
const adopted = ['Salman'];

let myChildrens = myBoys.concat(myGirls, adopted);
console.log(myChildrens);

// The concat() method can also take strings as arguments 
const arr1 = ["Hector", "David", "Lucas"];
const myChildren = arr1.concat("Peter"); 
console.log(myChildren);

// Flattening an Array
/* Flattening an array is the process of reducing the dimensionality of an array. */
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat()
console.log(newArr);  // 2D TO 1D 
/* The flat() method creates a new array with sub-array elements concatenated to a 
specified depth. */

// splice() method adds new items to an array
const colors = ['Red', 'Green', 'Blue'];
colors.splice(1,0, 'Pink', 'Yellow');
console.log(colors);
/* first parameter defines the position where new elements should be added and second
parameter defines how many elements should be removed and the rest defines new elements 

With this parameter setting, splice() can also remove elements without 
leaving "holes" in the array */
const color = ['red', 'blue', 'orange'];
color.splice(0,1);
console.log(color);

// slice() method slices out a piece of an array into a new array
const people = ['Ramesh', 'Rakesh', 'Rahul'];
const sliced_people = people.slice(1,2);
console.log(sliced_people);
/* slice() method creates a new array and does not remove any elements
from the source array. 
selects elements from the start argument, and up to (but not including) the end argument */

// Nesting arrays, we can have an array within an array 
const woman = ['Sudhesena', 'Pansy'];
const sages = ['Dhrims', 'Kya'];
sages.push(woman);
console.log(sages);
console.log(sages[2][0]); // accesing a element through that nested array 


// Sorting Arrays 
const toy =['ironman', 'thor', 'batman'];
toy.sort();
console.log(toy);
/* This sorts the elements in array alphabetically */

// reverse() method reverses the elements in array i.e. to sort an array in descending order
const toys =['ironman', 'thor', 'batman'];
toys.sort();
toys.reverse();
console.log(toys);

/* Numeric Sort - sort() function sorts values as strings which works well for strings 
But numeric sort can be achived by a compare function */
const percentages = [61,46,56,44,98];
percentages.sort(function(a,b){return a - b });
console.log(percentages);
// same trick to sort an array descending
percentages.sort(function(a,b){return b - a });
console.log(percentages);
/* Purpose of compare function is to define an alternative sort order
function (a,b)
{
    return a - b;
}
The compare function should return a negative, zero, or positive value, 
depending on the arguments. the sort() function compares two values, 
it sends the values to the compare function, and sorts the values according 
to the returned (negative, zero, positive) value 
If the result is negative, a is sorted before b.
If the result is positive, b is sorted before a.
If the result is 0, no changes are done with the sort order of the two values */

// EXPLAIN REDUCE METHOD AND ITS USAGE. 
// Reduce Method 
/*
The reduce method in JavaScript is a powerful array method used to process an 
array and reduce it to a single value.
This method executes a callback function on each element of the array 
(from left to right) and accumulates the result in a single return value.

Reduce is useful for various array operations such as summing, finding averages, 
and accumulating data into objects or other structures.

The reduce method takes two main arguments:

(1) Callback Function: This function is executed on each element of the array, 
and it receives four arguments:
i. Accumulator - The accumulated value previously returned in the last invocation 
                 of the callback, or the initial value, if supplied
ii. Current Value - The current element being processed in the array

iii. Current Index (Optional) - The index of the current element being processed
iv. Array (Optional) - The array reduce was called upon

(2) Initial Value (Optional): A value to use as the first argument to the 
first call of the callback. If no initial value is supplied, the first element 
in the array will be used as the initial accumulator value, and reduce will 
start from the second element.

*/


// use reduce method to sum up all the numbers in an array
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum); 

/*
This works as follows
The initialValue is 0 in this example. This is the starting point for the 
accumulator.

First Iteration: accumulator is 0 (initial value), currentValue is 1. 
The result is 0 + 1 = 1.

Second Iteration: accumulator is 1 (from the previous result), currentValue is 2.
The result is 1 + 2 = 3.
so on.. 

Note: If an initialValue is not provided, reduce uses the first element of 
the array as the initial accumulator value and starts the iteration with the 
second element.

*/



// map() Method 
/*
map() iterates over every element of an array, applies a function to each 
element, and then returns a new array with the transformed values.

array.map(callback(currentValue, index, array), thisArg)

callback function is executed on each element of the array.

currentValue is the current element being processed.

index (optional) of the current element.

array (optional) on which map() was called.

thisArg (optional) is a value to use as 'this' when executing the callback 
function.
*/

// A basic map() example 1 
const number = [1, 2, 3, 4, 5];
// Use map() to create a new array with each number doubled
const doubled = number.map(number => number * 2);
console.log(doubled); 
console.log(number); 

// Basic map() example 2
// We have an array of user objects, and we want to extract only the names
const user = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
];
// extracting names into a new array
const names = user.map(user => user.name);
console.log(names); 


// Basic map() example 3
/* index parameter in map() if needed. For instance, adding the index to each 
value */

const numbers2 = [10, 20, 30, 40];
// map() to add the index to each value
const result = numbers2.map((num, index) => num + index);
console.log(result); // Output: [10, 21, 32, 43]

// Basic map() example 4
/* passing a second argument (thisArg) to the map() method to set the 
value of this inside the callback function. */ 
const multiplier = {
  factor: 3
};

const numbers3 = [1, 2, 3];
// map() with thisArg to multiply each number by the factor
const multiplied = numbers3.map(function(num) {
  return num * this.factor;
}, multiplier); // passing `multiplier` as thisArg
console.log(multiplied); 




// Array Destructuring Q. EXPLAIN WHAT IS ARRAY DESTRUCTURING ? 

// Unpacking values from the array and assign them to variables
// similar to Object Destructing 

// In arrays we can even skip some values using two or more commas

const veges = ["Potatos", "Brinjal", "Pumpkin", "Tomatos"];

// Destructuring
let [vege1,,,vege2] = veges;

console.log(vege1); 
console.log(vege2);


// Q. HOW CAN YOU SWAP VALUES OF TWO VARIABLES WITHOUT NEEDING A THIRD VARIBALE ?
let a = 1;
let b = 2;

[a, b] = [b, a]; 
/* 
Right Side Evaluation [b, a]
Creates a temporary array with the current values of b and a, i.e., [2, 1].

Destructuring Assignment [a, b] = [2, 1]
The values from the array [2, 1] are destructured and assigned to a and b 
respectively. a receives the value 2, and b receives the value 1
*/

console.log(a);
console.log(b);

/*
Using destructuring we can have a function return multile values as an array
and then we can destructure the array to variables.  
*/
const FoodOrder = {
  categories: ["Dosa", "Idili", "Dahi Vada", "Upma"],
  drinks: ["Coke", "Fanata", "Lemica"],
  order: function (categoriesIndex, drinksIndex) {
    return [this.categories[categoriesIndex], this.drinks[drinksIndex]];
  }
}
console.log(FoodOrder.order(0,1));

// Recieved two return values from the function
const [breakfast, drinking] = FoodOrder.order(0,1);
console.log(breakfast);
console.log(drinking);

// Nested array destructuring
const nested = [1,2,[3,4]];
//const [i, , j] = nested;
//console.log(i,j);


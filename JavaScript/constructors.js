/* Constructors in JavaScript are special functions that are used to create and initialize 
objects. These functions serve as blueprints for creating instances of objects with a 
specific structure and behavior. When we invoke a constructor function with the new keyword, 
it creates a new object and sets up its initial properties and methods.
It typically begins with an uppercase letter (a common naming convention) to distinguish 
it from regular functions. */

// Constructor Definition 
function Person(firstName, lastName) {
 this.firstName = firstName;
 this.lastName = lastName;
 this.getFullName = function() {
    return this.firstName + " " + this.lastName;
 }
}
// Creating instances of objects 
const person1 = new Person("John", "Wick");
const person2 = new Person("David", "Hector");
// Here person 1 & 2 are instances of Person object. 
// "this" sets the initial properties and methods for the newly object.
console.log(person1.getFullName());



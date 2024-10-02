/* "prototype" of an object is an important concept related to how objects inherit properties 
and methods from one another. Every object in JavaScript has an associated prototype (that 
    is other object), and the prototype is used to provide inheritance. */


    /* When we create an object using object literals all such objects share a 
common prototype called Object.prototype. */
const obj = {}; // Empty object created using object literal
obj.someProperty = 'Hello'; // Added some property, this is specific to obj & had not been inherited

// 'obj' inherits methods and properties from 'Object.prototype'
console.log(obj.toString()); // Inherited from 'Object.prototype'
  // toString() converts an object into a string representation.\
          /* calling obj.toString(), where the concept of object prototypes comes into play
              note that 'obj' object doesn't have its own toString method and 
              in this case JS looks up the prototype chain. 
              Also don't think much 'obj' object's prototype is set to Object.prototype by default
              which have toString() and here obj inherits toString from its prototype. */
/* Note that -  The Object.prototype is on the top of the prototype inheritance chain */


/* When we create objects using the new keyword and a constructor function, they use the
 constructor's prototype property as their prototype which allows you to define custom methods and 
 properties for objects created from that constructor function */

 function Person(name) {
    this.Personname = name;
  }
  
  Person.prototype.sayHello = function() {
    console.log(`Hello, my name is ${this.Personname}`);
  };
  
  const person1 = new Person('John'); // Created using a constructor function
  const person2 = new Person('Alice'); // Created using a constructor function
  person1.sayHello();
  person2.sayHello(); 
  /* person1 and person2 are created using the Person constructor function. 
  They inherit the sayHello method from Person.prototype. 
  Similarly:
  Date objects inherit from Date.prototype
  Array objects inherit from Array.prototype */

  /* Prototype Chain -   Object.prototype is a special object that doesn't inherit any properties 
  from any other object; it's at the top of the hierarchy. This is unique because most other
   prototype objects inherit from Object.prototype. For example, the Date.prototype object inherits
    properties from Object.prototype.
    When we create objects using built-in or user-defined constructors, 
    they have a prototype, and this prototype object, in turn, inherits properties from 
    Object.prototype. This creates a linked series of prototype objects, known as a 
    "prototype chain." 
    For example, if you create a Date object using new Date(), 
    it inherits properties from both Date.prototype and Object.prototype.*/

/* We can create new objects with a specific prototype using Object.create().
This is an alternative to constructor functions.  */
// first argument you provide becomes the prototype of the new object.
// optional second argument to describe the properties of the new object.
var o1 = Object.create({ x: 1, y: 2 });
// o1 inherits properties 'x' and 'y' from the specified prototype object.
//  specified prototype is the object literal { x: 1, y: 2 }
console.log(o1);

/* If we pass null as the prototype, the newly created object won't inherit anything, 
including basic methods like toString().*/
var o2 = Object.create(null);
// o2 inherits no properties or methods.
console.log(o2);

/* If we want to create an ordinary empty object, similar to {} or new Object(),
 we can pass Object.prototype as the prototype. */
 var o3 = Object.create(Object.prototype);
// o3 is like an empty object.
console.log(o3);



// Using inherit() function:
var o = { x: "don't change this value" };
library_function(inherit(o)); // Guard against accidental modifications of 'o'
/*if the library_function tries to modify properties, 
it will only affect the newly created object, not the original o. */


/* ECMAScript 2015 (ES6) introduced class in js. */
class Person {
  // Constructor to initailize fields 
  constructor(name, Age, Hobby) {
      this.name=name;
      this.Age=Age;
      this.Hobby=Hobby;
  }
  // Method to dispaly information 
dispalyInfo() {
console.log(`Hello ${this.name}, you are ${this.Age} years old, and you like ${this.Hobby}`);
/* This is template literals or strings method using $ aand `(backtick not quote) */
}
}  // End of Class 

// Creating Person Ojects 
const Person1 = new Person("Sudhanshu", 23, "Coding")

// Accessing and displaying objects data 
Person1.dispalyInfo();



/* 
1.  JavaScript does not have built-in access modifiers like Java. 
All properties (fields) and methods of an object in JavaScript are public by default,
which means they can be accessed and modified from outside the object
2. We can make properties or fields in js private in a other way (Study Later)
*/



/* this is the very important keyword in oops.
this keyword refers to the current execution context i.e objects,
 which can vary depending on how a function is called 
 */

/* 1. this in Global Context - When this is used alone outside any function it refers to 
global object i.e. window for browser and global for in node.js */
console.log(this); //refers to empty object rather global becoz of something "CommonJS" module
console.log(global); // Logs the global object in a Node.js environment
/* Keep in mind that global is a Node.js-specific object, 
and using it makes your code less portable if we intend to run it in both Node.js and
 a web browser. To achieve cross-environment compatibility, it's generally a good practice 
 to avoid relying on the global object and explicitly reference the global scope when needed.
 */


 /* 2. In a function, this refers to the global object in non-strict mode, 
 but it's undefined in strict mode. */
 function showThis() {
    console.log(this);
  }
  
  showThis(); // In non-strict mode, it's the global object; in strict mode, it's undefined

  
/* 3. Object Method - When a method is called on an object, this refers to the object 
that the method is called on. */
const person = {
    name: "John",
    sayName: function() {    // old style of defining function in js 
      console.log(this.name);
    }
  };
 person.sayName(); // "John"
 /* Here sayName method which logs the value of the name property 
 we use the this keyword with method to refer to the object on which the method is called,
which is the person object. In this context, this points to the current object (person).*/


/* 5. this in Contructor Function - Inside a constructor function, 
this refers to the newly created instance of the object. 
It allows us to set instance-specific properties. */
function Person(name) {
    this.name = name;
  }
  
  const john = new Person("John");
  console.log(john.name); // "John"
  
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
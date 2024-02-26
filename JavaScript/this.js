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
  
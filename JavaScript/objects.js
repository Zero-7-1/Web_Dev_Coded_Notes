// I. CONCEPT OF OBJECTS
/* 
- Objects in js are non-primitive data types which represents a collection of key value 
pairs i.e. Properties of the object, where keys are Strings or Symbol and value is any data type (including other objects).
- Objects can also be defined as variables but not with single value rather multiple values.
- Examples of objects are:
1. Date, Maths & RegExp       // ( All are Instances of built in classes)
2. Arrays 
3. Functions
4. Boolean, number & string (when used with new keyword) - Primitive types can be coverted 
    to objects (rarely done) when used with new keyword. This is known as autoboxing. 
    e. g. var num = new Number(42); // Creates a Number object
- Primitive values (strings, numbers, booleans) in JavaScript behave like immutable objects
 in the sense that operations on them return new values without modifying the original. 
 While they are not technically objects in the JavaScript type system, they exhibit behaviors 
 that resemble object-like behavior. 
- JavaScript object also inherits the properties of another object, known as its “prototype.”

- Categories of JavaScript Objects:
1. Native Object: Defined by the ECMAScript specification, such as arrays, functions, 
dates, and regular expressions.
2. Host Object: An object defined by the host environment (e.g., a web browser) 
in which the JavaScript interpreter is embedded. HTMLElement objects in web browsers are 
examples of host objects.
3. User-Defined Object: Any object created by the execution of JavaScript code.
*/




// ------------------------------------------------------------ Object Creation 

/* 1. Creating object simply by using literal method i.e. using curly brace and defining 
key-value pairs to initialize object's properties. 
*/ 

const Hotel = {    
hotelName:"StarLight", //Hotel object is a single insatance of a generic or specific hotel 
rooms:200,                  // from the real world. 
booked:120,   // key-vlaue pairs i.e. properties. 
roomTypes:["Single", "Double", "Triple"],  // Array (look array.js) of room types.  
checkAvailability: function() {      
    return this.rooms - this.booked
      /* this keyword is used to indicate that it is using the rooms and booked properties 
                  of this object*/ 
  }
};
console.log(Hotel.checkAvailability());  

// More complex values like point2 
const point = {
  x:1, 
  y:1
};
const point2 = {
x:point.x,
y: point.y + 1
};
/* The x property is assigned the same value as the x property of another object called point,
 and the y property is assigned a value that is one greater than the y property of the point 
 object. */

/* In ECMAScript 5, reserved words may be used as property names without quoting but
In general, property names that are reserved words must be quoted in ECMAScript 3*/

console.log(point2);                    
/*  Accessing properties or functions using dot notation 
the dot is known as memeber  operator which has object to its left and properties or 
functions to its right */


// 2. Creating object by Constructor Notation
/* The 'new' keyword and the object constructor creates a blank object, then we can add properties and 
methods to the object using dot noation. */ 
const hotel2 = new Object(); // this constructor function is part of js lang used to create objects. 
hotel2.name = "MoonKnight";
hotel2.rooms = 40;
hotel2.booked = 20;
hotel2.name ="BlackKnight";  // This changed the hotel name. 
hotel2.checkAvailability2 = function() {
  return this.rooms - this.booked;
};
console.log(hotel2.checkAvailability2());
console.log(hotel2.name);

          // VS (note the difference in function creation)

const myNewObject = new Object();
myNewObject.info = 'I am a shiny new object';
function myFunc() {
  console.log(this.info);
  };
  myNewObject.showInfo = myFunc;  // do not use here () as we are just assigning not calling  
  myNewObject.showInfo();

  /* In the first case, the method is defined directly when assigning it to the object property.
  In the second case, the method is defined separately as a named function (myFunc) and then assigned
   to the object's property.
*/

// Anonymous Functions (refer fun.js)
const myNewObject2 = new Object();
myNewObject2.info2 = 'I am a shiny new object';
myNewObject2.showInfo2 = function() {
  console.log(this.info2);
  }
myNewObject2.showInfo2();
// haven’t needed to give a name to our function prior to assigning it, this
//       technique is referred to as using an anonymous function.



// 2. Creating Many Objects Constructor notation. 
/*This works best when we want several objects to reperesent similar things. Here object constructor 
uses a function as a template for creating objects. */ 
function Person(fName, Lname, Age) {                 // constructor fun begins with a capital letter. 
this.firstName=fName;
this.Lastname=Lname;
this.Age=Age;
//this.Email=Email; this will not work.
this.funName = function() {     // this is too anonymous function. 
  return this.firstName + " " + this.Lastname;
}
}
/* 'this' Keyword indicates that properties and methods belongs to the object 
that this function creates.(refer this.js file) */

const Person1 = new Person("John", "Wick", 45);
Person1.firstName = "Johnathan";  // Changing the property. 
Person1.Nationality = "Canada";   // Adding new property for Person1 only, js flexibility 
Person1.funName2= function() {    // this is too anonymous function 
  console.log("This is Wick, " + this.funName());
};

console.log(Person1);  
console.log(Person1.funName());  
Person1.funName2();

/* Person1 object is created using constructor function, 
similarly we can create many objects like Person2,3,.. 
Here we can say Person1 is a instance of Person constructor. and another thing about adding new 
properties: JS language's features allow for dynamic property addition. The Nationality property 
wasn't part of the constructor's parameter list, but that's not a problem in JavaScript.*/

/* A note about deletation of Properties: We can delete any property using delete keyword but
it is not recommended instead we should make that undefined or null or even using a special 
character. For example Person1.Age=undefined; is better than delete Person1.Age;*/

// Without Parameter 
function Person2() {
this.firstName = "Default";
this.lastName = "Person";
this.age = 25;
this.sayHello = function() {
    console.log(`Hello, I'm ${this.firstName} ${this.lastName}`);
  };
}
const person3 = new Person2();
console.log(person3);
person3.sayHello();

 





// JavaScript includes built-in constructors for native types.
const myArray= new Array(1,2,3);
console.log(myArray);    //OP-Line-4 
const Today= new Date();
console.log(Today);     // OP-Line-5 
/* The RegExp constructor is used to create 
regular expressions for pattern matching */
const pattern = new RegExp("JS", "i");
let text = "JavaSricpt is awesome";
console.log(pattern.test(text));      // OP-Line-6
let myString = new String("Hello JS");
console.log(myString.charAt(0));     // OP-Line-7
/* JS primitives can behave like objects too when used with new */ 



/* 3. Class Syntax new to ES6  */
class testClass {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
 }
 let myName = new testClass("Sudhanshu", "Sekhar Barik");
 console.log(myName);
 console.log(myName.firstName);  //  Accessing particular property 
// (More detailed study about class in class.js)

// there are some more ways but for now lets work on these. 







 
 
 
 
 
 // III. OBJECTS PROPERTIES -------------------------------------------------------------------------- 
 
 /* Object's - Together the key-value pair is also known as property of a object. */
// Accessing Propertires 
 const College = {
  name: "IMIT",
  type: "State Govt."
};   
College.city = "Cuttack"; // Adding new Property 
console.log(College.type);  // Dot Notation 
console.log(College.city); // Vewing newly added property 

const College2 = {
  name: "NIT",
  type: "Central Govt."
};   
College2["City"] = "Rourkela";    // Adding new property 
const PropertyName = "type"
console.log(College2["name"]);       // Bracket Notation 
console.log(College2[PropertyName]); // using another variable
console.log(College2["City"]);     // Viewing new property
/* Bracket notation allows to access object properties dynamically which 
can be helpful we don't know the property name in advance.
Sometimes, property names in objects can contain spaces or special characters 
that are not valid for dot notation. Bracket notation allows us to access these properties 
without any issues.*/

/* Deletion - delete keyword is used like delete College.city or delete College2["City"] */

// for...in statement loops through the properties of the object
// Bracket notation is used for this case too. 
const forLoop = {
  firstIteration: "John",
  SecondIteration: "Doe",
  ThirdIteration: 7
};
for (const Looping in forLoop) {
  console.log(Looping, forLoop[Looping]);
}
/*for...in is commonly used when we need to iterate over the properties of an object 
without knowing the property names in advance, such as when serializing objects to JSON, 
implementing generic object manipulations, or performing tasks like deep object traversal.*/









 
 
 
 
 
 
 
 /* Properties can usually be changed, added, and deleted, but some are read only. 
Property attributes are metadata associated with each property, 
 which control how the property behaves and how it can be manipulated. 
 
 There are three primary property attributes:

 1. Writable Attribute: This attribute specifies whether the value of the property can be
  modified or reassigned. If a property is writable, its value can be changed; 
  if not, it remains immutable.

  2. Enumerable Attribute: The enumerable attribute determines whether the property 
name is visible when iterating over the object's properties using a loop 
(e.g., a for...in loop). If a property is enumerable, it will be included in these iterations;
 if not, it will be skipped.

 3. Configurable Attribute: The configurable attribute specifies whether a property can be 
deleted, and whether its attributes can be altered. If a property is configurable, 
it can be removed from the object, and its attributes can be changed; otherwise, 
it remains fixed.
  */
const person = {};

Object.defineProperty(person, 'name', {
  value: 'John',
  writable: false,    // This property is read-only
  enumerable: true,    // It's visible during iteration
  configurable: false  // It can't be deleted or have its attributes changed
});

console.log(person.name);  // OP3
person.name = 'Doe';   // Attempting to change the value (will fail if writable is false)
delete person.name; // Attempting to delete the property (will fail if configurable is false)
/* New to ECMAScript (Scripting language specification that defines core features and behavior
 of scripting languages, and JS is the implementation of the ES standard) */











 /* Object Attributes- Also known as internal properties or internal slots that are 
associated with every object which defines and controls characteristics of an object 
These attributes are not directly accessible or modifiable through regular JavaScript code 
but are essential for understanding how objects behave and interact with each other. 
There are three primary object attributes:
1. Prototype - The prototype establishes the object's inheritance hierarchy
which refers to another object, known as the object's prototype. */
const parent = { x: 10 };
const child = Object.create(parent);
console.log(child.x); // 10 Inherited from the prototype (parent)  OP4

/*The Object.create() method allows  to create a new object with a specified 
prototype object. This is useful when you want to create objects with a shared 
set of properties and methods.
*/
/* 2. Class - The class attribute is a string that categorizes the type of an object. 
It is used internally by JavaScript engines to classify objects based on their nature. 
For example, built-in objects like arrays, functions, and regular expressions have 
specific class names that help identify their type.
*/
console.log(Object.prototype.toString.call([])); //  OP5
/* Object.prototype.toString is built-in JavaScript method 
      that returns a string representation of an object's type. */

/* 3. Extensible Flag - The extensible flag specifies whether new properties can be added to
 the object. If an object is extensible (the default behavior), we can add new properties 
 to it. If the extensible flag is set to false, we cannot add new properties,
  delete existing ones, or change their attributes.  */
const nonExtensibleObj = Object.preventExtensions({});
nonExtensibleObj.newProperty = 42; // Throws an error only in strict mode.

















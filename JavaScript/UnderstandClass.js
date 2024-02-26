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
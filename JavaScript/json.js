/* As web developers we work a lot with APIs to send and recieve data 
to and from a server. Before XML was used was used for this but now json has 
become the standard.
JavaScript Object Notation - JSON is a text format for storing and transporting data.
 */



const post = {
    id: '1',
    title: 'Post One',
    body: 'This is a body'
};
// JavaScript has a built in function for converting an object into a JSON string
const str = JSON.stringify(post);

console.log(str); // This op is what we send to server 

// JavaScript has a built in function for converting JSON strings into JavaScript objects
const obj = JSON.parse(str);
console.log(obj);


/* Storing Data:
When storing data, the data has to be a certain format, and regardless of where we 
choose to store it, text is always one of the legal formats.
JSON makes it possible to store JavaScript objects as text. */

/* The same way JavaScript objects can be written as JSON, 
JavaScript arrays can also be written as JSON. */

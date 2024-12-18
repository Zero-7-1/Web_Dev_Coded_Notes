/*
Q. EXPLAIN WHAT IS ASYNCHRONOUS PROGRAMMING IN JS ? **
Normally (in synchronous environment), tasks are executed one after the other, and 
each task waits for the previous one to finish. If a task, like fetching data from 
a server, takes a long time, it blocks the entire program. 

Q. BY DEFAULT JS IS SYNC OR ASYNC ?
JavaScript by default executes code synchronously (It is single threaded).

Asynchronous programming in JavaScript allows the execution of tasks to continue 
while waiting for others to complete, rather than blocking the entire program's 
execution for one waiting program. 


Key Concepts of Asynchronous Programming:
- > Callback Function 
- > Promise Object  
- > asyn/await 
*/


// Callbacks 
/*
Q. WHAT IS CALLBACK FUNCTION ? 
A callback is a function that is passed as an argument to another function and 
is executed after the first function has completed its task. 

Q. WHAT IS THE OBJECTIVE OF A CALLBACK FUNCTION ? 

The main objective of a callback function is to do some task after a async 
operation is complete or either report error if task fails. 
(It important to not that callback function is not waiting for the async task 
to finish rather it is scheduled to run or it is like the task will respond 
through callback.) 

JavaScript uses callbacks to handle asynchronous operations like fetching data from 
Server or an API or waiting for a user to click a button. 

Callbacks can used in a route handler method passed as an argument to 
get() method to get user requestes to server and give response according to it.

Callbacks can also used in listen() method of http module to listen to a speicific
port, once the server is connnected to the the port the callback function is 
exceuted.  
*/

// Callback Example 1 

function greeting(name) {     // name is undefined here 
    console.log("Hello, " + name);
  }
 
  function processUserInput(callback) {
    const name = "World_";    // name is defined here 
    callback(name); // This is where the callback is executed
  }
  
  processUserInput(greeting); // greeting is used as callback parameter's argument
  // greeting() is passed as the callback function to processUserInput()
 // processUserInput() calls the greeting function after getting the name, 
//and the result is: "Hello, World_".


// Callback Example 2 

function displayMessage(message) {
    console.log(message);
  }
  
  function delayedGreeting(callback) {
    setTimeout(() => {
      callback("Hello, after 2 seconds!");
    }, 2000);
  }
  
  delayedGreeting(displayMessage);
  /*
  delayedGreeting waits 2 seconds (2000 ms) before calling the callback function

  This most usefull where some operations (like network requests or timers) takes 
  time to complete.
  
  */


  // Callback Example 3

  // The purpose of fetchData is to simulate fetching data after a delay

  function fetchData(callback) {   // callback here is expected to be a function
    console.log("Fetching data...");

       setTimeout( 
        () => {
        callback("Data fetched successfully!"); // here callback is defined 
        }, 
        3000);
    }
    /* After the 3 seconds are over, the code inside setTimeout will be executed.
     This simulates the time delay faced in real-life scenarios like 
     fetching data from a server.  */
  
  /* handleData has a parameter message, which will receive whatever 
    argument is passed when the callback is invoked. 
    That is 
    "Data fetched successfully!" is passed to the message parameter in handleData
  */

  function handleData(message) {
    console.log(message);
  }
 fetchData(handleData);
  

  // Callback Example 4
  // mimicing fetching some posts from server to client side (callback.html)

 const posts = [
    { title: 'Post 1', body: 'This is post 1'},
    { title: 'Post 2', body: 'This is post 2'}
 ]; 

 function getPosts() {
  setTimeout(() => {
   let output = '';
   posts.forEach((post, index) => {
      output += `<li> ${post.title} </li>`
   });

 document.body.innerHTML = output; 

  }, 1000);
 
}; 

function createPost(post, callback) {
setTimeout(() => {
posts.push(post);
callback();

}, 2000);

};

// getPosts(); 

createPost({
    title: 'Post 3',
    body: 'This is Post 3'
}, getPosts);
/*
Post 3 will not be added to client because createPost (2000ms or 2sec) took longer 
than the getPost (1000ms or 1sec), by the time createPost executed DOM was already
painted by getPost and  this where aysnc specifically callbacks comes in.  
*/



// Promises 
// Q. WHAT IS PROMISE IN JS ? HOW IT DEIFFERS FROM CALLBACK ? 
/*
A Promise in JavaScript is an object that represents the eventual completion 
or failure of an asynchronous operation and its resulting value.

The promise starts in a pending state (meaning the outcome is not yet determined).
It eventually moves to either:
1. fulfilled (the task is completed successfully), or
2. rejected (the task failed).


*/

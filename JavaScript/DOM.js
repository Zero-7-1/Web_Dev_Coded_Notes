/* When the browser loads a web page, it creates a structure of our web document  
like a tree of interconnected parent and child objects (HTML Elements) 
that is what we call DOM - Document Object Model 

// Q. EXPLAIN WHAT IS DOM ? 

It is important to note that DOM is neither part of HTML, nor part of JavaScript; 
it is a separate set of rules whiich are implemented by all major browser makers, 
and covers two primary areas
1. MAKING A MODEL OF THE
HTML PAGE 

2. ACCESSING AND CHANGING
THE HTML PAGE (for this we have various methods and properties)

We don't have to be suprise when people call the DOM an
Application Programming Interface (API).
As we should know, User interfaces let humans interact with
programs likewise APls let programs/scripts
communicate to each other.
The DOM states what our script can ask the browser about the
current page, and how to tell the browser to update what is being shown to the user.
So here simple DOM is acting as a messenger between scripts and web document
*/





/*
DOM tree that is stored in browser's memory which consits of 4 types of Nodes:
Wait ! What exactly is a node ? 
well it is nothing but a part of the document tree. 
Every element, attribute, and piece of text in the HTML is represented by 
its own DOM node.

Each node is an object with methods and properties.
Scripts access and update this DOM tree (not the source HTML file).
Any changes made to the DOM tree are reflected in the browser
 in short, 
These are nothing but different parts of DOM tree.. 



1. Document node - it represents the entire page, corresponds to the document object,
                   starting point for all visits to the DOM tree.


2. Elements node - represts all html elements  



3. Attribute node - if elements have attributes, they are part of elements, not children.
(Once we access an element, there are specific JavaScript
methods and properties to read or change that
element's attributes. For example, it is common to
change the values of class attributes to trigger new
CSS rules that affect their presentation)

4. Text node - Actual text within the element, text nodes cannot have children

Accessing and updating the DOM tree involves two steps:
1: Locate the node that represents the element we want to work with.
2: Use its text content, child elements, and attributes.

we will get to this .. 


*/


// while woriking with DOM, we have to see console in browser
  // it will not work in node.js 

console.log(window);
/* Window is the global object (top level) in the browser enviroment 
   representing the browser frame.
   Note it is not global object outside browser like if we're in node.js

The window object has many methods and properties which can seen in console, 
out them most popular ones are: 
alert() - method to pop up an information dialog for the user, takes a
          message string as its argument
confirm() - method is similar to alert() but provides user with a
            choice; instead of a single OK button, the user may select 
            between OK and Cancel
Qust. Why we need a variable for confirm() ?
We pass the returned value of true or false (for OK and Cancel) to a variable so that
we can later test its value and have our script take appropriate action depending on the
result. Something like this   

var answer = confirm("Are you happy to continue?");
if (answer) {
    // User clicked "OK"
    // Perform some action here
} else {
    // User clicked "Cancel" or closed the dialog
    // Handle the cancellation or exit gracefully
}

Note* term modal means that script execution pauses, and all user interaction with
the page is suspended, until the user clears the dialog. So basically the dialog boxes
of confirm, alert are called modal dialog

prompt() - The prompt() method is yet another way to open up a modal dialog. In this case,
           though, the dialog invites the user to enter information.
           The prompt method also allows for an optional second argument,
           giving a default response in case the user clicks OK without typing anything.
           like this var answer = prompt("What is your full name?", "John Doe");
           and if the user dismisses the dialog (that is, by clicking Cancel,
           then the prompt method returns null



The window object has various child ojects like:
- document object - contains all of the HTML and others that makes up loaded page.

- location object - contains details of URL of current page.

- history object - contains details of the browser’s previously visited pages.

- navigator object - stores details of the browser type, version, and capabilities

The notation we use to represent objects uses the dot or period
parent.object , ex - window.location 
This notation can be extended as many times as necessary to represent any object 
in the DOM tree like object1.object2.object3 where 3 being child of 2 which being 
child of 1. For example, 
The <body> section of our HTML page is represented in the DOM as a child element of the 
document object; we would access it like this 
window.document.body (see after this comment).

As a shortcut, we use just document instead of window.document— this also refers to the 
current document.
Note: 
If we have several windows open, or in case using a frameset, there will be a
separate window and document object for each window or frame. To refer to one of
these documents, we need to use the relevant window name and document name belonging
to the window or frame in question. 
*/
 
console.log(document); // this will show elements 
console.dir(document); // dir shows properties and methods 
console.log(document.body);  // this is actual body element which is inside document 

/* we use properties like innerHTML and innerText to see contents of body */
   // console.log(document.body.innerHTML);
   // console.log(document.body.innerText);




/* lets play around with dot notation and accessing elements with direct
properties but note that we have better ways using methods */
console.log(document.links[0]);  // gives collection links with index nums 
console.log(document.title);
 // here lets change the title 
 document.title = "Understand DOM";  
 console.log(document.title);






 // SELECT AN INDIVIDUAL ELEMNET NODE 
    
      /* 1.  document object's getElementByID() Uses the value of an element's
            id attribute (which should be unique within the page)  
            (also refer DOM.html file) */

     console.log(document.getElementById('header-title'));
     
          // getting specific attribute 
     console.log(document.getElementById('header-title').getAttribute('id'));
 

         // set attributes 
         document.getElementById('header-title').id = 'new-title'; 
         document.getElementById('new-title').setAttribute('class', 'title');


         const title = document.getElementById('new-title');
         console.log(title);

         // get or change content 
         console.log(title.textContent);
         title.textContent = 'Document Object Model';
         title.innerText = 'Understand DOM'; // does same thing as textContent 

         // if we want use html tags then we have 
         title.innerHTML ='<em> Understand DOM </em>';
        
         // changing styles 
         title.style.color ='Blue';
         title.style.backgroundColor = 'yellow'; // note - of css will not work here
                                                 // instead use came case 
        

    
/* 2. querySe1ector() used to find all HTML elements that matchs a 
     specified CSS selector, this widely replaced jQuery which was used for 
     DOM manipulation as for getElementByID a ID was necessary. */


  console.log(document.querySelector('h2'));  // selects just one, first one if many 
                                             // but usaully we select a class from it 
  console.log(document.querySelector('.container'));
  console.log(document.querySelector('#new-title'));
 // attributes 
  console.log(document.querySelector('button[type="button"]'));
 // pseudo selectors 
 console.log(document.querySelector('li:nth-child(2)').innerText); 

 let list = document.querySelector('li:nth-child(2)');
 list.innerHTML = "They are taking the hobbits to Isengard";
 list.style.backgroundColor = "brown";

 // we could use these methods on other elements not just document  












 
 





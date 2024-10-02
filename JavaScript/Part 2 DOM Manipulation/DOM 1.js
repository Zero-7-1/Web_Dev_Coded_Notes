/* When the browser loads a web page, it creates a structure of our web document  
like a tree of interconnected parent and child objects (HTML Elements) 
that is what we call DOM - Document Object Model 

// Q. EXPLAIN WHAT IS DOM ? **

It is important to note that DOM is neither part of HTML, nor part of JavaScript; 
it is a separate set of rules which are implemented by all major browser makers, 
and covers two primary areas
1. MAKING A MODEL OF THE
   HTML PAGE 

2. ACCESSING AND CHANGING
   THE HTML PAGE (for this we have various methods and properties)
Q. WHY DOM IS CONSIDERED AN API ? *** 

We don't have to be suprise when people call the DOM an
Application Programming Interface (API).
As we should know, User interfaces let humans interact with
programs likewise APls let programs/scripts
communicate to each other.
The DOM states what our script can ask the browser about the
current page, and how to tell the browser to update what is being shown to the user.

So here simple DOM is acting as a messenger between scripts and web document. 
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

// Q. WHAT ARE THE DIFFERENT TYPES OF NODES IN A DOM TREE ?  *** 

1. Document node - it represents the entire page, corresponds to the document object,
                   starting point for all visits to the DOM tree.

2. Elements node - represents all html elements  

3. Attribute node - if elements have attributes, they are part of elements, 
not children. (Once we access an element, there are specific JavaScript
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
   Note it is not global object outside browser like if we're in node.js, In 
   Node.js we simply have the global object not window object.  

 Q. WHAT IS THE TOP LEVEL OR GLOBAL OBJECT FOR A BROWSER AND NODE.JS ENVIROMENT ?*** 

The window object has many methods and properties which can seen in console, 
out them most popular ones are: 
alert() - method to pop up an information dialog for the user, takes a
          message string as its argument
confirm() - method is similar to alert() but provides user with a
            choice; instead of a single OK button, the user may select 
            between OK and Cancel

We pass the returned value of true or false (for OK and Cancel) to a variable so that
we can later test its value and have our script take appropriate action depending on
the result. Something like this   

var answer = confirm("Are you happy to continue?");
if (answer) {
    // User clicked "OK"
    // Perform some action here
} else {
    // User clicked "Cancel" or closed the dialog
    // Handle the cancellation or exit gracefully
}

Note* term modal means that script execution pauses, and all user interaction with
the page is suspended, until the user clears the dialog. So basically the dialog 
boxes of confirm, alert are called modal dialog

prompt() - The prompt() method is yet another way to open up a modal dialog. 
           In this case, though, the dialog invites the user to enter information.
           The prompt method also allows for an optional second argument,
           giving a default response in case the user clicks OK without typing 
           anything. like this var answer = prompt("What is your full name?", 
           "John Doe"); and if the user dismisses the dialog (that is,
           by clicking Cancel, then the prompt method returns null. 





Q. WHAT ARE THE VARIOUS CHILD OBJECTS OF WINDOW OBJECT ? *** 
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

As a shortcut, we use just document instead of window.document— this also refers 
to the current document.
Note: 
If we have several windows open, or in case using a frameset (another topic mostly
outdated), there will be a separate window and document object for each window or 
frame. To refer to one of these documents, we need to use the relevant window name 
and document name belonging to the window or frame in question. 
*/
 
console.log(document); // this will show elements 
console.dir(document); // dir shows properties and methods 
console.log(document.body);  // this is actual body element which is inside document 

/* we use properties of DOM like innerHTML and innerText to see contents of body 
   innerHTML - simply gets the inner html element
   innerText - Gets the text inside html element */
  // console.log(document.body.innerHTML);
   // console.log(document.body.innerText);


/* lets play around with dot notation and accessing elements with direct
properties but note that we have better ways using methods */
console.log(document.links[0]);  // getting a link through links collection 
console.log(document.title);
 // here lets change the title 
 document.title = "Understand DOM";  
 console.log(document.title);

 
// Q. GIVE ME SOME EXAMPLES OF VARIOUS METHODS THAT WE CAN USE FOR DOM MANIPULATION 
 
  // Methods for selecting Individual Elements 
    // Q. WHICH METHOD IS USED FOR SELECTING INDIVIDUAL ELEMENTS ? ***
      /*     1.  document object's getElementByID() Uses the value of an element's
                 id attribute (which should be unique within the page)  
      */

       console.log(document.getElementById('head-title'));
        
       // Q. HOW TO GET ATTRIBUTES BY USING getElementaryByID METHOD ? *** 
        // suppose we would like to get the attributes 
       console.log(document.getElementById('head-title').id); // no attribute currently
        // to get class we use className 
       console.log(document.getElementById('head-title').className);
       
       // there's a better option getAttribute which works for all attributes 
       console.log(document.getElementById('head-title').getAttribute('class')); 
       
       // HOW CAN WE SET A NEW OR CHANGE ATTRIBUTE OF AN ELEMENT ? *** 

       // setting attribute 
     // console.log(document.getElementById('head-title').className = "headClass");
      // or better to use setAttribute Method 
  console.log(document.getElementById('head-title').setAttribute("class", "heads"));
  // note that it returns undefined when consoled (But Why Doubt) 
  // but class indeed has been changed similarly we could try this for id 
  console.log(document.getElementById('head-title').className); // here check heads 
      
       // we generally store these in a variable like this 
       const title =  document.getElementById('head-title');
 
   // Things generally we would do once we select an element from DOM 

   // Q. WHICH DOM PROPTERY SHOWS THE INNER TEXT OF THE ELEMENT ? **
   console.log(title.textContent); // will show the text inside the element 
   title.textContent = "DOM Manipulation"; // we changed the inner text 
    // innerText does same thing but there's a little difference 
   // similarly we have innerHTML property to get the content of an element

   // changing styles using style property and the css property name in camercase 
   title.style.backgroundColor="yellow"; 
   // note we use camel case here instead of "-"" as we would in css  
   

   // Q. EXPLAIN THE METHOD USED FOR SELECTING MULTIPLE ELEMENTS ***
/*
     document.querySelector() - game changer as previously it came out we had to 
     depend on getElementByID in which we must have id or class and for more control
     we had to use external library for this (i.e. jQuery). 
     Using this we could select anything like a h1 without any class or attribute 

*/
 
 console.log(document.querySelector('h1'));
 // note it selects first one if we have multiple elements 

 
 console.log(document.querySelector('.container')); // can select .class or #id name 
 console.log(document.querySelector('input[type="text"]'));// selecting attributes, attribute would be inside the [] 
 console.log(document.querySelector('li:nth-child(2)').innerHTML);// pseudo selector                                      // selecting pesudo selectors 

 const listItem = document.querySelector('li:nth-child(2)');
 listItem.innerHTML = 'The Hobbit was Good Though'; 
 // inner content of list is changed


 // Q. WHAT IS THE DIFFERENCE BETWEEN QUERY SELECTOR AND QUERY SELECTOR ALL ? ***

/* We have another method querySelectorAll() 
   The major difference between querySelector() and querySelectorAll() is that 
   querySelector() returns a single Element object whereas querySelectorAll() 
   Returns a NodeList, which is a collection of elements.
*/

 const listItems = document.querySelectorAll('.items');
 console.log(listItems[1]);

 /* when console logged listItems, it returns lists in the form of 
 NodeList on which we can apply high order array methods but not in html collection 
 directly, we need convert to array in case of html collections */

 // But could'nt change style using nodelist directly like this listItems.style
 // ofcourse we have to use index number for node lists 
 
 listItems[1].style.backgroundColor = 'yellow';

// Q. HOW CAN WE CHANGE ALL THE INNNER CONTENT IN A NODELIST ? *** 
// if we want to change all of them then we can do a for each loop
  listItems.forEach((item, index) => {
   item.style.color = "red";

   // we generally would do something like these 
   if (index === 1) {
    item.innerHTML = "The Hobbit";
   }
 });

 // HOW CAN WE TRAVERSE WITHIN DOM ? WHAT ARE VARIOUS PROPERTIES FOR THAT ? ***
 // Traversing the DOM - navigating around parent and children 
 // Here we will be travesring Element Nodes 
 
 let output;

 const parent = document.querySelector('.parent');
 output = parent.children; // children is a property 
 output = parent.children[1];
 // working on parent and children 
 parent.children[1].style.backgroundColor = 'yellow';
 parent.firstElementChild.innerHTML = 'I M THE FIRST CHILD';
 // similarly we have lastElementChild property for last selecting last element 

 // we could get parent element from child 
 const child = document.querySelector('.child');
 output = child.parentElement; // ouputing parent through child 

 // getting  siblings elements 
 const secondItem = document.querySelector('.child:nth-child(2)');
 output = secondItem;
 output = secondItem.nextElementSibling; // gives next one 
// we also have previousElementSibling for previous to the item  
 console.log(output);  // can use dir here to see what are available 

// Q. DIFFERENCE BETWEEN ELEMENTS NODES AND ALL NODES ?  **
 
 // Traversing the DOM - All Nodes (Previous was on Elements Nodes)
 let output2;

const parent2 = document.querySelector('.parent2')

output2 = parent2.childNodes;
output2 = parent2.childNodes[1].innerText = "Child ONE";
/* As we had in Elements nodes, here also we would have similar
   firstChild, lastChild, parentNode, nextSibling 
 */
console.log(output2);
 

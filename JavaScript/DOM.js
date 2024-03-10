/* When the browser loads a web page, it creates a structure, 
like a tree of interconnected parent and child objects (HTML Elements) 
of the web document in the memory, that is what we call DOM - Document Object Model */

console.log(window); // 1 for helping to look in browser console 
/* Window is the global object in the browser enviroment representing the browser frame.
Note it is not global object outside browser like if we're in node.js.
This window object has various child ojects like:
- document object - contains all of the HTML and others that makes up loaded page.

- location object - contains details of URL of current page.

- history object - contains details of the browser’s previously visited pages.

- navigator object - stores details of the browser type, version, and capabilities

The notation we use to represent objects uses the dot or period
parent.object 
ex - window.location 
This notation can be extended as many times as necessary to represent any object in the DOM 
tree like object1.object2.object3 where 3 being child of 2 which being child of 1. 
For example, 
The <body> section of our HTML page is represented in the DOM as a child element of the 
document object; we would access it like this 
window.document.body (see after this comment).

As a shortcut, we use document instead of window.document— this also refers to the 
current document.
Note: 
If we have several windows open, or in case using a frameset, there will be a
separate window and document object for each window or frame. To refer to one of
these documents, we need to use the relevant window name and document name belonging
to the window or frame in question. 

*/
console.log(document); // 2 
console.dir(document); // dir provides a more structured and detailed view    3
console.log(document.body);   // 4
 

/* lets play around with dot notation and accessing elements with direct
properties but note that we have better ways using methods */
console.log(document.links[0]);  // 5
console.log(document.title);
// here lets change the title 
document.title = "Understand DOM";  
console.log(document.title);

/*
Actually, DOM is called a Programming Interface (API) for web documents as it allows 
programs (that are written in JS) to interact and manipulate the contents of web document 
using objects, methods and properties. 
The DOM acts as an intermediary between the web page's structure and 
the scripting language. 
Note that DOM is platform and language-neutral interface not core part
of JS or HTML. 
*/

/* DOM consits of 4 types of Nodes:
Wait ! What exactly is a node ? 
well it is nothing but a part of the document tree. 
Each node has properties and methods that can used for manipulation.
Note jQuery was used for a while to do this but now we handle with pure js. 

1. Document node - already discussed

2. Elements node - represts all html elements 

3. Attribute node - if elements have attributes, they are part of elements not children.
(Once we access an element, there are specific JavaScript
methods and properties to read or change that
element's attributes. For example, it is common to
change the values of cl ass attributes to trigger new
CSS rules that affect their presentation)

4. Text node - Actual text within the element, text nodes cannot have children

These are nothing but different parts of DOM tree.. 

Accessing and updating the DOM tree involves two steps:
1: Locate the node that represents the element you want to work with.
2: Use its text content, child elements, and attributes.

*/














 
 





// Creating and Appending Elements 
/*  
In many cases we would want to create elements and insert it to the document on some
kind of event, we would look events after this but here we focus on what will happen 
when an event is triggered i.e. insert, delete, etc. 
*/

// Q. HOW CAN WE ADD AN ELEMENT THROUGH DOM TO THE DOCUMENT  ? 
const div = document.createElement('div'); // a div has been created in memory 
div.className = 'my-element'; // created class 
div.id = 'element-id';
div.setAttribute('title', 'my-element');

// div.innerText ='The Element'; we could do this but 
       /* innerText is not the best way to do it here as it is meant to 
       get and change from existing element. Here we will create new text node 
       and then append it to element  */

       // Q. HOW CAN WE INCLUDE OR CREATE A TEXT INSIDE A ELEMENT THROUGH DOM ? 
 const text = document.createTextNode('My Goofy Element');
 div.appendChild(text);  //Q. EXPLAIN APPENDCHILD METHOD ? , inserts it into 
console.log(div);


// lets append it to document 
document.body.appendChild(div); // this will be added to buttom of document
                                // after everything else  

// WHAT'S THE DIFFERENCE BETWEEN INNERHTML VS CREATEELEMENT ? 
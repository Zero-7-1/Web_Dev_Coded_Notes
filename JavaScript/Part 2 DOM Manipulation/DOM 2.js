// Creating and Appending Elements 
/*  
In many cases we would want to create elements and insert it to the document on some
kind of event, we would look event handling after this but here we focus on what will 
happen when an event is triggered i.e. insert, delete, etc. 
*/
  
// Q. HOW CAN WE ADD OR CREATE AN ELEMENT AND THEM TO DOM ? ***
const div = document.createElement('div'); // a div has been created in memory 
div.className = 'my-element'; // given a class to an element  
div.id = 'element-id';  // similarly we gave an id 
div.setAttribute('title', 'my-element');

// div.innerText ='The Element'; we could do this but 
       /* innerText is not the best way to do it here as it is meant to 
       get and change from existing element. Here we will create new text node 
       and then append it to element  */

// Another method is appendChild to add element to DOM 
 const text = document.createTextNode('My Goofy Element');
 div.appendChild(text);  //Q. EXPLAIN APPENDCHILD METHOD ? ***
                         //- inserts a child to element or text node 
console.log(div);


// lets append it to document 
document.body.appendChild(div); // this will be added to buttom of document
                                // after everything else  


 // innerHTML VS CreateElement 
/*This is a way of adding a item to a shopping lister DOM mini project
  uisng innerHTML have a look  */

  function createListItem(item) {
      const li = document.createElement('li'); // create li element node 
      li.innerHTML = `${item}
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>`;

      document.querySelector('.items').appendChild(li);
}
createListItem('Eggs');

/* Better alternative method of above creating every element, this one is more
   efficient way than the other one as for first one browser will have parse
   everytime it loads and it may problems with event handlers  */


   function createNewListItem(item) {
   const li = document.createElement('li');
   li.appendChild(document.createTextNode(item));
   
   const button = document.createElement('button');
   button.className = 'remove-item btn-link text-red';
   
   const icon = document.createElement('i');
   icon.className ='fa-solid fa-xmark';
   button.appendChild(icon); // icons needs to appended inside button 
   li.appendChild(button); // similarly button needs to go inside list 
  
   document.querySelector('.items').appendChild(li);
};
createNewListItem('Curd');

// Even much better resusable way (Refactor to Multiple Elements)

// function for creating items 
function createNewItem(item) {
      const li = document.createElement('li');
      li.appendChild(document.createTextNode(item));
      const button2 = createButton('remove-item btn-link text-red');

      li.appendChild(button2); 
   
      document.querySelector('.items').appendChild(li);
   };
 
// function for creating button 
function createButton(classes) {
      const button2 = document.createElement('button');
      button2.className = classes;
      
      const icon2 = createIcon('fa-solid fa-xmark');
      button2.appendChild(icon2); 
      
      return button2;
};

// function for creating icon
function createIcon(classes) {
      const icon2 = document.createElement('i');
      icon2.className = classes;
      return icon2;
};
createNewItem('Chicken');
createNewItem('Ketchup');

/*This more efficient way, we have separate icon and button methods to create buttons 
  and icons.We are setting the button to the return value of create button function
  , appending it to  list item and then ultimatley we are appending list item to 
  the ul in dom  */
   


// Other than appendChild we have other methods to Inset Elements, Text and HTML


// insertAdjacentElement 



// insertAdjacentText



// insertAdjacentHTML 



   
   
/*
KEY TOPICS COVERED IN THIS MINI PROJECT:   

- > JSX & COMPONENTS 
- > IMPORT AND EXPORT 
- > LOOPS IN JSX
- > PROPS 

   
Q. EXPALIN WHAT IS JSX ? *
   - JSX stands for JavaScript Syntax Extension
   - It is the syntax used in react that allows to write 
     HTML elements in JavaScript and react puts these elements in DOM without any 
     DOM methods like createElement or appendChild internally. 
   
     - In React behind the scene this happens basically:
       React.createElement("h1", "null", "Hello From React");
       null is for props which acts as attributes, this is what 
       internally react does 
       
       for our this jsx code below 
      
      export const App = () => {
         return <h1>Hello from React</h1>;
         };
         
     React used Babel which is a JS compiler and in React 19 it will have its 
     own compiler where JSX made more powerful and no need of createElement.
     Browser doesn't understand jsx sytax so it takes the help of compiler then 
     react further converts to it objects and to elements (Virtual DOM).
*/

/*
Q. EXPLAIN WHAT ARE COMPONENTS IN REACT ? * 
Components are  resuable pieces of codes to build elements on a page, it can be 
also thought as custom HTML element. Compnonets can be broken down into smaller 
ones and can be called composition. These are great ways of building UIs 
providing scalability and easier to maintain. 

-  Components are like JavaScript functions that returns HTML or 
   specifically JSX. 
-  A componnet always starts with capital letter as here in App.jsx

Q. HOW MANY TYPES OF COMPONENTS ARE THERE IN REACT AND WHAT'S THE 
   DIFFERENCE ? * 
Class Components are not used anymore as it was more lengthy so 
Functional Components are used today widely. 

- Class components is defined using ES6 class syntax, needs to 
  extend React.Component and have a render method. 
  Whereas, 
  Functional Components are defined using a simple JavaScript function that 
  returns JSX. (Easier synatx of Functional Components)

- Functional components were at first stateless but introduction of Hooks
  solved this.
  However.
  In class components state is managed using this.state and updated using 
  this.setState(). (Class components offers state management without Hooks)


Q. BY DEFAULT WHICH COMPONENT IS RENDERED IN REACT ? AND WHERE IT IS LOCATED ? * 
   By default only App component is rendered which is located inside main.jsx 
   Note that every react app must have one component and that is called 
   Root component. 

Q. WHAT KIND OF APPLICATIONS WE COULD BUILD USING REACT ?
      SPA - Single Page Applications loads a single html file namely index.html
            then it loads a JavaScript bundle that includes entire UI or app,
            basically content is loaded by javascript saving time. 

      SSR - SPAs could have some problems with SEOs or first time slow page load,
             so we could build a Server Side Rendered App which is done using
             Next.js which is the framework of React. Note SPA has no hosting
             limitations whereas SSRs can be hosted using vercel or netlify. 
*/


import React from "react"; // not needed nowdays, imports React Library 

/* importing Prime Series Component by simple writing name of it which 
was default export */
import PrimeSeries from "./components/PrimeSeries";  
// using default import 

//importing Footer and Header using curly braces here which was named exports 
import { Footer, Header } from "./components/PrimeSeries"; 
// this is a named import  

// Above Imports can be also writtern as combined both Default and Named   
// import PrimeSeries, {Header, Footer} from .. 



// App component is exported to main.jsx 
export const App = (props) => {   
       return (
         <> 
             <h1> {props.title} </h1>
             <Header name="John"/> 
             <PrimeSeries/> 
             <Footer/> 
         </>
      );
   };

/*   More about JSX 
- Each JSX expression must have one parent element, which means if we try to 
  retrun multiple elements, react will through error.
   
   Q. WHY CAN'T WE RETURN MULTIPLE ELEMENTS AT THE SAME TIME ? * 
   In JSX everything is returned as object and even in plain JS one function
   can't return multiple values.

Q. WHAT IS REACT FRAGMENT AND WHY WE NEED REACT FRAGMENT ?
- In these code of a previous version   
   <div> 
   <PrimeSeries/> 
   <PrimeSeries/> 
   <PrimeSeries/> 
   <PrimeSeries/> 
   <PrimeSeries/> 
   </div>
   We don't need the div which creates a extra node behind the scene which is 
   unecessary so we should use <React.Fragment> instead of div which we get 
   from React or simply use its  shorter syntax '<> </>'.   

   Q. WHAT ARE IMPORTS AND EXPORTS ? * 
   In JavaScript (ES6+), import and export are used to share code 
   between files or modules.  
*/



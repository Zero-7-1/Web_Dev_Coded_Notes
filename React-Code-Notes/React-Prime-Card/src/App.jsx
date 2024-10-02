/*
KEY TOPICS COVERED IN THIS MINI PROJECT:

- > JSX & COMPONENTS 
- > IMPORT AND EXPORT 
- > LOOPS IN JSX
- > PROPS 

   
Q. EXPALIN WHAT IS JSX ? 
   - JSX stands for JavaScript XML (JavaScript Syntax Extension)
   - It basically the syntax used here in react that allows us to write 
     HTML elements in JavaScript and react puts in DOM without any DOM methods for
     us to write like createElement or appendChild internally. 
   
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
Q. EXPLAIN WHAT ARE COMPONENTS IN REACT ? 
Components are  resuable pieces of codes to build elements on a page, it can be also 
thought as custom HTML element. Compnonets can be broken down into smaller ones 
and can be called composition. These are great ways of building UIs providing 
scalability and easier to maintain. 
-  Components are like JavaScript functions that returns HTML or specifically JSX
-  A componnet always starts with capital letter as here in our App.jsx
-  Components are always starts with upper case by convention 

Q. HOW MANY TYPES OF COMPONENTS ARE THERE IN REACT ? 
We had an old one Class Components which is not used anymore as it was 
more lengthy so Functional Components which is used today widely. 
 
Q. BY DEFAULT WHICH COMPONENT IS RENDERED IN REACT ? AND WHERE IT IS LOCATED ? 
   By default only App component is rendered which is located inside main.jsx 
   Note that every react app must have one component and that is called 
   Root component 

Q. WHAT KIND OF APPLICATIONS WE COULD BUILD USING REACT ?
      SPA - Single Page Applications loads a single html file namely index.html
            then it loads a JavaScript bundle that includes entire UI or app,
            basically content is loaded by javascript saving time. 

      SSR - SPAs could have some problems with SEOs or first time slow page load,
             so we could build a Server Side Rendered App which is done using
             Next.js which is the framework of React. Note SPA has no hosting
             limitations whereas SSRs can be hosted using vercel or netlify. 
*/

// not needed nowdays, imports React Library 
import React from "react"; 

// importing Prime Series Component here which was default export
import PrimeSeries from "./components/PrimeSeries";  // this is a default import 

//importing Footer and Header here which was named exports 
import { Footer, Header } from "./components/PrimeSeries"; // this is a named import  

// Above Imports can be also writtern as combined both Default and Named   
// import PrimeSeries, {Header, Footer} from .. 



// App component is exported too to main.jsx 
export const App = () => {
       return (
         <> 
             <Header/> 
             <PrimeSeries/> 
             <Footer/> 
         </>
      );
   };

/*   More about JSX 
- Each JSX expression must have one parent element, which means if we try to retrun
  multiple elements, react will through error.
   
   Q. WHY CAN'T WE RETURN MULTIPLE ELEMENTS AT THE SAME TIME ? 
   In JSX everything is returned as object and even in plain JS one function
   can't return multiple values.

- Remember when we return we need to have one parent and if we have multiple 
  JSX codes then use () with return

- Every JSX tag needs to be colsed. We can use self-closing tags for elements that 
  don't have children like img tag like this <img src="#" /> 

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
   unecessary so we should use <React.Fragment> instead of div which we get from React
   or simply use sugar react syntax <> </>  
*/



/*
Q. WHAT KIND OF APPLICATIONS WE COULD BUILD USING REACT ?
      SPA - Single Page Applications loads a single html file namely index.html
            then it loads a JavaScript bundle that includes entire UI or app,
            basically content is loaded by javascript saving time. 

      SSR - SPAs could have some problems with SEOs or first time slow page load,
             so we could build a Server Side Rendered App which is done using
             Next.js which is the framework of React. Note SPA has no hosting
             limitations whereas SSRs can be hosted using vercel or netlify. 
*/


/*
KEY TOPICS COVERED IN THIS MINI PROJECT:   

- > JSX & COMPONENTS 
- > IMPORT AND EXPORT 
- > LOOPS IN JSX
- > PROPS 

   
Q. EXPALIN WHAT IS JSX ? *
   - JSX stands for JavaScript Syntax Extension
   - It is the syntax used in react that allows to write 
     HTML elements in JavaScript and react puts these html elements in 
     DOM without for us to write DOM methods like createElement or appendChild 
     internally. 
   
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
     Browser doesn't understand jsx syntax so it takes the help of compiler then 
     react further converts to it objects and to elements (Virtual DOM). This is
     what is called Transpilation (Conversion of one language to its equivalent). 
*/

/*
Q. EXPLAIN WHAT ARE COMPONENTS IN REACT ? WHAT ARE COMPOSITIONS AND HOW 
   IT DIFFERS FROM COMPONENTS ?  ** 

   Components are resuable pieces of codes like JavaScript functions that 
   returns JSX. It forms a part of UI like navigation component, footer 
   component, main component etc. 
   A componnet always starts with capital letter as here in App.jsx. 

   Composition is a design pattern in React where multiple components are 
   combined to build more complex UIs. It focuses on how components are arranged 
   together and interact with one another. For example, A Form component can be 
   composed of Input and Button components.

   Q. WHAT DOES REACT ENCOURAGES COMPOSITION OR INHERITANCE ? *** 
      
      React encourages composition over inheritance, in other words react 
      emphasizes on building components by combining smaller components together 
      (composition), rather than relying on class inheritance to share behavior or 
      functionality.

      Instead of inheriting properties and methods, components work together by:
      1. Nesting: Placing components inside other components.
      2. Passing Props: Customizing child components by passing data or functions 
                        as props.
      (We shall see example of use of composition later in this repo)

Q. HOW MANY TYPES OF COMPONENTS ARE THERE IN REACT AND WHAT'S THE 
   DIFFERENCE ? ** 

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


Q. BY DEFAULT WHICH ROOT COMPONENT IS RENDERED IN REACT ? 
   AND WHERE IT IS LOCATED ? * 
   
   By default only App component is rendered which is located inside main.jsx 
   Note that every react app must have one component which is rendered to DOM
   and that is called Root component. 

   Q. EXPLAIN A BIT ABOUT REACT RENDERING ? 
   React uses a single root DOM node (often <div id="root">) to render the 
   application. We can render many components, but they must be part of the 
   component tree that starts from that root component.
   Only one root component (like App.jsx) is rendered directly using 
   ReactDOM.render
   Inside the root component, we can nest and render as many child components 
   as needed.

   Q. WHY ONLY ONE ROOT COMPONENT ?
      Rendering multiple root components independently would create multiple 
      React trees, which is generally unnecessary and can complicate 
      state management and routing.
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
export const App = (titles) => {         {/* We could or not pass props here, 
                                            but did to understand props, instead of 
                                            props we could pass any name */}
       return (
         <> 
             <h1> {titles.title} </h1> { /* We could make this h1 dynamic using 
                                             props */}
             
             <Header name="John Doe"/>  {/* Here parent is Passing a prop named 
                                          'name' */}
             <PrimeSeries/> 
             <Footer/> 
         </>
      );
   };

/*   More about JSX 
- Each JSX expression must have one parent element, which means if we try to 
  retrun multiple elements, react will through error.
   
   Q. WHY CAN'T WE RETURN MULTIPLE ELEMENTS AT THE SAME TIME ? **
     In JSX everything is returned as object and even in plain JS one function
     can't return multiple values.

Q. WHAT IS REACT FRAGMENT AND WHY WE NEED REACT FRAGMENT ? **
   As we know that we can't pass more than one element to a JSX expression or 
   component so we choose a div element and keep other elements within it. But it
   creates extra node in DOM, which can be seen if consoled log. To avoid that 
   we use React Fragments. 

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


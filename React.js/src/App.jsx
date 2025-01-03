function App() {
}
export default App




/************************************************************************************
-------------------------------------------------------------------COMPONENTS AND JSX 
Q. EXPALIN WHAT IS JSX ? **
   - JSX stands for JavaScript Syntax Extension
   - It is the syntax used in react that allows to write 
     HTML elements in JavaScript and react puts these html elements in 
     DOM without for us to write DOM methods like createElement or appendChild 
     internally. 
   
     **
     More details about internall workings.. 
   - In React behind the scene this happens basically:
     React.createElement("h1", "null", "Hello From React");
     null is for props which acts as attributes, this is what 
     internally react does 
     for our this jsx code below;
     export const App = () => {
         return <h1>Hello from React</h1>;
      };
         
   - React used Babel which is a JS compiler and in React 19 it have its 
     own compiler where JSX made more powerful and no need of createElement.
     Browser doesn't understand jsx syntax so it takes the help of compiler then 
     react further converts to it objects and to elements (Virtual DOM). This is
     what is called Transpilation (Conversion of one language to its equivalent).

   **
Q. EXPLAIN WHAT ARE COMPONENTS IN REACT ? WHAT ARE COMPOSITIONS AND HOW 
   IT DIFFERS FROM COMPONENTS ?  ** 
 - Components are resuable pieces of codes like JavaScript functions that 
   returns JSX. It forms a part of UI like navigation component, footer 
   component, main component etc. 
 - A componnet always starts with capital letter as here in App.jsx. 

 - Composition is a design pattern in React where multiple components are 
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
  - Class Components are not used anymore as it was more lengthy so 
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

Q. HOW MANY COMPONENTS ARE RENDERED IN REACT ? WHAT IS THE ROOT COMPONENT IN REACT ?  
   OR EXPLAIN A BIT ABOUT REACT RENDERING. OR WHY ONLY ROOT COMPONENT ? OR WHAT 
   IS THE ENTRY POINT OF A REACT APPLICATION ? WHAT DO YOU MEAN BY SINGLE PAGE
   APPLICATION ? **
  
  - React is used to build SPAs (Single Page Applications) i.e. whole application
    is mounted to a single HTML element having a div with id "root". This div acts 
    as the single entry point entire React application into the existing HTML 
    structure. Everything that React renders will be placed inside this div.

  - SPA contents dynamically loaded into the DOM without refreshing the whole page. 
    
  - Many components are rendered in react but they all must be part of only one 
    component that is root component. By convention that component is App.jsx. 
    This root component is the top level component and act as container for 
    other components. 

  - Rendering multiple root components independently would create multiple 
    DOM trees, which is generally unnecessary and can complicate features of react
    like state management and routing.
*/




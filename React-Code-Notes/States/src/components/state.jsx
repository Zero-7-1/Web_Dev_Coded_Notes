import { useState } from "react";

export const State = () => {
    const [count, setCount] = useState(0);
    const handleButtonClick = () => {
      // value++;
     // console.log(value);
      setCount(() => count + 1)
    };
  
    return (
      <>
        <h1>{count}</h1>  {/** Count instead of value */}
        <button onClick={handleButtonClick}> Increment </button>
      </>
    );
  };
  

/* Q. WHAT IS STATE IN REACT ? 
 Genrally using normal variables that is going to change inside a component will
 not be read by react. For that we have states. 
 So state is a built-in object that stores data specific to a component and 
 allows the component to keep track of changing information over time.
 State changes over time based on user interactions, API calls, or other events.
 
 Note: When state changes, React re-renders the component to reflect 
 the updated state in the UI.

 Q. HOW STATE IS DIFFERENT FROM PROPS ? 
 Props are passed from parent to child components but state is managed within a 
 component, and it changes. 
 State is specific to individual components and doesn’t affect other 
 components unless explicitly passed down as props.

 Q. HOW STATES CAN BE MANAGED IN REACT ?
 There are many ways of state management in react

1. Localy (For managing state within a single component) we manage the state 
   using hooks (built-in functions) like useState. ✔️

2. Globally (For applications that require state to be shared across multiple 
   components) we could use Context API 

3. Popularly an additional library is used widely called Redux

4. For External server state management libraries like React Query or Axios

5. Local Storage and session storage for For persisting state across page 
   refreshes

*/

/*
Q. WHAT ARE HOOKS IN REACT AND DIFFERENT TYPES OF HOOKS ? 

Hooks are actually designed built-in functions that can be called inside 
a functional components. We need to import every hook from react before
using it. 

Various types of Hooks are:
1. useState() - 
const [state, setState] = useState(initialState);

state: The current state value

setState: A function that updates the 'state' variable

initialState: The initial value for the 'state' variable

useState returns array with two elements, one undefined and other function


*/
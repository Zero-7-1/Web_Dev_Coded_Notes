import React from "react"; 
import PrimeData from "../api/PrimeData.json"; 
import { SeriesCard } from "./SeriesCard";

const PrimeSeries = () => {
  let userAge = 15; // Generally age is taken from user input or from a state

  const canWatch = (rating) => {
      const ratingAge = parseInt(rating);
      return userAge >= ratingAge ? "Watch Now" : "Turn off Kids Mode"; // Ternary operator for conciseness
  };

  return (
      <ul>
          {PrimeData.map((series) => (
              <SeriesCard
                  key={series.id}
                  series={series}
                  canWatch={canWatch} // Pass the canWatch function
              />
          ))}
      </ul>
  );
};
export default PrimeSeries;



  export const Header = (names) => {    
    return <p> Welcome ! {names.name} </p> 
  };

  export const Footer = () => {
    return <p> copyright @AmazonFlip </p>
  }; 




/* We need to use this PrimeSeries Component in App.jsx using import and 
   export and the are of various types like 

Q. WHAT ARE IMPORTS AND EXPORTS ? * 
   In JavaScript (introduced in ES6+), import and export are used to share code 
   between files. Suppose we want to use a function or a variable or a class or 
   whatever that is defined in one file in some other files, we can do that usin
   imports and exports.

Q. HOW MANY TYPES OF IMPORTS AND EXPORTS STATEMENTS ARE THERE ? **
   1. Default 
   2. Named  
   3. or both combined which we used here 
*/

/*
Q. EXPLAIN ABOUT DEFAULT IMPORT AND EXPORT ? HOW IT DIFFERES FROM NAMED 
   IMPORT AND EXPORT ? **
 - We can give any name with default export but generally we use file name, 
   then we import it in App.jsx with import keyword and 
   file name by specifying its location (automatically we should get location 
   inserted). 
   
 - The key difference between Default exports and named exports is that,  
   There can only be one default export for each file but we can have many named 
   exports for each file. 

 - In default export we write the keyword 'export' with 'default' at the end or 
   after the component has been defined. 
   
   We used default for PrimeSeries component and names for Header and Footer
   here.. 
*/ 


/* Q. EXPLAIN ABOUT NAMED IMPORT AND EXPORT AND HOW IT DIFFERES FROM DEFAULT ? **
  
   We used named export for Footer and Header here which are 
   another components inside PrimeSeries component. 
   (We can have both i.e. one default 
   and many named in a sigle file)

  - We use named export to export multiple components from a single file unlike 
    default which we use to exports only one component. 

  - The names of the exports matters here a lot. i.e. we have to use same name
    while importing that we used while exporting. But in defualt export we can use
    any other name while importing.
*/

/* Q. HOW LOOPING IS DONE IN REACT ? *** 
Normal loops of JS can't be used here in JSX insatead high order array methods
like map() is used to loop (Refer Js). 

Q. WHY GENERALLY A KEY IS NEEDED FOR LISTS IN REACT ? ** 
Key commonly used in <li> is a prop uniquely identifying each element in a list. 
When React renders a list of items, it needs to keep track of which items have 
changed, been added, or removed. The prop helps React efficiently manage these 
updates.
Without a key , React would have to re-render the entire list, but with a key, 
React only updates the specific items that have changed.

React will show a warning in the console if key prop is missed. 
Warning: Each child in a list should have a unique "key" prop.
*/









/************************************************************************************
PROPS OR PROPERTIES IN REACT 
*************************************************************************************
Q. EXPLAIN WHAT IS PROP ? HOW TO PASS PROPS IN REACT ? **
   - Props (short for properties) are used to pass data from one component to 
     another in React (more specifically from a parent component to child and 
     data flow is unidirectional i.e. from parent to child). 
     
    

  */
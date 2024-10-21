/* We need to use this PrimeSeries Component in App.jsx using import and 
   export and these are of various types like 

   Q. HOW MANY TYPES OF IMPORTS AND EXPORTS STATEMENTS ARE THERE ? *
   1. Default 
   2. Named  
   3. or both combined which we used here 
*/
 
import React from "react"; 
import PrimeData from "../api/PrimeData.json"; 
import { SeriesCard } from "../components/SeriesCard";




/*
Q. EXPLAIN ABOUT DEFAULT IMPORT AND EXPORT ? HOW IT DIFFERES FROM NAMED 
   IMPORT AND EXPORT ? *
   We can give any name with default export but recommended to use file or 
   component name, then we import it in App.jsx with import keyword and 
   file name by specifying its location (automatically we should get location 
   inserted). 
   
   Note that there can only be one default for each file so it is used for 
   exporting many values in one component. But we can have many named exports.
   
   We used default for PrimeSeries component and names for Header and Footer
   here.. 
*/ 

/* This the PrimeSeries Component using default export which will be imported 
in App.jsx as default import */
const PrimeSeries = () => {
   let userAge = 25; // this would come from database 

   const canWatch = (rating) => {
      // Assuming ratings like "18+" require age >= 18
      const ratingAge = parseInt(rating);
      if (userAge >= ratingAge) return "Watch Now";
      return "Turn off Kids Mode";
   };


/* Q. HOW LOOPING IS DONE IN REACT ? ** 
Normal loops of JS can't be used here in JSX insatead high order array methods
like map() is used to loop (Refer Js). 

Q. WHY GENERALLY A KEY IS NEEDED FOR LISTS IN REACT ? 
Key commonly used in <li> is a prop uniquely identifying each element in a list. 

When React renders a list of items, it needs to keep track of which items have 
changed, been added, or removed. The prop helps React efficiently manage these updates.

Without a key , React would have to re-render the entire list, but with a key, 
React only updates the specific items that have changed.

React will show a warning in the console if key prop is missed. 
Warning: Each child in a list should have a unique "key" prop.
*/

   return (
      <ul> 
      {PrimeData.map((series) => {
        return <SeriesCard key={series.id} series={series} canWatch={canWatch} />;
      })} 
     </ul>
   );

/*
Two props passed in SeriesCard component one is Key for unique id and other is 
current element. 
*/
};

export default PrimeSeries; // this is a default export 


/* Q. EXPLAIN ABOUT NAMED IMPORT AND EXPORT AND HOW IT DIFFERES FROM DEFAULT ? *
  
   We used named export for Footer and Header here which are 
   another components inside PrimeSeries component. 
   (We can have both i.e. one default 
   and many named in a sigle file)

   It allows to export multiple components from a single file unlike default 
   which exports only one componet (within it we can return many values though). 

   The names of the exports matters here a lot
*/

  export const Header = () => {
    return <p> This would be Header </p> 
  }

  export const Footer = () => {
    return <p> copyright @AmazonFlip </p>
  }


  /*
  Props (or Properties)

  Q. WHAT IS PROP ? 
  Props (short for properties) are used to pass data from one component to 
  another in React. They work like function arguments that is the value passed 
  to function parameters. Prop is essentially a javascript object, props object 
  which can be used to pass any no. of data to components. 
  
  The components sending the props data is parent and the reciever is the child. And
  child can not send data back to parents.  
  */
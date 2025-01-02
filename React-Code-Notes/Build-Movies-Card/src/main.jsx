/*
Q. WHAT IS THE ROLE OF THIS MAIN.JSX COMPONENT ? 
 - The main.jsx component's role is to render the App component into the DOM.
 - It is the entry point of the React application
 - It calls ReactDOM.createRoot to render the App component into the root element i.e.
   <div id="root"> in index.html file.
*/
import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App title="Sudhanshu's Movies & Series Recommendation"/>
  </React.StrictMode>,
);
/* 
Here in the root component we passed a attribute title with some string values 
as an argument that is need to be passed to app component. In app component we 
accept this argument using props object. To do this we have added props inside 
parentheses of function declaration. Finally to access to this object property 
we use dot notations. 
*/
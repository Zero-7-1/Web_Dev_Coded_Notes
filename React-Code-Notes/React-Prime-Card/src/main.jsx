import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);


/* Q. EXAPLIN THE ROOT COMPONENT OR WHAT IS THE DEFAULT COMPONENT IN REACT ? 
This was previously called index.js.

In a react application only one component is rendered and that is app.jsx
It must contain atleast one compenent and that is app.jsx which called the 
root component. Other components are created inside this root component. 
Ultimately these components are converted to DOM fragments and placed to 
exiting DOM 


*/
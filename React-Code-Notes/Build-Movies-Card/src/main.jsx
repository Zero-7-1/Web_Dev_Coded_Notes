
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
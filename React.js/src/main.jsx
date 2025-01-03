/*
Q. WHAT IS THE ROLE OF THIS MAIN.JSX COMPONENT ? 
 - The main.jsx component's role is to render the App component into the DOM.
 - It calls ReactDOM.createRoot to render the App component into the root element i.e.
   <div id="root"> in index.html file.
*/

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


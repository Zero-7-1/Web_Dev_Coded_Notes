import logo from './logo.svg';
import './App.css';

function Header() {
  return <h1> Hello, Welcome to React </h1>
}


function App() {
  return < Header/>   /* Render syntax <componentName /> */
}    /* Only the App component is rendered in whole react app 
so without this nothing will show in browser. */

export default App;

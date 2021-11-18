import React, { useState, useEffect } from 'react'
import './App.css';
import SideNav from './components/SideNav'
import Main from './components/Main'


function App() {

const [toggle, setToggle] = useState(false);
console.log(toggle);

  return (
    <div className="flex-container">
      <SideNav 
        toggle={toggle} 
        setToggle={setToggle}
      />
      <Main 
        toggle={toggle} 
        setToggle={setToggle} 
      />
    </div>
  );
}

export default App;

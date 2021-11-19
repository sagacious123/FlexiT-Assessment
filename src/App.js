import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import SideNav from './components/SideNav';
import Main from './components/Main';


function App() {

const [toggle, setToggle] = useState(false);
const [images, setImages] = useState([])
const [inputValue, setInputValue] = useState(''); 

useEffect(() => {
  axios.get('https://api.unsplash.com/photos/?client_id=xWFm8N4t0Y_3oPxGTMKFlmh9xP62bmo9oNjB-PbEoSQ&per_page=10&query=people')
  .then(response => {
    setImages(response.data);
  })
}, [])
// https://api.unsplash.com/search/photos?query=your_search_text 

const newImages = images.filter(image => {
  return image.user.first_name.toLowerCase().includes(inputValue.toLowerCase());
})

  return (
    <div className="flex-container">
      <SideNav 
        toggle={toggle} 
        setToggle={setToggle}
      />
      <Main 
        toggle={toggle} 
        setToggle={setToggle} 
        inputValue={inputValue}
        setInputValue={setInputValue}
        newImages={newImages}
      />
    </div>
  );
}

export default App;

import React from 'react'
import '../index.css';
import SearchBar from './SearchBar'
import TopNav from './TopNav'
import ImageGrid from './ImageGrid'

const Main = ({ toggle, setToggle, inputValue, setInputValue, newImages }) => {
  return (
    <main className="main">
      <div className="container">
        <SearchBar 
          toggle={toggle} 
          setToggle={setToggle}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
        <TopNav />
        <ImageGrid 
          newImages={newImages}
        />
      </div>
    </main>
  )
}

export default Main

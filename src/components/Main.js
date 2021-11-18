import React from 'react'
import '../index.css';
import SearchBar from './SearchBar'
import TopNav from './TopNav'
import ImageGrid from './ImageGrid'

const Main = ({ toggle, setToggle }) => {
  return (
    <main className="main">
      <div className="container">
        <SearchBar 
          toggle={toggle} 
          setToggle={setToggle}
        />
        <TopNav />
        <ImageGrid />
      </div>
    </main>
  )
}

export default Main

import React from 'react'
import '../index.css';
import SearchBar from './SearchBar'
import TopNav from './TopNav'
import ImageGrid from './ImageGrid'

const Main = () => {
  return (
    <main className="main">
      <div className="container">
        <SearchBar />
        <TopNav />
        <ImageGrid />
      </div>
    </main>
  )
}

export default Main

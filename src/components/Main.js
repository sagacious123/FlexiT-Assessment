import React from 'react'
import SearchBar from './SearchBar'
import TopNav from './TopNav'
import ImageGrid from './ImageGrid'

const Main = () => {
  return (
    <main>
      <div className="container">
        <SearchBar />
        <TopNav />
        <ImageGrid />
      </div>
    </main>
  )
}

export default Main

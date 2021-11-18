import React from 'react'
import '../index.css';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <form className="search-form">
        <i className="fa fa-search"></i>
        <input type="text" placeHolder="Find Something..." id="img-search" className="search-input" />
        <input type="submit" id="img-search-btn" className="search-btn" />
      </form>
      <a href="#" className="notification"> 
        <i className="fa fa-bell"></i> 
        <span className="notification-num">3</span>
      </a>
      <a href="#" className="profile">
        <img src="" className="profile-img" /> 
        <span className="profile-name">Abigail <i className="fa fa-chevron-down"></i></span>
      </a>
    </div>
  )
}

export default SearchBar

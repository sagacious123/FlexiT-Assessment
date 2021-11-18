import React from 'react'
import Notification from './Notification'
import '../index.css';

const SearchBar = ({ toggle, setToggle }) => {

  const toggleNav = () => {
    setToggle(!toggle);
  }

  return (
    <div className="search-bar">
      <div className="toggler" onClick={toggleNav} > <i className={toggle ? "left fa fa-bars" : "fa fa-bars"}></i> </div>
      <form className="search-form">
        <i className="fa fa-search"></i>
        <input type="text" placeHolder="Find Something..." id="img-search" className="search-input" />
        <input type="submit" value="Search" id="img-search-btn" className="search-btn" />
      </form>
      <a href="#" className="notification"> 
        <div>
          <i className="fa fa-bell"></i> 
          <span className="notification-num">3</span>
        </div>
        <div className="notification-list">
          <Notification 
            h5={"Michael liked you!"} 
            p={"About 20 minutes ago"} 
            icon={"fa-heart"} 
            col={"grey"}
          />
          <Notification 
            h5={"Jack liked you!"} 
            p={"About 40 minutes ago"} 
            icon={"fa-heart"}
            col={"red"}
          />
          <Notification 
            h5={"Martin commented on your photo"} 
            p={"About 56 minutes ago"} 
            icon={"fa-comment-alt"} 
            col={"blue"}
          />
        </div>
      </a>
      <a href="#" className="profile">
        <span className="profile-img-container">
          <img src="/user.jpg" className="profile-img" /> 
        </span>
        <span className="profile-name">Abigail <i className="fa fa-chevron-down"></i></span>
      </a>
    </div>
  )
}

export default SearchBar

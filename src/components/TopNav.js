import React from 'react'
import '../index.css';

const TopNav = () => {
  return (
    <div className="top-nav">
      <ul>
          <li className="top-nav-item">
            <a href="#">
              <span>World</span>
              <i className="fa fa-chevron-down"></i>
            </a>
          </li>
          <li className="top-nav-item">
            <a href="#">
              <span>Following</span>
              <i className="fa fa-chevron-down"></i>
            </a>
          </li>
          <li className="top-nav-item">
            <a href="#">
              <span>Popular</span>
              <i className="fa fa-chevron-down"></i>
            </a>
          </li>
          <li className="top-nav-item">
            <a href="#">
              <span>Post</span>
              <i className="fa fa-chevron-down"></i>
            </a>
          </li>
          <li className="top-nav-item">
            <a href="#">
              <span>Gender</span>
              <i className="fa fa-chevron-down"></i>
            </a>
          </li>
          <li className="top-nav-item">
            <a href="#">
              <span>Location</span>
              <i className="fa fa-chevron-down"></i>
            </a>
          </li>
          <li className="top-nav-item">
            <a href="#">
              <span>Profession</span>
              <i className="fa fa-chevron-down"></i>
            </a>
          </li>
          <li className="top-nav-item">
            <a href="#">
              <span>Fashion</span>
              <i className="fa fa-chevron-down"></i>
            </a>
          </li>
          <li className="top-nav-item">
            <a href="#">
              <span>Trends</span>
              <i className="fa fa-chevron-down"></i>
            </a>
          </li>
        </ul>
    </div>
  )
}

export default TopNav

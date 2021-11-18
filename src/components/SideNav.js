import React from 'react'
import '../index.css';

const SideNav = () => {
  return (
    <nav className="side-nav">
      <div className="nav-container">
        <div className="logo-container">
          <a href="#"><i className="fa fa-cube"></i> bluecube</a>
        </div>
        <div className="side-nav-group">
          <ul className="side-nav-list">
            <li className="side-nav-item">
              <a href="#" className="active">
                <i className="fa fa-home"></i>
                <span>Home</span>
              </a>
            </li>
            <li className="side-nav-item">
              <a href="#">
                <i className="fa fa-sticky-note"></i>
                <span>Message</span>
              </a>
            </li>
          </ul>
          <h3>SHARE</h3>
          <ul>
            <li className="side-nav-item">
              <a href="#">
                <i className="fa fa-sticky-note"></i>
                <span>Ranking</span>
              </a>
            </li>
            <li className="side-nav-item">
              <a href="#">
                <i className="fa fa-sticky-note"></i>
                <span>Challenge</span>
              </a>
            </li>
            <li className="side-nav-item">
              <a href="#">
                <i className="fa fa-sticky-note"></i>
                <span>Party</span>
              </a>
            </li>
            <li className="side-nav-item">
              <a href="#">
                <i className="fa fa-sticky-note"></i>
                <span>Connect</span>
              </a>
            </li>
            <li className="side-nav-item">
              <a href="#">
                <i className="fa fa-sticky-note"></i>
                <span>Parade</span>
              </a>
            </li>
            <li className="side-nav-item">
              <a href="#">
                <i className="fa fa-sticky-note"></i>
                <span>Group</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default SideNav

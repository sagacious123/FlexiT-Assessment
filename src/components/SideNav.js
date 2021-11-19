import React from 'react'
import '../index.css';

const SideNav = ({ toggle, setToggle }) => {
  const toggleNavFalse =() => {
    if(toggle) {
      setToggle(false)
    }
  }

  return (
    <nav className={toggle ? "side-nav nav-show" : "side-nav"}>
      <div className="nav-container">
        <div className="logo-container">
          <a href="#"><i className="fa fa-cube"></i> bluecube</a>
        </div>
        <div className={toggle ? "left toggler" : "toggler"} onClick={toggleNavFalse} > <i className={toggle ? "fa fa-times" : "fa fa-bars"}></i> </div>
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
                <i className="fa fa-chart-bar"></i>
                <span>Ranking</span>
              </a>
            </li>
            <li className="side-nav-item">
              <a href="#">
                <i className="fa fa-trophy"></i>
                <span>Challenge</span>
              </a>
            </li>
            <li className="side-nav-item">
              <a href="#">
                <i className="fa fa-glass-cheers"></i>
                <span>Party</span>
              </a>
            </li>
            <li className="side-nav-item">
              <a href="#">
                <i className="fa fa-link"></i>
                <span>Connect</span>
              </a>
            </li>
            <li className="side-nav-item">
              <a href="#">
                <i className="fa fa-male"></i>
                <span>Parade</span>
              </a>
            </li>
            <li className="side-nav-item">
              <a href="#">
                <i className="fa fa-users"></i>
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

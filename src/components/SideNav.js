import React from 'react'
im

const SideNav = () => {
  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="logo-container">
          <a href="#"><i className="fa fa-cube"></i> bluecube</a>
        </div>
        <ul >
          <li>
            <a href="#">
              <i className="fas fa-home"></i>
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-sticky-note"></i>
              <span>Message</span>
            </a>
          </li>
        </ul>
        <h3>Share</h3>
        <ul>
          <li>
            <a href="#">
              <i className="fa fa-sticky-note"></i>
              <span>Ranking</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-sticky-note"></i>
              <span>Challenge</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-sticky-note"></i>
              <span>Party</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-sticky-note"></i>
              <span>Connect</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-sticky-note"></i>
              <span>Parade</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-sticky-note"></i>
              <span>Group</span>
            </a>
          </li>
        </ul>

      </div>
    </nav>
  )
}

export default SideNav

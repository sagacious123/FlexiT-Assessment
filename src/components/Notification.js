import React from 'react'

const Notification = ({ h5, p, icon, col }) => {
  return (
    <a href="#" className="notification-item">
      <img src="/user.jpg" className="notification-img" />
      <div className="notification-info">
        <h5>{`${h5}`}</h5>
        <p>{`${p}`}</p>
      </div>
      <i className={`fa ${icon} ${col}`}></i>
    </a>
  )
}

export default Notification

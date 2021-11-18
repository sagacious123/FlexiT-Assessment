import React from 'react'

const Notification = () => {
  return (
    <a href="#" className="notification-item">
      <img src="/user.jpg" className="notification-img" />
      <div className="notification-info">
        <h5>Michael liked you!</h5>
        <p>About 20 minutes ago</p>
      </div>
      <i className="fa fa-heart"></i>
    </a>
  )
}

export default Notification

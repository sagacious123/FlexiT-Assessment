import React from 'react'


const Image = () => {
  return (
    <a href="#" className="user">
        <div className="progress-bar">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <img src="/user.jpg" className="user-img" />
        <div className="user-info">
          <h3 className="user-name"> <span>William</span>, <span>28</span> </h3>
          <p> <i className="fa fa-home"></i> <span>New York</span> </p>
        </div>
        <div className="user-info-hover">
          <h3 className="user-name"> <span>William</span>, <span>28</span> </h3>
          <p> <i className="fa fa-location"></i> <span>New York</span> </p>
          <div className="btn-group">
            <button className="like"><i className="fa fa-heart"></i></button>
            <button className="dislike"><i className="fa fa-thumbs-down"></i></button>
          </div>
        </div>
      </a>
  )
}

export default Image

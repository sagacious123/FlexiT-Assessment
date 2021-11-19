import React from 'react'


const Image = ({ newImage, userName, location }) => {
  return (
    <a href="#" className="user">
        <div className="progress-bar">
          <span className="active"></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <img src={newImage} className="user-img" alt="user-img" />
        <div className="user-info">
          <h3 className="user-name"> <span>{userName}</span>, <span>28</span> </h3>
          {location !== null && <p> <i className="fa fa-map-marker"></i> <span>{location}</span> </p>}
        </div>
        <div className="user-info-hover">
          <h3 className="user-name"> <span>{userName}</span>, <span>28</span> </h3>
          {location !== null && <p> <i className="fa fa-map-marker"></i> <span>{location}</span> </p>}
          <div className="btn-group">
            <button className="like"><i className="fa fa-heart"></i></button>
            <button className="dislike"><i className="fa fa-thumbs-down"></i></button>
          </div>
        </div>
      </a>
  )
}

export default Image

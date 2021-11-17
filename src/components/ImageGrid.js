import React from 'react'

const ImageGrid = () => {
  return (
    <section className="img-section">
      <a href="#" className="user">
        <div className="progress-bar">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <img src="" className="user-img" />
        <div className="user-info">
          <h3 className="user-name"> <span>William</span>, <span>28</span> </h3>
          <p> <i className="fa fa-location"></i> <span>New York</span> </p>
        </div>
        <div>
          <h3 className="user-name"> <span>William</span>, <span>28</span> </h3>
          <p> <i className="fa fa-location"></i> <span>New York</span> </p>
          <div>
            <button><i className="fa fa-heart"></i></button>
            <button><i className="fa fa-heart"></i></button>
          </div>
        </div>
      </a>

    </section>
  )
}

export default ImageGrid

import React, { useState } from 'react'
import Image from './Image'
import '../index.css';

const ImageGrid = ({ newImages, loading }) => {
  // const [loading, setLoading] = useState(false);
console.log(loading)

  return (
    <section className="img-section">
    {
      newImages == 0 ? 
      <div className="loader">
        <i class="fas fa-stroopwafel fa-spin"></i>
      </div> : 
      newImages.map(newImage => 
      <Image 
        newImage={newImage.urls.regular} 
        userName={newImage.user.first_name} 
        location={newImage.user.location}
        key={newImage.id} 
      />)
    } 
    </section>
  )
}

export default ImageGrid

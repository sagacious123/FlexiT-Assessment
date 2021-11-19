import React from 'react'
import Image from './Image'
import '../index.css';

const ImageGrid = ({ newImages }) => {
  return (
    <section className="img-section">
    {newImages.map(newImage => 
      // newImage.urls.small !== undefined &&
      <Image 
        newImage={newImage.urls.small} 
        userName={newImage.user.first_name} 
        location={newImage.user.location}
        key={newImage.id} 
      />)}
      
      // <Image />
      // <Image />
      // <Image />
      // <Image />
      // <Image />
      // <Image />
      // <Image />
      // <Image />
      // <Image />
    </section>
  )
}

export default ImageGrid

import React, {memo,useState } from 'react';
import type {ImageData} from '../types/index.ts'


interface ImageGalleryProps {
  image: ImageData;
  onClick:(image:ImageData)=>void
}

const ImageItem: React.FC<ImageGalleryProps> = memo(({image,onClick}) => {

  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  }
  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true); // To stop showing loader
  }


  const handleClick = () => {
    onClick(image);
  }

  return (
    <div className="image-item" onClick={handleClick}>
      <div className="image-wrapper">
        {!imageLoaded && !imageError && <div className="image-placeholder">Loading...</div>}
        {imageError ? (
          <div className="image-error">Failed to load</div>
        ) : (
          <img
            src={image.thumbnailUrl}
            alt={image.title}
            onLoad={handleImageLoad}
            onError={handleImageError}
            style={{ display: imageLoaded ? 'block' : 'none' }}
          />
        )}
      </div>
      <img src={image.thumbnailUrl} alt={image.title} />
    </div>

 
  );
});

export default ImageItem;
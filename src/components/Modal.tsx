// import React from 'react';
// import { ImageData } from '../types';
// import './Modal.css';

// interface ModalProps {
//   image: ImageData;
//   onClose: () => void;
// }

// const Modal: React.FC<ModalProps> = ({ image, onClose }) => {
//   return (
//     <div className="modal-overlay" onClick={onClose}>
//       <div className="modal-content" onClick={e => e.stopPropagation()}>
//         <img src={image.url} alt={image.title} className="modal-img" />
//         <div className="modal-title">{image.title}</div>
//         <button className="modal-close" onClick={onClose}>Close</button>
//       </div>
//     </div>
//   );
// };

// export default Modal;

import React, { memo, useState, useEffect, useCallback } from 'react';
import type { ImageData } from '../types/index.ts';
import './Modal.css';

interface ModalProps {
  image: ImageData | null;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = memo(({ image, onClose }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Reset states when image changes
  useEffect(() => {
    setImageLoaded(false);
    setImageError(false);
  }, [image]);

  // Handle ESC key
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    if (image) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [image, handleKeyDown]);

  if (!image) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  return (
    <div className="modal-overlay" onClick={handleBackdropClick}>
      <button className="modal-close" onClick={onClose}>
        ✕
      </button>

      <div className="modal-content">
        <div className="modal-image-wrapper">
          {!imageLoaded && (
            <div className="modal-loading">
              <div className="modal-spinner"></div>
              <p>Loading full image...</p>
            </div>
          )}

          {imageError ? (
            <div className="modal-error">
              <span className="modal-error-icon">⚠️</span>
              <p>Failed to load image</p>
            </div>
          ) : (
            <img
              src={image.url}
              alt={image.title}
              className={`modal-image ${imageLoaded ? 'loaded' : ''}`}
              onLoad={handleImageLoad}
              onError={handleImageError}
            />
          )}
        </div>

        <div className="modal-info">
          <h2 className="modal-title">{image.title}</h2>
          <p className="modal-id">Image ID: {image.id}</p>
        </div>
      </div>
    </div>
  );
});

Modal.displayName = 'Modal';

export default Modal;
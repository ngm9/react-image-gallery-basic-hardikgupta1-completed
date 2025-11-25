import React from 'react';
import { ImageData } from '../types';
import './GalleryGrid.css';

interface GalleryGridProps {
  images: ImageData[];
  onImageClick: (idx: number) => void;
}

const GalleryGrid: React.FC<GalleryGridProps> = React.memo(({ images, onImageClick }) => {
  return (
    <div className="gallery-grid">
      {images.map((img, idx) => (
        <div key={img.id} className="gallery-item" onClick={() => onImageClick(idx)}>
          <img src={img.thumbnailUrl} alt={img.title} className="gallery-img" />
        </div>
      ))}
    </div>
  );
});

export default GalleryGrid;

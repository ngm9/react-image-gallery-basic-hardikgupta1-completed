import React,{memo,useState,useCallback} from 'react';
import { ImageData } from '../types';
import ImageItem from './ImageGallery';
import Modal from './Modal';
import './GalleryGrid.css';

interface GalleryGridProps {
  images: ImageData[];
  
}

const GalleryGrid: React.FC<GalleryGridProps> = React.memo(({ images }) => {
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);

  const handleImageClick = useCallback((image: ImageData) => {
    setSelectedImage(image);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedImage(null);
  }, []);

  return (
    <>
    <div className="gallery-grid">
      {images.map((img) => (
      <ImageItem key={img.id} image={img} onClick={handleImageClick} />
      ))}
      {selectedImage && (
        <Modal image={selectedImage} onClose={handleCloseModal} />
      )}
    </div>
    </>
  );
});

export default GalleryGrid;

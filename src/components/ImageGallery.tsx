import React, { useEffect } from 'react';
import useGalleryImages from '../hooks/useGalleryImages';
import GalleryGrid from './GalleryGrid';
import Modal from './Modal';

const API_URL = '/api/images'; // Not a real endpoint; see useGalleryImages for mock

const ImageGallery: React.FC = () => {
  const {
    images,
    loading,
    error,
    selectedIndex,
    setSelectedIndex,
    fetchImages
  } = useGalleryImages();

  useEffect(() => {
    fetchImages(API_URL);
  }, [fetchImages]);

  return (
    <div>
      {loading && <div>Loading images...</div>}
      {error && <div style={{ color: 'red' }}>Failed to load images: {error}</div>}
      {!loading && !error && images && (
        <GalleryGrid images={images} onImageClick={setSelectedIndex} />
      )}
      {selectedIndex !== null && images && (
        <Modal
          image={images[selectedIndex]}
          onClose={() => setSelectedIndex(null)}
        />
      )}
    </div>
  );
};

export default ImageGallery;

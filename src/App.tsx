import React from 'react';
import { MOCK_IMAGES } from './hooks/useGalleryImages';
import GalleryGrid from './components/GalleryGrid.tsx';
import './App.css';

function App() {
  const { images, loading, error } = MOCK_IMAGES();

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">📸 Image Gallery</h1>
        <p className="app-subtitle">
          Browse and explore our beautiful collection
        </p>
      </header>

      <main className="app-main">
        {loading && (
          <div className="loading-container">
            <div className="spinner"></div>
            <p className="loading-text">Loading images...</p>
          </div>
        )}
        
        {error && (
          <div className="error-container">
            <div className="error-icon">⚠️</div>
            <h2 className="error-title">Error Loading Images</h2>
            <p className="error-message">{error}</p>
          </div>
        )}
        
        {!loading && !error && (
          <>
            <div className="gallery-info">
              <p className="image-count">
                {images.length} {images.length === 1 ? 'image' : 'images'} available
              </p>
            </div>
            <GalleryGrid images={images} />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
import { useCallback, useState } from 'react';
import { ImageData } from '../types';

// Simulated remote data for demonstration purposes
const MOCK_IMAGES: ImageData[] = [
  {
    id: '1',
    title: 'Mountain Lake',
    url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1000',
    thumbnailUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300'
  },
  {
    id: '2',
    title: 'Desert Dunes',
    url: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=1000',
    thumbnailUrl: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=300'
  },
  {
    id: '3',
    title: 'City Night',
    url: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=900',
    thumbnailUrl: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=200'
  },
  {
    id: '4',
    title: 'Forest Walk',
    url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1000',
    thumbnailUrl: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=300'
  },
  {
    id: '5',
    title: 'Clear Ocean',
    url: 'https://images.unsplash.com/photo-1465101178521-c1a73b1a47d9?w=800',
    thumbnailUrl: 'https://images.unsplash.com/photo-1465101178521-c1a73b1a47d9?w=250'
  }
];

// Simulate latency, error handling
function simulateFetchImages(shouldFail = false): Promise<ImageData[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject('Network error: unable to load images');
      } else {
        resolve(MOCK_IMAGES);
      }
    }, 800);
  });
}

// Custom hook for gallery image data & modal state
function useGalleryImages() {
  const [images, setImages] = useState<ImageData[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const fetchImages = useCallback(async (_endpoint: string) => {
    setLoading(true);
    setError(null);
    try {
      // Change next line to true to simulate error
      const imgs = await simulateFetchImages(false);
      setImages(imgs);
    } catch (err: any) {
      setError(typeof err === 'string' ? err : 'Failed to fetch images');
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    images,
    loading,
    error,
    selectedIndex,
    setSelectedIndex,
    fetchImages
  };
}

export default useGalleryImages;

import React from 'react';
import { ImageData } from '../types';
import './Modal.css';

interface ModalProps {
  image: ImageData;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ image, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <img src={image.url} alt={image.title} className="modal-img" />
        <div className="modal-title">{image.title}</div>
        <button className="modal-close" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;

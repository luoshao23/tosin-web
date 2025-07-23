
import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const ProductModal = ({ isOpen, onRequestClose, product }) => {
  if (!product) {
    return null;
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Product Details"
      className="product-modal"
      overlayClassName="product-modal-overlay"
    >
      <h2>{product.name}</h2>
      <img src={process.env.PUBLIC_URL + product.image} alt={product.name} />
      <div dangerouslySetInnerHTML={{ __html: product.description }} />
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default ProductModal;

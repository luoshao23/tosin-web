
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ProductModal from './ProductModal';

const Products = () => {
  const { t, i18n } = useTranslation();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const products = [
      {
        id: 1,
        image: '/images/p1.jpg',
      },
      {
        id: 2,
        image: '/images/p1.jpg',
      },
      {
        id: 3,
        image: '/images/p1.jpg',
      },
      {
        id: 4,
        image: '/images/p1.jpg',
      },
      {
        id: 5,
        image: '/images/p1.jpg',
      },
      {
        id: 6,
        image: '/images/p1.jpg',
      },
      {
        id: 7,
        image: '/images/p1.jpg',
      },
      {
        id: 8,
        image: '/images/p1.jpg',
      },
      {
        id: 9,
        image: '/images/p1.jpg',
      },
    ];

    const translatedProducts = products.map(p => ({
      ...p,
      name: t(`productName_${p.id}`),
      description: t(`productDescription_${p.id}`),
    }));

    setProductList(translatedProducts);
  }, [i18n.language, t]);

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProduct(null);
  };

  return (
    <section id="products">
      <h2>{t('productsTitle')}</h2>
      <div className="product-list">
        {productList.map((product, index) => (
          <div key={index} className="product-item" onClick={() => openModal(product)}>
            <img src={process.env.PUBLIC_URL + product.image} alt={product.name} />
            <p>{product.name}</p>
          </div>
        ))}
      </div>
      <ProductModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        product={selectedProduct}
      />
    </section>
  );
};

export default Products;

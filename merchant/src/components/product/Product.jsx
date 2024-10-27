import React from 'react';

const Product = ({ productImage, productName, price }) => {
  return (
    <div className="product-card">
      <img src={productImage} alt={productName} />
      <h3>{productName}</h3>
      <p>${price}</p>
    </div>
  );
};

export default Product;

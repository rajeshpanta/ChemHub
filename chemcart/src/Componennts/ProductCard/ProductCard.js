// src/components/ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image"/>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <Link to={`/product/${product.name}`} className="view-product-btn">View Product</Link>  
      </div>
    </div>
  );
}

export default ProductCard;

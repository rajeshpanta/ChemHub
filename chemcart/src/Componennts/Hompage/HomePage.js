// src/components/HomePage.js
import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './HomePage.css';
import backgroundImage from '../../images/chemi.jpeg';  // Adjust the path based on your directory structure
import ProductCard from '../ProductCard/ProductCard';

const HomePage = () => {
  const products = [
    { image: '/chemcart/src/images/chemi.jpeg', name: 'Product 1', description: 'Description' },
    { image: '/chemcart/src/images/chemi.jpeg', name: 'Product 2', description: 'Description' },
    { image: '/chemcart/src/images/chemi.jpeg', name: 'Product 3', description: 'Description' },
    { image: '/chemcart/src/images/chemi.jpeg', name: 'Product 4', description: 'Description' },
    { image: '/chemcart/src/images/chemi.jpeg', name: 'Product 5', description: 'Description' },
    { image: '/chemcart/src/images/chemi.jpeg', name: 'Product 6', description: 'Description' },
    { image: '/chemcart/src/images/chemi.jpeg', name: 'Product 7', description: 'Description' },
    // More products can be added here
  ];

  return (
    <div>
      <Header />
      <div className="background-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <h1>Source, Taste, and Innovate</h1>
      </div>
      <main>
        <div className="intro-text">
          <h2>Discover 200 products from 20 storefronts</h2>
        </div>
        <div className="product-section">
          {products.slice(0, 6).map(product => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </main>
   
    </div>
  );
}

export default HomePage;
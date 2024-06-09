// src/components/HomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './HomePage.css';
import backgroundImage from '../../images/chemi.jpeg';  // Adjust the path based on your directory structure
import ProductCard from '../ProductCard/ProductCard';

const HomePage = () => {
  const navigate = useNavigate();
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

  const companies = [
    { logo: '/chemcart/src/images/company1.png', name: 'Company 1', info: 'Industry Leader in Biotech' },
    { logo: '/chemcart/src/images/company2.png', name: 'Company 2', info: 'Top Supplier of Chemicals' },
    { logo: '/chemcart/src/images/company1.png', name: 'Company 1', info: 'Industry Leader in Biotech' },
    { logo: '/chemcart/src/images/company2.png', name: 'Company 2', info: 'Top Supplier of Chemicals' },
    { logo: '/chemcart/src/images/company2.png', name: 'Company 2', info: 'Top Supplier of Chemicals' },
    { logo: '/chemcart/src/images/company1.png', name: 'Company 1', info: 'Industry Leader in Biotech' },
    
    // Add more companies as needed...
  ];
  // Function to handle company card click
const handleCompanyClick = (company) => {
  navigate('/company-info', { state: { company } }); // Navigate to CompanyInfo with company details
  };

  return (
    <div>
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
        <div className="intro-text">
        <h2>Trusted by Companies Like</h2>
        </div>
        <div className="company-section">
{companies.map(company => (
<div key={company.name} className="company-card" onClick={() => handleCompanyClick(company)}>
<img src={company.logo} alt={company.name} className="company-image"/>
<div className="company-info">
<h3>{company.name}</h3>
<p>{company.info}</p>
</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default HomePage;
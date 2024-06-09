import React from 'react';
import './CompanyInfo.css'; // Ensure this CSS file is correctly linked and loaded
import ProductCard from '../ProductCard/ProductCard';

const CompanyInfo = () => {
    const products = [
        { image: '/chemcart/src/images/chemi.jpeg', name: 'Product 1', description: 'Description' },
        { image: '/chemcart/src/images/chemi.jpeg', name: 'Product 2', description: 'Description' },
        { image: '/chemcart/src/images/chemi.jpeg', name: 'Product 3', description: 'Description' },
        { image: '/chemcart/src/images/chemi.jpeg', name: 'Product 6', description: 'Description' }
    ];

    return (
        <div className="company-info-container">
            <div className="left-section">
                <div className="profile-card">
                    <img src="/path/to/companyLogo.png" alt="Company Logo" className="company-logo"/>
                    <h1>ChemTech Solutions</h1>
                    <div className="verified-info">
                        <p> Established 1999</p>
                        <p> ISO 9001 Certified</p>
                        <p> Over 10,000 Clients Worldwide</p>
                        <p>Documents</p>
                        <p>Products</p>
                    </div>
                </div>
                <div className="quick-actions-card">
                    <h3>QUICK ACTIONS</h3>
                    <button>Request Sample</button>
                    <button>Request Document</button>
                    <button>Ask an Expert</button>
                    
                </div>
            </div>
            <div className="right-section">
                <div className="about-company">
                    <h2>Wise Technical Marketing</h2>
                    <p>Wise Technical Marketing, Inc. was established in April, 1996, to provide specialized technical sales and marketing services to manufacturers of raw materials for the surface coatings and allied industries in the Midwest.  Over the last several years the company has diversified into the direct importation of prime pigments from all parts of the world, and the development and manufacture of a wide variety of formulated products, including specialized pigment dispersions, vehicle systems and additives for many industries.
                         take advantage of our team of expert chemists,and we’ll ensure your projects are handled perfectly.
                         <br /><br></br><br /><br></br><br /><br></br><br /><br></br><br /><br></br><br /><br></br><br /><br></br>
                        
                         <button> Download Documents</button>
                         </p>
                         
                </div>
                <div className="intro-text">
          <h2>Products from our Company</h2>
        </div>
                <div className="products-container">
                    {products.map(product => (
                        <ProductCard key={product.name} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CompanyInfo;

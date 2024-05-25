// src/components/ProductPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import './ProductPage.css';

const ProductPage = () => {
    const { productName } = useParams();  // Retrieve the product name from the URL

    const productDetails = {
        name: productName,
        description: "Details about the product. This should be fetched based on the product name.",
        logo: "/path/to/companyLogo.png"  // Replace with dynamic path if needed
    };

    return (
        <div>
            <Header />
            <main className="product-main">
                <div className="sidebar">
                    <img src={productDetails.logo} alt="Company Logo" className="company-logo"/>
                    <button>COMP INFO</button>
                    <button>PROD DATA</button>
                    <button>FORMULA</button>
                    <button>DOCUMENT</button>
                </div>
                <div className="product-details">
                    <h1>{productDetails.name}</h1>
                    <p>{productDetails.description}</p>
                    {/* <div className="related-products">
                        <h2>Other products from same company or similar products</h2>
                        Placeholders for related products
                    </div> */}
                </div>
                <div className="order-details">
                    <p>Order details and info over here</p>
                </div>
            </main>
            
        </div>
    );
};

export default ProductPage;
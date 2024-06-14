import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './AllProductsPage.css'; // Make sure to create and link this CSS file
import Footer from '../footer/Footer';

const AllProductsPage = () => {
    const products = [
        { id: 1, name: "Product 1", description: "Description for Product 1", image: "/path/to/image1.jpg" },
        { id: 2, name: "Product 2", description: "Description for Product 2", image: "/path/to/image2.jpg" },
        { id: 3, name: "Product 3", description: "Description for Product 3", image: "/path/to/image3.jpg" },
        { id: 1, name: "Product 1", description: "Description for Product 1", image: "/path/to/image1.jpg" },
        { id: 2, name: "Product 2", description: "Description for Product 2", image: "/path/to/image2.jpg" },
        { id: 3, name: "Product 3", description: "Description for Product 3", image: "/path/to/image3.jpg" },
        { id: 1, name: "Product 1", description: "Description for Product 1", image: "/path/to/image1.jpg" },
        { id: 2, name: "Product 2", description: "Description for Product 2", image: "/path/to/image2.jpg" },
        { id: 3, name: "Product 3", description: "Description for Product 3", image: "/path/to/image3.jpg" }, { id: 1, name: "Product 1", description: "Description for Product 1", image: "/path/to/image1.jpg" },
        { id: 2, name: "Product 2", description: "Description for Product 2", image: "/path/to/image2.jpg" },
        { id: 3, name: "Product 3", description: "Description for Product 3", image: "/path/to/image3.jpg" },
        { id: 1, name: "Product 1", description: "Description for Product 1", image: "/path/to/image1.jpg" },
        { id: 2, name: "Product 2", description: "Description for Product 2", image: "/path/to/image2.jpg" },
       
        { id: 3, name: "Product 3", description: "Description for Product 3", image: "/path/to/image3.jpg" },
        // Add more products as needed
    ];

    return (
        <div className="all-products-container">
      
            <div className="products-grid">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <Footer/>
        </div>
    
    );
}

export default AllProductsPage;

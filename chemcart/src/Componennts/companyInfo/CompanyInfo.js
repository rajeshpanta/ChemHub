import React from "react";
import "./CompanyInfo.css"; // Ensure this CSS file is correctly linked and loaded
import ProductCard from "../ProductCard/ProductCard";
import LeftSidebar from "../LeftSidebar/LeftSidebar";
import Footer from "../footer/Footer";

const CompanyInfo = () => {
  const products = [
    {
      image: "/chemcart/src/images/chemi.jpeg",
      name: "Product 1",
      description: "Description",
    },
    {
      image: "/chemcart/src/images/chemi.jpeg",
      name: "Product 2",
      description: "Description",
    },
    {
      image: "/chemcart/src/images/chemi.jpeg",
      name: "Product 3",
      description: "Description",
    },
    {
      image: "/chemcart/src/images/chemi.jpeg",
      name: "Product 6",
      description: "Description",
    },
    {
      image: "/chemcart/src/images/chemi.jpeg",
      name: "Product 6",
      description: "Description",
    },
  ];

  return (
    <>
      <div className="leftbar">
        <LeftSidebar />
      </div>
      <main className="main-content">
        <div className="about-company">
          <h2>Wise Technical Marketing</h2>

          <p>
            Wise Technical Marketing, Inc. was established in April, 1996, to
            provide specialized technical sales and marketing services to
            manufacturers of raw materials for the surface coatings and allied
            industries in the Midwest. Over the last several years the company
            has diversified into the direct importation of prime pigments from
            all parts of the world, and the development and manufacture of a
            wide variety of formulated products, including specialized pigment
            dispersions, vehicle systems and additives for many industries. take
            advantage of our team of expert chemists,and we’ll ensure your
            projects are handled perfectly.
          </p>
          <button className="buttons"> Download Documents</button>
        </div>
        <div className="product-text">
          <h3>Products from our Company</h3>
        </div>
        <div className="products-container">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
        <div className="product-text">
          <h3>Most Viewed Products from our Company</h3>
        </div>
        <div className="products-container">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
        <Footer />
      </main>
    </>
  );
};

export default CompanyInfo;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Componennts/Login";
import HomePage from "./Componennts/Hompage/HomePage";
import Footer from "./Componennts/footer/Footer";
import "./App.css";
import ProductPage from "./Componennts/ProductPage/ProductPage";
import CompanyInfo from "./Componennts/companyInfo/CompanyInfo";
import Header from "./Componennts/header/Header";
import SignupPage from "./Componennts/SignUP/SignupPage";
import CartPage from "./Componennts/Cart/CartPage";
import AllProductsPage from "./Componennts/AllProducts/AllProductsPage";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:productName" element={<ProductPage />} />
          <Route path="/company-info" element={<CompanyInfo />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/cart" element={<CartPage />} /> 
          <Route path="/all-products" element={<AllProductsPage />} />
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

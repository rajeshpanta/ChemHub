import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Componennts/Login';
import HomePage from './Componennts/Hompage/HomePage';
import Footer from './Componennts/footer/Footer';
import './App.css';
import ProductPage from './Componennts/ProductPage/ProductPage';

function App() {
  return (
    <Router>
      <div className="app-container">  
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:productName" element={<ProductPage />} />  
          {/* Add other routes here */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
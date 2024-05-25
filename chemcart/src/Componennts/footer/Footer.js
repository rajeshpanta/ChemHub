import React from 'react';
import './Footer.css';  // Link to your CSS file for styling

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-column">
        <h4>For Customers</h4>
        <ul>
          <li><a href="#">Overview</a></li>
          <li><a href="#">Customer Features</a></li>
          <li><a href="#">Responsibilities</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>For Suppliers</h4>
        <ul>
          {/* Add links if applicable */}
        </ul>
      </div>
      <div className="footer-column">
        <h4>Values</h4>
        <ul>
          {/* Add links if applicable */}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;

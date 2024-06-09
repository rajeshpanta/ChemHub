import React from 'react';
import './CompanyCard.css'; // Make sure to link the CSS file correctly

const CompanyCard = () => {
    return (
        <div className="company-card">
            <div className="company-image-container">
                <img src="/path/to/companyLogo.png" alt="Company Logo" className="company-logo"/>
            </div>
            <div className="company-content">
                <div className="company-details">
                    <h2 className="company-name">ChemTech Solutions</h2>
                    <p className="company-rating">4.97 ★ (254 Reviews)</p>
                    <p className="company-info">Years in Business: 25</p>
                    <button className="contact-button">Contact Company</button>
                </div>
                <div className="company-summary">
                    <h3>ChemTech is a Superhost</h3>
                    <p>Experienced, highly rated hosts who are committed to providing great stays for clients.</p>
                    <ul className="host-details">
                        <li>Response rate: 100%</li>
                        <li>Responds within an hour</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CompanyCard;

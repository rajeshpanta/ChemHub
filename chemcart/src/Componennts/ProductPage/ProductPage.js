import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductPage.css';

const ProductPage = () => {
    const { productName } = useParams();

    const productDetails = {
        name: "ViaTech™ TS1200 GRAN",
        description: "ViaTech™ TS1200 GRAN is a high purity, white to off-white granulated powder with a sweet taste. It is used in various applications such as beverages, fruit juices, jellies, jams, confectionery, dairy, frozen novelties, snacks, cereals, bakery, chewing gum, and tabletop sweeteners.",
        brand: "ViaTech (9 products)",
        functions: "Flavor Enhancer, Non Nutritive Sweetener, Sugar Substitute, Taste Modifier",
        ingredientOrigin: "Natural Origin, Plant Origin",
        labelingClaims: "Clean Label, Fat-free, Halal, Keto, Kosher, Natural, Naturally Derived, Non-GMO, Plant-Based, Sugar-free, Sustainable, Trans fat-free, Vegan, Vegetarian, Zero Calorie",
        calories: "0.0 - 0.0 Cal/100 g",
        certifications: "CFIA Amenable, FDA 21 CFR Regulations, FDA Compliant, GMP, Generally Recognized As Safe (GRAS), Halal, Hazard Analysis Critical Control Point (HACCP), JECFA (FAO/WHO), Kosher, Non-GMO Project Verified, The Food Allergen Labeling & Consumer Protection Act of 2004 (FALCPA)"
    };

    return (
        <div>
            <div className="left-section">
                <div className="profile-card">
                    <img src="/path/to/companyLogo.png" alt="Company Logo" className="company-logo"/>
                    <h1>ViaTech™ TS1200 GRAN</h1>
                    <div className="verified-info">
                        <p>ViaTech 9 products</p>
                        <p>Documents</p>
                        <p>Used by .....</p>
                    </div>
                    <div className="quick-actions-card">
                        <h3>QUICK ACTIONS</h3>
                        <button>Request Sample</button>
                        <button>Request Document</button>
                        <button>Ask an Expert</button>
                    </div>
                </div>
            </div>
            <main className="product-main">
                <div className="product-content">
                    <h1>{productDetails.name}</h1>
                    <p>{productDetails.description}</p>
                    <div className="product-meta">
                        <p><strong>Brand:</strong> {productDetails.brand}</p>
                        <p><strong>Functions:</strong> {productDetails.functions}</p>
                        <p><strong>Ingredient Origin:</strong> {productDetails.ingredientOrigin}</p>
                        <p><strong>Labeling Claims:</strong> {productDetails.labelingClaims}</p>
                        <p><strong>Calories (Energy):</strong> {productDetails.calories}</p>
                        <p><strong>Certifications & Compliance:</strong> {productDetails.certifications}</p>
                    </div>
                </div>
                <div className="order-form">
                    <h2>Get a Quote</h2>
                    <div className="form-group">
                        <label htmlFor="quantity">Order Quantity</label>
                        <input type="text" id="quantity" placeholder="Volume" />
                        <select>
                            <option>kg</option>
                            <option>lbs</option>
                        </select>
                    </div>
                    <button className="request-quote">Request a Quote</button>
                    <button className="request-sample">Request Sample</button>
                    <div className="additional-info">
                        <p><strong>Minimum Order Quantity:</strong> Quote Required</p>
                        <p><strong>Lead Time:</strong> Quote Required</p>
                        <p><strong>Incoterms:</strong> Quote Required</p>
                        <p><strong>Regional Availability:</strong> Quote Required</p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ProductPage;

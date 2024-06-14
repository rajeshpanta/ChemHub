import React, { useState } from 'react';
import './CartPage.css'; // Ensure this is correctly linked
import ProductCard from '../ProductCard/ProductCard'; // Import the ProductCard component

const CartPage = () => {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: "Product 1", price: 19.99, quantity: 2 },
        { id: 2, name: "Product 2", price: 49.99, quantity: 1 },
        { id: 2, name: "Product 2", price: 49.99, quantity: 1 },
        { id: 3, name: "Product 4", price: 29.99, quantity: 4 }
    ]);

    const similarProducts = [
        { id: 5, name: "Product 5", price: 39.99, image: "/path/to/image5.jpg" },
        { id: 6, name: "Product 6", price: 59.99, image: "/path/to/image6.jpg" },
        { id: 7, name: "Product 7", price: 29.99, image: "/path/to/image7.jpg" },
        { id: 8, name: "Product 8", price: 49.99, image: "/path/to/image8.jpg" },
        { id: 9, name: "Product 9", price: 19.99, image: "/path/to/image9.jpg" },
        { id: 10, name: "Product 10", price: 19.99, image: "/path/to/image10.jpg" }
    ];

    const handleRemove = id => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const updateQuantity = (id, delta) => {
        const newItems = cartItems.map(item => {
            if (item.id === id) {
                const newQuantity = item.quantity + delta;
                return { ...item, quantity: newQuantity > 0 ? newQuantity : 1 };
            }
            return item;
        });
        setCartItems(newItems);
    };

    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

    return (
        <div className="cart-container">
            <br></br><br></br>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    {cartItems.map(item => (
                        <div key={item.id} className="cart-item">
                            <p>{item.name} - ${item.price.toFixed(2)}</p>
                            <div className="quantity-control">
                                <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                            </div>
                            <button onClick={() => handleRemove(item.id)}>Remove</button>
                        </div>
                    ))}
                    <div className="checkout-area">
                        <p className="total">Total: ${total}</p>
                        <button className="checkout-button">Proceed to Checkout</button>
                    </div>
                </div>
            )}
            <h2>Customers who viewed this item also bought</h2>
            <div className="similar-products-container">
                {similarProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default CartPage;

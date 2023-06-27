import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Navbar from '../Navbar';
import { FaTrash } from 'react-icons/fa';
import AdsSection from '../ads';


function Cart({ cartItems }) {
  const [items, setItems] = useState(cartItems);

  const removeFromCart = (item) => {
    const updatedItems = items.filter((cartItem) => cartItem.name !== item.name);
    setItems(updatedItems);
  };
  

  return (
    <div className="Navbar">
    <Navbar />
    <div className="cart-container">
    <AdsSection />

      <h2 className="cart-title">Here is Your Cart of Happiness!</h2>
      {items.length === 0 ? (
        <p className="cart-empty-message">Your cart is empty.</p>
      ) : (
        <ul className="cart-items">
          {items.map((item, index) => (
            <li className="cart-item" key={index}>
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-image"
              />
              <span className="cart-item-name">{item.name}</span>
              <button
                className="cart-item-remove"
                onClick={() => removeFromCart(item)}
              >
                Remove<FaTrash />
              </button>
            </li>
          ))}
        </ul>
      )}
       <div className="payment-button-container">
          <Link to="/FormPay" className="payment-button">
            Proceed to Payment
          </Link>
        </div>
      <Link to="/catalog" className="cart-link">
        Go to Catalog
      </Link>
    </div>
    </div>
  );
}

export default Cart;

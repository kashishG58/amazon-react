import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Navbar from '../Navbar';

function Catalog({ addToCart }) {
  const products = [
    { 
      name:<Link to="/Headgear" target='_blank'> 'Redgear Cloak Wired RGB Wired Over Ear Gaming Headphones with Mic for PC'</Link>,
      image: 'https://m.media-amazon.com/images/I/61O0rXhhP6L._SX679_.jpg',
    },
    {
      name: 'Fire-Boltt Newly Launched Ninja Call Pro Max 2.01” Display Smart Watch, Bluetooth Calling, 120+ Sports Modes, Health Suite, Voice Assistance (Blue)',
      image: 'https://m.media-amazon.com/images/I/71KpoPUzJ2L._UX679_.jpg',
    },
    {
      name: 'Fire-Boltt Phoenix Pro 1.39" Bluetooth Calling Smartwatch, AI Voice Assistant, Metal Body with 120+ Sports Modes, SpO2, Heart Rate Monitoring (Black)', 
      image: 'https://m.media-amazon.com/images/I/61H6pGxb8BL._UX679_.jpg',
    },
    {
      name: 'hi there , i am typing this to check whether i can write a paragraph or not.',
      image: 'https://m.media-amazon.com/images/I/61YsJhkFLAL._UX679_.jpg',
    },
    // -----------------============-------------------
    { 
      name: 'Boult Audio Z20 TWS Earbuds with 40H Playtime, Zen™ ENC Clear Calling Mic, Made in India, 10mm Rich Bass Drivers, Type-C Fast Charge, IPX5, Touch Controls, Voice Assistant, BT 5.1 Ear Buds (Black)',
      image: 'https://m.media-amazon.com/images/I/61O0rXhhP6L._SX679_.jpg',
    },
    {
      name: 'OnePlus Nord Buds True Wireless in Ear Earbuds with Mic, 12.4mm Titanium Drivers, Playback:Up to 30hr case, 4-Mic Design + AI Noise Cancellation, IP55 Rating, Fast Charging (Black Slate)',
      image: 'https://m.media-amazon.com/images/I/61q-2yzbBtL._SX679_.jpg',
    },
    {
      name: 'OnePlus Nord Buds CE Bluetooth Truly Wireless in Ear Earbuds',
      image: 'https://m.media-amazon.com/images/I/61pntmUmF7L._SX679_.jpg',
    },
    {
      name: 'Samsung Galaxy Buds Live Bluetooth Truly Wireless in Ear Earbuds with Mic, Upto 21 Hours Playtime, Mystic Black',
      image: 'https://m.media-amazon.com/images/I/7169dl0fuxL._SX679_.jpg',
    },
    //-----------=================
    { 
      name: 'GRECIILOOKS Casual Shirt for Men| Shirts for Men| Mens Shirt| Fit Poplin Solid Shirts for Men| Button Down Shirts | Beach Wear',
      image: 'https://m.media-amazon.com/images/I/71MF88IlVEL._UY879_.jpg',
    },
    {
      name: 'GRECIILOOKS Casual Shirt for Men| Shirts for Men| Mens Shirt| Fit Poplin Solid Shirts for Men| Button Down Shirts | Beach Wear',
      image: 'https://m.media-amazon.com/images/I/71-fFe9athL._UY879_.jpg',
    },
    {
      name: 'Amazon Brand - House & Shields Men Casual Shirt',
      image: 'https://m.media-amazon.com/images/I/61X9WBQlceL._UX679_.jpg',
    },
    {
      name: 'Amazon Brand - Nora Nico Rain Coat for Men Waterproof Long Overcoat With Adjustable Hood Double Layer Bike Rain Jacket With Storage Bag For Men',
      image: 'https://m.media-amazon.com/images/I/71g-m5K1D1L._UL1500_.jpg',
    },
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="Navbar">
    <Navbar />
    <div className="catalog-container">
      
      <h1 className="catalog-title">Shop at your Favourite Prices</h1>
      <ul className="product-list">
        {products.map((product, index) => (
          <li className="product-item" key={index}>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <span className="product-name">{product.name}</span>
            <input type="checkbox" className="Expand"></input>

            <button
              className="add-to-cart-button"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
            
          </li>
        ))}
      </ul>
      <Link to="/cart" className="view-cart-link">
        View Cart
      </Link>
      
    </div>
    </div>
  );
}

export default Catalog;

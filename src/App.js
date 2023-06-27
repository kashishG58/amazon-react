import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Catalog from './components/catalog';
import Cart from './components/cart';
import './App.css';
import OnlineShoppingSite from './main_website';
import RedgearComponent from './Headgear'
import SignIn from './login-sign_in';

import PaymentForm from './FormPayment';
import SignUp from './CreateAccount';



function App() {
  const [cartItems, setCartItems] = React.useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  return (
    
    <Router>     
      <div className="app-container">
       
        <Routes>
        <Route
            path="/"
            element={<OnlineShoppingSite />}
          />
          <Route path="/catalog" element={<Catalog addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} />} />
          <Route path="/Headgear" element={<RedgearComponent />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/FormPay" element={<PaymentForm />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
        {/* <nav className="nav-bar">
          <Link to="/" className="nav-link">Catalog</Link>
          <Link to="/cart" className="nav-link">Cart ({cartItems.length})</Link>
        </nav> */}
      </div>
    </Router>
  );
}

export default App;

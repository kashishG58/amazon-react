import React from 'react';
import { useState } from 'react';
import './style2.css'
import Navbar from './Navbar';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Left for future use
    // To access the form data using the state values (name, email, phone, password)
    console.log('Form submitted');
  };

  return (
    <div>
     < Navbar />
    <div className="container">
      <form onSubmit={handleSubmit} className="sign-form">
        <h3 className="main_heading">Enter your details to Sign-up</h3>
        <hr />
        <h5>Contact Information</h5>
        <p>* marked fields are Mandatory</p>
        <p>
          <label>Name:*</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </p>

        <p>
          Email* <br />
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="example@abc.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </p>
        <p>
          Mobile<br />
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="99xxx-xxxxx"
            pattern="[0-9]{5}-[0-9]{5}"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </p>
        <p>
          Password: <input
            type="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>

        <input type="submit" value="sign-up" />
      </form>
      <p style={{ color: 'rgba(0, 0, 0, 0.8)', fontSize: 'small' }}>
        <a href="/login">Login instead?</a>
      </p>
    </div>
    </div>
  );
}

export default SignUp;

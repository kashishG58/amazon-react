import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

class PaymentForm extends React.Component {
  render() {
    return (
      <div>
        <div className="navbar" id="navbar-parent">
            <Navbar/></div><br />
        <div className="payment-form">
          <form action="" method="get">
            <h1 className="Heading">Proceed to payment</h1>
            <hr />
            <p>
              Pincode<sup>*</sup>
              <input
                type="number"
                name="pincode"
                id="pincode"
                required
                placeholder="e.g.-111000"
              />
            </p>
            <p>
              <label htmlFor="address">
                <sup>*</sup>Address:{' '}
              </label>
              <input
                type="text"
                name="address"
                id="address"
                required
                placeholder="Enter your address here"
              />
            </p>
            <hr />
            <p>Payment Information</p>
            <p>
              Card Type<sup>*</sup>
              <select name="Card" id="card">
                <option value="">--Select Card Type--</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Credit card">Credit card</option>
              </select>
            </p>
            <p>
              Card Number<sup>*</sup>
              <input
                type="number"
                name="Card_number"
                id="Card_number"
                required
                placeholder="e.g-1111 2222 3333 4444"
              />
            </p>
            <p>
              CVV*
              <input
                type="password"
                name="CVV"
                id="CVV"
                required
                placeholder="e.g-123"
              />
            </p>
            <p>
              <input type="submit" value="Pay Now" id="submit" />
            </p>
          </form>
          <Link to="/">
          Click here to cancel Payment and Go to Main page</Link>
        </div>
      </div>
    );
  }
}

export default PaymentForm;

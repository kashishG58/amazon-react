import React, { useState } from 'react';
import Navbar from './Navbar';
import OnlineShoppingSite from './main_website';
import { Link } from 'react-router-dom';


function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [redirectToIndex, setRedirectToIndex] = useState(false);

  const handleSignIn = () => {
    setError('');

    if (username === '' || password === '') {
      setError('Please fill in all fields');
      return;
    }

    // Adding some data for reference or as an example
    const users = [
      { username: 'kashish', password: 'KASHISH' },
      { username: 'abc', password: 'ABC' },
      { username: 'qwe', password: 'QWE' }
    ];

    const foundUser = users.find(user => user.username === username && user.password === password);

    if (foundUser) {
      alert('Successfully signed in. Redirecting to the main page.');
      setRedirectToIndex(true);
    } else {
      setError('Invalid username or password');
    }
  };
  if (redirectToIndex) {
    return (
      <OnlineShoppingSite />
    );
  }


  return (
    <div className='empty-box'>
    <Navbar />
    <div className="outside-container">
      <div className="login-container">
        <h2>Sign-In to your Amazon account</h2>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          placeholder="Enter your username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button id="signInBtn" onClick={handleSignIn}>
          Sign In
        </button>
        <div className="error" id="errorContainer">{error}</div>
      </div>

      <p className="new-user">New to Amazon?</p>
      <div className="new-user">
      <Link to="/signUp" >
        Create your Amazon account
      </Link>
      </div>
    </div>
    </div>
  );
}

export default SignIn;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './SignIn.css'; // Create this CSS file for styling
import Header from './Header';
import Footer from './Footer';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with your sign-in logic
    if (username === '' || email === '' || password === '') {
      setError('All fields are required.');
      return;
    }
    // Clear the error
    setError('');
    // Handle the sign-in process (e.g., make an API request)
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    
    // Clear the input fields
    setUsername('');
    setEmail('');
    setPassword('');

    // Redirect to login page after sign-in
    navigate('/login');
  };

  return (
    <div>
        <Header/>
    <div className="signin-container">
      <h2 className="signin-heading">Sign In</h2>
      <form onSubmit={handleSubmit} className="signin-form">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="form-input"
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="submit-button">Sign In</button>
      </form>
    </div>
    <Footer/>
    </div>
  );
};

export default SignIn;

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";
import Header from "./Header";
import Footer from "./Footer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      setError("Email and password are required.");
      return;
    }

    setError("");

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      console.log("Response data:", data);

      setEmail("");
      setPassword("");

      
      navigate("/");
    } catch (error) {
      console.error("Error during login:", error);
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <div>
      <Header />
      <div className="login-container">
        <h2 className="login-heading">Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
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
          <button type="submit" className="submit-button">Login</button>
        </form>
        <p className="signin-link">
          Don't have an account? <Link to="/signin" className="signin-link-text">Sign In</Link>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Login;


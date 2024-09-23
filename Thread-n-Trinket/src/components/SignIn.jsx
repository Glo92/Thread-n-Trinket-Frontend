import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";
import Header from "./Header";
import Footer from "./Footer";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username === "" || email === "" || password === "") {
      setError("All fields are required.");
      return;
    }

    setError("");

    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      const data = await response.json();
      console.log("Response data:", data);

      
      setUsername("");
      setEmail("");
      setPassword("");

      
      navigate("/login");
    } catch (error) {
      console.error("Error during sign-in:", error);
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <div>
      <Header />
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
      <Footer />
    </div>
  );
};

export default SignIn;


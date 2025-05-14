import React, { useState } from "react";
import "./Login.css";
import { FaFacebook, FaTwitter, FaGoogle, FaLinkedinIn } from "react-icons/fa";

const Login = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <div className="login-container">
      <div className="form-box">
        <div className="button-box">
          <div
            id="btn"
            style={{ left: isRegistering ? "50%" : "0" }}
          ></div>
          <button
            type="button"
            className="toggle-btn"
            onClick={() => setIsRegistering(false)}
          >
            Log In
          </button>
          <button
            type="button"
            className="toggle-btn"
            onClick={() => setIsRegistering(true)}
          >
            Register
          </button>
        </div>

        <div className="social-media">
          <a href="#" className="social-icon">
            <FaFacebook />
          </a>
          <a href="#" className="social-icon">
            <FaTwitter />
          </a>
          <a href="#" className="social-icon">
            <FaGoogle />
          </a>
          <a href="#" className="social-icon">
            <FaLinkedinIn />
          </a>
        </div>

        {!isRegistering ? (
          <form className="login-form">
            <input type="text" className="form-field" placeholder="Username" required />
            <input type="password" className="form-field" placeholder="Password" required />
            <div className="checkbox-group">
              <input type="checkbox" className="checkbox" />
              <span>Remember Password</span>
            </div>
            <button type="submit" className="submit">Log In</button>
          </form>
        ) : (
          <form className="login-form">
            <input type="text" className="form-field" placeholder="Username" required />
            <input type="email" className="form-field" placeholder="Email Address" required />
            <input type="password" className="form-field" placeholder="Password" required />
            <div className="checkbox-group">
              <input type="checkbox" className="checkbox" />
              <span>I accept the Terms & Conditions</span>
            </div>
            <button type="submit" className="submit">Register</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;

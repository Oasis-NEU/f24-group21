import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    document.body.style.overflow = 'hidden'; // Disable scrolling on login page

    return () => {
      document.body.style.overflow = 'auto'; // Re-enable scrolling when leaving the page
    };
  }, []);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!formData.email.endsWith('@northeastern.edu')) {
      newErrors.email = 'Please use your Northeastern email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Add your login logic here
      console.log('Login attempted with:', formData);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box login-box">
        <img 
          src="https://news.northeastern.edu/wp-content/uploads/2018/08/KingHuskyHead.jpg" 
          alt="King Husky Logo" 
          className="auth-logo" 
        />
        <h2>Welcome Back</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group email"> {/* Updated class for email */}
            <label htmlFor="email">Northeastern Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="username@northeastern.edu"
              className={`input-field ${errors.email ? 'error' : ''}`}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>
          <div className="form-group password"> {/* Updated class for password */}
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`input-field ${errors.password ? 'error' : ''}`}
            />
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>
          <div className="remember-forgot">
            <div className="remember-me">
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe">Remember Me</label>
            </div>
            <Link to="/forgot-password" className="forgot-password">Forgot Password?</Link>
          </div>
          <button type="submit" className="auth-button">
            Log In
          </button>
        </form>
        <div className="auth-footer">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
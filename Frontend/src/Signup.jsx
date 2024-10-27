import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    document.body.style.overflow = 'hidden'; // Disable scrolling on signup page

    return () => {
      document.body.style.overflow = 'auto'; // Re-enable scrolling when leaving the page
    };
  }, []);

  const validateForm = () => {
    const newErrors = {};

    // First Name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    // Last Name validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    } else if (!formData.email.endsWith('@northeastern.edu')) {
      newErrors.email = 'Please use your Northeastern email address';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
    }

    // Confirm Password validation
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
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
      // Add your signup logic here
      console.log('Signup attempted with:', formData);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box signup-box">
        <img 
          src="https://news.northeastern.edu/wp-content/uploads/2018/08/KingHuskyHead.jpg" 
          alt="King Husky Logo" 
          className="auth-logo" 
        />
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group name-spacing"> {/* First Name Field */}
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`input-field ${errors.firstName ? 'error' : ''}`}
              />
              {errors.firstName && <span className="error-message">{errors.firstName}</span>}
            </div>
            <div className="form-group name-spacing"> {/* Last Name Field */}
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`input-field ${errors.lastName ? 'error' : ''}`}
              />
              {errors.lastName && <span className="error-message">{errors.lastName}</span>}
            </div>
          </div>
          <div className="form-group field-spacing"> {/* Email Field */}
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
          <div className="form-group field-spacing"> {/* Password Field */}
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
          <div className="form-group field-spacing"> {/* Confirm Password Field */}
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`input-field ${errors.confirmPassword ? 'error' : ''}`}
            />
            {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
          </div>
          <button type="submit" className="auth-button">Sign Up</button>
        </form>
        <div className="auth-footer">
          Already have an account? <Link to="/login">Log In</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
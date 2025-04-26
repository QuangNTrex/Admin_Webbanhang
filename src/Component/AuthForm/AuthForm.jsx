// src/components/AuthForm.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AuthForm.css';

const AuthForm = ({ type, onSubmit }) => {
  const isSignUp = type === 'signup';
  const stateRequired = false;

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Sign In</h2>

        {/* Dùng trong cả hai */}
        <input
          type="text"
          name="username"
          placeholder="Username"
          required = {stateRequired}
          value={formData.username}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          required = {stateRequired}
          value={formData.password}
          onChange={handleChange}
        />

        <button type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default AuthForm;

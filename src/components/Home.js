import React, { useState } from 'react';

const Home = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  // State to handle form submission success or errors
  const [message, setMessage] = useState('');

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation: Check if fields are filled
    if (formData.name && formData.email && formData.password) {
      // Display success message (In real app, here you'd send data to a server)
      setMessage('Registration successful!');
    } else {
      setMessage('Please fill out all fields.');
    }
  };

  return (
    <div className="page">
      <h1>Home Page</h1>
      <p>Welcome to our website's homepage!</p>

      <h2>User Registration Form</h2>
      <form onSubmit={handleSubmit} className="registration-form">
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Register</button>
      </form>

      {/* Display a message after form submission */}
      {message && <p>{message}</p>}
    </div>
  );
};

export default Home;

import React, { useState } from 'react';

function Authenticate({ token }) {
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleClick = async () => {
    try {
      const response = await fetch('https://fsa-jwt-practice.herokuapp.com/authenticate', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (data.success) {
        setSuccessMessage(data.message);
      } else {
        setError(data.message || 'Authentication failed.');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Authenticate</h2>
      {error && <p className="error">{error}</p>}
      {successMessage && <p className="success">{successMessage}</p>}
      <button onClick={handleClick}>Authenticate Token

import React, { useState } from 'react';

const Urls = ({ children }) => {
  const [error, setError] = useState('');

  const fetchUrl = async () => {
    try {
      const response = await fetch("https://apipixcel.adsdep.com/url");
      if (!response.ok) {
        throw new Error('Failed to fetch URL');
      }
      const data = await response.json();
      if (data.length > 0 && data[0].urls) {
        window.location.href = data[0].urls;
      } else {
        throw new Error('Invalid URL');
      }
    } catch (error) {
      console.error(error);
      setError('An error occurred while fetching the URL');
    }
  };

  return (
    <div onClick={fetchUrl} style={{ cursor: 'pointer' }}>
      {error && <p>{error}</p>}
      {children}
    </div>
  );
};

export default Urls;

// src/components/Footer.js
import React from 'react';

const Footer = ({ copyrightText }) => {
  return (
    <footer style={{ backgroundColor: '#333', color: 'white', padding: '16px', textAlign: 'center' }}>
      <p>&copy; {new Date().getFullYear()} {copyrightText}</p>
    </footer>
  );
};

export default Footer;

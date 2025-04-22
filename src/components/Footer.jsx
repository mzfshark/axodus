// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="app-footer">
      <p>© {new Date().getFullYear()} Axodus Finance. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

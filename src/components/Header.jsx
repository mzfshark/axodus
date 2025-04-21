// src/components/Header.jsx
import React from 'react';
import '../styles/Global.module.css';

const Header = ({ children }) => {
  return (
    <header className="app-header">
      <div className="app-header-left">
        <h1>Axodus Finance</h1>
      </div>
      <div className="app-header-right">
        {children}
      </div>
    </header>
  );
};

export default Header;

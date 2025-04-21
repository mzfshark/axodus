// src/components/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Global.module.css';

const Sidebar = () => {
  return (
    <aside className="app-sidebar">
      <nav>
        <ul>
          <li>
            <NavLink to="/dashboard" activeclassname="active">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" activeclassname="active">Portfolio</NavLink>
          </li>
          <li>
            <NavLink to="/transactions" activeclassname="active">Transactions</NavLink>
          </li>
          <li>
            <NavLink to="/settings" activeclassname="active">Settings</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;

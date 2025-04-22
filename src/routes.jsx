// src/routes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import TransactionHistoryPage from './pages/TransactionHistoryPage';
import Portfolio from './pages/Portfolio';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/settings" element={<Settings />} />
    <Route path="/transactions" element={<TransactionHistoryPage />} />
    <Route path="/portfolio" element={<Portfolio />} />
  </Routes>
);

export default AppRoutes;


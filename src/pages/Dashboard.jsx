// src/pages/Dashboard.jsx
import React from 'react';
import InvestmentCard from '../components/InvestmentCard';
import PerformanceGraph from '../components/PerformanceGraph';
import TokenBalance from '../components/TokenBalance';
import InfoList from '../components/InfoList';

import '../styles/Global.module.css';

const mockInvestments = [
  { name: 'Ethereum', value: 24500, change: 3.5, icon: '/assets/icons/eth.svg' },
  { name: 'Polygon', value: 8200, change: -1.2, icon: '/assets/icons/matic.svg' },
  { name: 'Bitcoin', value: 36400, change: 2.1, icon: '/assets/icons/btc.svg' }
];

const mockPerformance = [
  { name: 'Jan', value: 1000 },
  { name: 'Feb', value: 1300 },
  { name: 'Mar', value: 1250 },
  { name: 'Apr', value: 1600 },
  { name: 'May', value: 1800 },
  { name: 'Jun', value: 1400 },
  { name: 'Jul', value: 2000 }
];

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-summary">
        {mockInvestments.map((inv) => (
          <InvestmentCard key={inv.name} {...inv} />
        ))}
      </div>

      <div className="dashboard-section">
        <PerformanceGraph data={mockPerformance} title="Portfolio Performance" />
      </div>

      <div className="dashboard-section">
        <TokenBalance />
      </div>

      <div className="dashboard-section">
        <InfoList />
      </div>
    </div>
  );
};

export default Dashboard;

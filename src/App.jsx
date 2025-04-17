import React from 'react';
import { InvestmentProvider } from './context/InvestmentContext';
import Dashboard from './pages/Dashboard';
import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <InvestmentProvider>
            <Dashboard />
        </InvestmentProvider>
        </p>
      </header>

    </div>
    
    
    
  );
};

export default App;

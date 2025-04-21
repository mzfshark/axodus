// src/App.jsx
import React from 'react';
import AppRoutes from './routes';
import WalletConnectButton from './components/WalletConnectButton';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

import './styles/Global.module.css';

const App = () => {
  return (
    <div className="app-layout">
      <Header>
        <WalletConnectButton />
      </Header>

      <div className="app-main">
        <Sidebar />
        <main className="app-content">
          <AppRoutes />
        </main>
      </div>
    </div>
  );
};

export default App;

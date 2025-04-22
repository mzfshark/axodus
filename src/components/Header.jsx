// src/components/Header.jsx
import React from 'react';
import { useAppKitAccount } from '@reown/appkit/react';
import WalletConnectButton from './WalletConnectButton';
import '../styles/Global.module.css'

const Header = () => {
  const { isConnected, address } = useAppKitAccount();

  return (
    <header className="app-header">
      <div className="app-header-left">
        <h1>Axodus Finance</h1>
      </div>
      <div className="app-header-right">
        <WalletConnectButton />
        {isConnected && (
          <span className="wallet-address">{address.slice(0, 6)}...{address.slice(-4)}</span>
        )}
      </div>
    </header>
  );
};

export default Header;

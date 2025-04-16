import React from 'react';
import { useWeb3React } from '@web3-react/core';
import { injected, walletconnect } from '../api/walletConnect';

const WalletConnection = () => {
  const { activate, deactivate, account } = useWeb3React();

  const connectMetaMask = () => {
    activate(injected);
  };

  const connectWalletConnect = () => {
    activate(walletconnect);
  };

  const disconnect = () => {
    deactivate();
  };

  return (
    <div>
      {account ? (
        <div>
          <p>Connected with account: {account}</p>
          <button onClick={disconnect}>Disconnect</button>
        </div>
      ) : (
        <div>
          <button onClick={connectMetaMask}>Connect with MetaMask</button>
          <button onClick={connectWalletConnect}>Connect with WalletConnect</button>
        </div>
      )}
    </div>
  );
};

export default WalletConnection;

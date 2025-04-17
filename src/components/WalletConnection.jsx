import React, { useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { injected, walletconnect, getWalletConnectClient } from '../api/walletConnect';

const WalletConnection = () => {
  const { activate, deactivate, account } = useWeb3React();
  const [isConnecting, setIsConnecting] = useState(false);

  const connectMetaMask = () => {
    activate(injected);
  };

  const connectWalletConnect = async () => {
    setIsConnecting(true);
    const client = getWalletConnectClient();
    await client.connect();
    activate(walletconnect);
    setIsConnecting(false);
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
          <button onClick={connectWalletConnect} disabled={isConnecting}>
            {isConnecting ? 'Connecting...' : 'Connect with WalletConnect'}
          </button>
        </div>
      )}
    </div>
  );
};

export default WalletConnection;

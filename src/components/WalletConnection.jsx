// src/components/WalletConnection.jsx
import React from 'react';
import { useAppKit } from '../context/AppKitProvider';

const WalletConnection = () => {
  const { appKit, isReady, error } = useAppKit();

  const connectWallet = async () => {
    try {
      await appKit.connect();
      const signer = await appKit.getSigner();
      const address = await signer.getAddress();
      console.log('Connected with:', address);
    } catch (err) {
      console.error('Wallet connect error:', err);
    }
  };

  if (error) return <div>Failed to load wallet: {error.message}</div>;
  if (!isReady) return <div>Loading wallet...</div>;

  return (
    <div>
      <button onClick={connectWallet}>Connect Wallet</button>
    </div>
  );
};

export default WalletConnection;
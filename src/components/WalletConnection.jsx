import React from 'react';
import { useAppKit } from '../context/AppKitProvider';

const WalletConnection = () => {
  const { appKit, isReady } = useAppKit();

  const handleConnect = async () => {
    if (!isReady) {
      console.error('AppKit not ready yet');
      return;
    }
    try {
      await appKit.connect(); // Check official docs for exact API
      const signer = await appKit.getSigner();
      const address = await signer.getAddress();
      console.log('Connected with:', address);
    } catch (err) {
      console.error('Connection error:', err);
    }
  };

  return (
    <div>
      {isReady ? (
        <button onClick={handleConnect}>
          Connect Wallet
        </button>
      ) : (
        <div>Loading Wallet...</div>
      )}
    </div>
  );
};

export default WalletConnection;

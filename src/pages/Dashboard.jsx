// pages/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import { useAccount, useNetwork } from '@reown/appkit/react';
import { formatEther } from 'ethers';
import WalletConnectButton from '../components/WalletConnectButton';
import { useAppKit } from '../context/AppKitProvider';

const Dashboard = () => {
  const { address, isConnected } = useAccount();
  const { chain } = useNetwork();
  const { appKit } = useAppKit();
  const [balance, setBalance] = useState(null);
  const [loadingBalance, setLoadingBalance] = useState(false);

  // Buscar saldo da carteira
  useEffect(() => {
    const fetchBalance = async () => {
      if (!isConnected || !appKit) return;
      try {
        setLoadingBalance(true);
        const signer = await appKit.getSigner();
        const rawBalance = await signer.provider.getBalance(address);
        const ethBalance = formatEther(rawBalance); // Converter para ETH/MATIC etc.
        setBalance(ethBalance);
      } catch (error) {
        console.error('Error fetching balance:', error);
        setBalance(null);
      } finally {
        setLoadingBalance(false);
      }
    };

    fetchBalance();
  }, [isConnected, address, appKit]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Axodus Dashboard</h1>

      <div className="mb-4">
        <WalletConnectButton />
      </div>

      {isConnected ? (
        <div className="bg-gray-100 p-4 rounded shadow-md space-y-2">
          <p><strong>Connected account:</strong> {address}</p>
          <p><strong>Chain ID:</strong> {chain?.id}</p>
          <p><strong>Network name:</strong> {chain?.name}</p>
          <p>
            <strong>Balance:</strong>{' '}
            {loadingBalance
              ? 'Loading...'
              : balance !== null
              ? `${balance} ${chain?.nativeCurrency?.symbol || 'ETH'}`
              : 'N/A'}
          </p>
        </div>
      ) : (
        <p className="text-gray-600">Please connect your wallet to access your dashboard.</p>
      )}
    </div>
  );
};

export default Dashboard;

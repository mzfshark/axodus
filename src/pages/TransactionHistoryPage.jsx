// src/pages/TransactionHistoryPage.jsx
import React, { useEffect, useState } from 'react';
import { useAppKit } from '@reown/appkit/react';

const TransactionHistoryPage = () => {
  const { appKit, isReady } = useAppKit();
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = async () => {
    try {
      if (!isReady) return;

      const signer = await appKit.getSigner();
      const account = await signer.getAddress();

      // TODO: trocar por lógica real de histórico de transações
      const txHistory = [
        `Mock transaction for ${account}`
      ];

      setTransactions(txHistory);
    } catch (error) {
      console.error('Erro ao buscar transações:', error);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, [isReady]);

  return (
    <div>
      <h1>Transaction History</h1>
      <ul>
        {transactions.length > 0 ? (
          transactions.map((tx, index) => <li key={index}>{tx}</li>)
        ) : (
          <p>No transactions found.</p>
        )}
      </ul>
    </div>
  );
};

export default TransactionHistoryPage;

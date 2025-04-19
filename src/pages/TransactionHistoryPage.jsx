// pages/transactionHistory.js
import React, { useEffect, useState } from 'react';
import { useAppKit } from '../context/AppKitProvider';

const TransactionHistory = () => {
  const { appKit, isReady } = useAppKit(); // Usando appKit para interagir com a carteira
  const [transactions, setTransactions] = useState([]); // Estado para armazenar as transações

  // Função para buscar transações
  const fetchTransactions = async () => {
    try {
      if (!isReady) return;

      // Aqui você deve integrar com um serviço de transações, por exemplo, usando ethers.js
      const signer = await appKit.getSigner();
      const account = await signer.getAddress();
      // Aqui você pode usar um serviço para buscar transações ou usar ethers.js para pegar o histórico de transações.

      const txHistory = []; // Exemplo fictício
      setTransactions(txHistory);
    } catch (error) {
      console.error('Erro ao buscar transações:', error);
    }
  };

  // Carregar as transações quando o appKit estiver pronto
  useEffect(() => {
    if (isReady) {
      fetchTransactions(); // Tenta buscar as transações
    }
  }, [isReady]);

  return (
    <div>
      <h1>Transaction History</h1>
      <ul>
        {transactions.length > 0 ? (
          transactions.map((tx, index) => <li key={index}>{tx}</li>) // Exibindo as transações
        ) : (
          <p>No transactions found.</p>
        )}
      </ul>
    </div>
  );
};

export default TransactionHistory;

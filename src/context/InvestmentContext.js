import React, { createContext, useState, useContext, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import { fetchTokenBalance } from '../services/blockchainService';

const InvestmentContext = createContext();

export const useInvestment = () => {
  return useContext(InvestmentContext);
};

export const InvestmentProvider = ({ children }) => {
  const { account, library } = useWeb3React();
  const [tokenBalances, setTokenBalances] = useState({});
  
  useEffect(() => {
    const fetchBalances = async () => {
      if (account && library) {
        // Define the tokens you want to track
        const tokenAddresses = [
          '0x...TokenAddress1', // Replace with actual token addresses
          '0x...TokenAddress2',
        ];

        const balances = {};
        for (let tokenAddress of tokenAddresses) {
          const balance = await fetchTokenBalance(library, tokenAddress, account);
          balances[tokenAddress] = balance;
        }

        setTokenBalances(balances);
      }
    };

    fetchBalances();
  }, [account, library]);

  return (
    <InvestmentContext.Provider value={{ tokenBalances }}>
      {children}
    </InvestmentContext.Provider>
  );
};

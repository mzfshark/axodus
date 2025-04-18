import React, { createContext, useContext, useEffect, useState } from 'react';
import { useAppKit } from './AppKitProvider';
import { fetchTokenBalance } from '../services/blockchainService';

const InvestmentContext = createContext();

export const useInvestment = () => useContext(InvestmentContext);

export const InvestmentProvider = ({ children }) => {
  const { appKit, isReady } = useAppKit();
  const [tokenBalances, setTokenBalances] = useState({});
  const [chainId, setChainId] = useState(null);
  const [tokenList, setTokenList] = useState([]);

  useEffect(() => {
    const fetchBalances = async () => {
      if (!isReady) return;

      try {
        const signer = await appKit.getSigner();
        const provider = signer.provider;
        const account = await signer.getAddress();
        const network = await provider.getNetwork();
        const currentChainId = Number(network.chainId);

        setChainId(currentChainId);

        // Carrega tokenlist da chain conectada
        const tokenListModule = await import(`../assets/tokenlist/${currentChainId}.json`);
        const tokens = tokenListModule.default;

        setTokenList(tokens);

        const balances = {};

        for (const token of tokens) {
          const balance = await fetchTokenBalance(provider, token.address, account);
          balances[token.symbol] = balance;
        }

        setTokenBalances(balances);
      } catch (error) {
        console.error('Erro ao buscar balances:', error);
      }
    };

    fetchBalances();
  }, [appKit, isReady]);

  return (
    <InvestmentContext.Provider value={{ tokenBalances, tokenList, chainId }}>
      {children}
    </InvestmentContext.Provider>
  );
};

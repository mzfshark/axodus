import React, { createContext, useContext, useEffect, useState } from 'react';
import { ethers } from 'ethers'; // Usando ethers.js v6
import { fetchTokenBalance } from '../services/blockchainService';
import { useAppKit } from './AppKitProvider'; // Usando AppKit para integração

const InvestmentContext = createContext();

export const useInvestment = () => useContext(InvestmentContext);

export const InvestmentProvider = ({ children }) => {
  const { appKit, isReady } = useAppKit(); // Obtemos o appKit, como antes
  const [tokenBalances, setTokenBalances] = useState({});
  const [chainId, setChainId] = useState(null);
  const [tokenList, setTokenList] = useState([]);

  useEffect(() => {
    const fetchBalances = async () => {
      if (!isReady) return;

      try {
        // Usando reown appkit ou ethers.js diretamente para obter o signer
        let signer;
        if (appKit) {
          // Se o appKit fornece a funcionalidade para obter o signer
          signer = await appKit.getSigner();
        } else if (window.ethereum) {
          // Caso o appKit não forneça a função getSigner, usamos ethers.js diretamente
          const provider = new ethers.BrowserProvider(window.ethereum);
          signer = await provider.getSigner();
        } else {
          console.error('Ethereum não está disponível no navegador.');
          return;
        }

        const account = await signer.getAddress();
        const network = await signer.provider.getNetwork();
        const currentChainId = Number(network.chainId);

        setChainId(currentChainId);

        // Carrega tokenlist da chain conectada
        const tokenListModule = await import(`../assets/tokenlist/${currentChainId}.json`);
        const tokens = tokenListModule.default;

        setTokenList(tokens);

        const balances = {};

        for (const token of tokens) {
          const balance = await fetchTokenBalance(signer.provider, token.address, account);
          balances[token.symbol] = balance;
        }

        setTokenBalances(balances);
      } catch (error) {
        console.error('Erro ao buscar balances:', error);
      }
    };

    fetchBalances();
  }, [appKit, isReady]); // Dependências para executar a função quando `appKit` ou `isReady` mudarem

  return (
    <InvestmentContext.Provider value={{ tokenBalances, tokenList, chainId }}>
      {children}
    </InvestmentContext.Provider>
  );
};

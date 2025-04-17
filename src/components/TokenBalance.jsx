import React from 'react';
import { useInvestment } from '../context/InvestmentContext';

const TokenBalance = () => {
  const { tokenBalances } = useInvestment();

  return (
    <div>
      <h2>Your Token Balances</h2>
      <ul>
        {Object.keys(tokenBalances).map((tokenAddress) => (
          <li key={tokenAddress}>
            Token: {tokenAddress} | Balance: {tokenBalances[tokenAddress]} ETH
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TokenBalance;

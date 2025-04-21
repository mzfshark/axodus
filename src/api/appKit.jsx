// src/api/appKit.js
import { createAppKit } from '@reown/appkit/react';
import { EthersAdapter } from '@reown/appkit-adapter-ethers';
import {   
  mainnet, 
  bsc, 
  arbitrum, 
  harmonyOne, 
  avalanche, 
  polygon, 
  celo, 
  optimism, 
  opBNB, 
  base, 
  cronos, 
  solana, 
  bitcoin, 
  tron } from '@reown/appkit/networks';

const projectId = process.env.REACT_APP_PROJECT_ID;
const ankrAccountToken = process.env.REACT_APP_ANKR_ACCOUNT_TOKEN;

const networks = [  
  mainnet, 
  bsc, 
  arbitrum, 
  harmonyOne, 
  avalanche, 
  polygon, 
  celo, 
  optimism, 
  opBNB, 
  base, 
  cronos, 
  solana, 
  bitcoin, 
  tron
];

const ethersAdapter = new EthersAdapter({
  rpcUrls: {
    [mainnet.id]: `https://rpc.ankr.com/eth/${ankrAccountToken}`,
    [arbitrum.id]: `https://rpc.ankr.com/arbitrum/${ankrAccountToken}`,
    [polygon.id]: `https://rpc.ankr.com/polygon/${ankrAccountToken}`,
    [optimism.id]: `https://rpc.ankr.com/optimism/${ankrAccountToken}`,
    [bsc.id]: `https://rpc.ankr.com/bsc/${ankrAccountToken}`,
    [harmonyOne.id]: `https://rpc.ankr.com/harmony/${ankrAccountToken}`,
    [avalanche.id]: `https://rpc.ankr.com/avalanche/${ankrAccountToken}`,
    [celo.id]: `https://rpc.ankr.com/celo/${ankrAccountToken}`,
    [opBNB.id]: `https://1rpc.io/opbnb`,
    [base.id]: `https://base.llamarpc.com`,
    [cronos.id]: `https://rpc.vvs.finance`, 
    [solana.id]: `https://rpc.ankr.com/solana/${ankrAccountToken}`, 
    [bitcoin.id]: `https://rpc.ankr.com/btc/${ankrAccountToken}`, 
    [tron.id]: `https://api.trongrid.io/jsonrpc`,
  },
});

const metadata = {
  name: 'Axodus Finance',
  description: 'Dashboard para investidores.',
  url: 'http://localhost:3000',
  icons: ['http://localhost:3000/favicon.ico'],
};

const appKit = createAppKit({
  adapters: [ethersAdapter],
  networks,
  metadata,
  projectId,
  features: { analytics: true },
});

export default appKit;
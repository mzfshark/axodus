// src/api/appKit.js
import { createAppKit } from '@reown/appkit/react';
import { EthersAdapter } from '@reown/appkit-adapter-ethers';
import { mainnet, arbitrum, polygon, optimism } from '@reown/appkit/networks';

const projectId = process.env.REACT_APP_PROJECT_ID;
const ankrAccountToken = process.env.REACT_APP_ANKR_ACCOUNT_TOKEN;

const networks = [mainnet, arbitrum, polygon, optimism];

const ethersAdapter = new EthersAdapter({
  rpcUrls: {
    [mainnet.id]: `https://rpc.ankr.com/eth/${ankrAccountToken}`,
    [arbitrum.id]: `https://rpc.ankr.com/arbitrum/${ankrAccountToken}`,
    [polygon.id]: `https://rpc.ankr.com/polygon/${ankrAccountToken}`,
    [optimism.id]: `https://rpc.ankr.com/optimism/${ankrAccountToken}`,
  },
});

const metadata = {
  name: 'Axodus Finance',
  description: 'Dashboard para investidores.',
  url: 'https://seu-dominio.com',
  icons: ['https://seu-dominio.com/favicon.ico'],
};

const appKit = createAppKit({
  adapters: [ethersAdapter],
  networks,
  metadata,
  projectId,
  features: { analytics: true },
});

export default appKit;
// src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppKitProvider } from './context/AppKitProvider';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import { SolanaAdapter } from '@reown/appkit-adapter-solana/react';
import { mainnet, arbitrum, solana, solanaDevnet, solanaTestnet, AppKitNetwork } from '@reown/appkit/networks';

// Get projectId from https://cloud.reown.com
const projectId = import.meta.env.VITE_PROJECT_ID || '5e64f2b59a17e7bce18c075ae0fb40a8';

if (!projectId) {
  throw new Error('Project ID is not defined');
}

export const metadata = {
  name: 'Axodus Finance',
  description: 'Dashboard para investidores',
  url: 'https://localhost:3000', // Substitua pelo seu domínio real
  icons: ['https://localhost:3000/favicon.ico']
};

// Redes suportadas
export const networks = [mainnet, arbitrum, solana, solanaDevnet, solanaTestnet];

// Configuração dos adapters
export const wagmiAdapter = new WagmiAdapter({
  projectId,
  networks
});

export const solanaWeb3JsAdapter = new SolanaAdapter();
export const config = wagmiAdapter.wagmiConfig;

// Renderização
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppKitProvider>
      <App />
    </AppKitProvider>
  </React.StrictMode>
);

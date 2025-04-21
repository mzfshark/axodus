// src/App.jsx
import React from 'react';
import { createAppKit } from '@reown/appkit/react';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { ActionButtonList } from './components/ActionButtonList';
import { InfoList } from './components/InfoList';
import {
  projectId,
  metadata,
  networks,
  wagmiAdapter,
  solanaWeb3JsAdapter
} from "./appkit.config";

import './App.css';

const queryClient = new QueryClient();

// AppKit configuration
const generalConfig = {
  projectId,
  metadata,
  networks,
  themeMode: 'light',
  features: {
    analytics: true,
  },
  themeVariables: {
    '--w3m-accent': '#000000',
  },
};

// Initialize AppKit (outside React component)
createAppKit({
  adapters: [wagmiAdapter, solanaWeb3JsAdapter],
  ...generalConfig,
});

export function App() {
  return (
    <div className="pages">
      <img src="/reown.svg" alt="Reown" style={{ width: '150px', height: '150px' }} />
      <h1>Axodus Dashboard — React + AppKit</h1>

      <WagmiProvider config={wagmiAdapter.wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          <appkit-button />
          <ActionButtonList />

          <div className="advice">
            <p>
              This projectId only works on localhost. <br />
              Go to{' '}
              <a
                href="https://cloud.reown.com"
                target="_blank"
                className="link-button"
                rel="noopener noreferrer"
              >
                Reown Cloud
              </a>{' '}
              to get your own.
            </p>
          </div>

          <InfoList />
        </QueryClientProvider>
      </WagmiProvider>
    </div>
  );
}

export default App;

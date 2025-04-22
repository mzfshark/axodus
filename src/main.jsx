// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';

import AppRoutes from './routes'; // deve conter <Routes> com as pages
import { InvestmentProvider } from './context/InvestmentContext';

import { AppKitProvider } from './providers/AppKitProvider';
import {
  projectId,
  metadata,
  networks
} from './appkit.config';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppKitProvider
      projectId={projectId}
      metadata={metadata}
      networks={networks}

    >
      <InvestmentProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </InvestmentProvider>
    </AppKitProvider>
  </React.StrictMode>
);

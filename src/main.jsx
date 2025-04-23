import React from 'react';
import ReactDOM from 'react-dom/client';

import routes from './routes'; // ✅ é o createBrowserRouter
import { InvestmentProvider } from './context/InvestmentContext';
import { AppKitProvider } from './providers/AppKitProvider';
import { RouterProvider } from 'react-router-dom'; // ✅ necessário!

import {
  projectId,
  metadata,
  networks
} from './appkit.config';

const persisted = localStorage.getItem("theme");
if (persisted === "dark") document.documentElement.classList.add("dark");

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppKitProvider projectId={projectId} metadata={metadata} networks={networks}>
      <InvestmentProvider>
        <RouterProvider router={routes} /> {/* ✅ CORRETO */}
      </InvestmentProvider>
    </AppKitProvider>
  </React.StrictMode>
);

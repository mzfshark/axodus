import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppKitProvider } from './context/AppKitProvider';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppKitProvider>
      <App />
    </AppKitProvider>
  </React.StrictMode>
);

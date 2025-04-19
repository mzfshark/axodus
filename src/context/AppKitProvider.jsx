// src/context/AppKitProvider.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import appKit from '../api/appKit';

const AppKitContext = createContext();

export const AppKitProvider = ({ children }) => {
  const [isReady, setIsReady] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const initialize = async () => {
      try {
        await appKit.init();
        setIsReady(true);
      } catch (err) {
        console.error('AppKit init error:', err);
        setError(err);
      }
    };
    initialize();
  }, []);

  return (
    <AppKitContext.Provider value={{ appKit, isReady, error }}>
      {children}
    </AppKitContext.Provider>
  );
};

export const useAppKit = () => {
  const context = useContext(AppKitContext);
  if (!context) {
    throw new Error('useAppKit must be used within AppKitProvider');
  }
  return context;
};

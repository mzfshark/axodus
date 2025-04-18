import React, { createContext, useContext, useEffect, useState } from 'react';
import appKit from '../api/appKit';

const AppKitContext = createContext(null);

export const AppKitProvider = ({ children }) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    try {
      setIsReady(true);
    } catch (error) {
      console.error('Erro ao iniciar AppKit:', error);
      setIsReady(false);
    }
  }, []);
  
  

  return (
    <AppKitContext.Provider value={{ appKit, isReady }}>
      {children}
    </AppKitContext.Provider>
  );
};

export const useAppKit = () => {
  const context = useContext(AppKitContext);
  if (!context) {
    throw new Error('useAppKit must be used within an AppKitProvider');
  }
  return context;
};

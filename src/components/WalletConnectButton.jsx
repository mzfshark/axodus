// src/components/WalletConnectButton.jsx
import React from 'react';
import { ConnectButton } from '@reown/appkit-ui';
import '@reown/appkit-ui/style.css'; // Importa o estilo padrão do botão

const WalletConnectButton = () => {
  return (
    <div className="flex items-center justify-center p-4">
      <ConnectButton />
    </div>
  );
};

export default WalletConnectButton;

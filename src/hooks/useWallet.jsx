// src/hooks/useWallet.jsx
import { useAppKit } from "@reown/appkit/react";

export function useWallet() {
  const { account, connected, chain, disconnect } = useAppKit();

  return {
    address: account?.address,
    isConnected: connected,
    chain,
    disconnect,
  };
}

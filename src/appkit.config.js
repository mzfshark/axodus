/*  src/appkit.config.js
 *  Central place for every shared constant / helper that the Axodus
 *  front‑end (Vite + React + Reown AppKit + ethers‑v6) needs.
 *  ────────────────────────────────────────────────────────────────── */

import {
  AppKit,                       // classe principal
  createWagmiAdapter,
  createSolanaWeb3JsAdapter,
  chains                         // objeto com todas as chains de exemplo
} from "@reown/appkit";

/* ------------------------------------------------------------------ */
/* Project‑level identifiers                                           */
/* ------------------------------------------------------------------ */

/** WalletConnect / project ID issued by Reown’s dashboard */
export const projectId = process.env.REACT_APP_PROJECT_ID;

/** Optional dApp metadata (used by WalletConnect or Reown’s modal) */
export const metadata = {
  name        : "Axodus Dashboard",
  description : "Multi‑chain portfolio and performance dashboard",
  url         : "https://app.axodus.finance",          // must be HTTPS
  icons       : ["https://app.axodus.finance/icon.png"]
};

/* ------------------------------------------------------------------ */
/* Chains (wagmi style)                                               */
/* ------------------------------------------------------------------ */

/**
 *  List ONLY the EVM chains you want to enable in the modal / hooks.
 *  You may import helpers from “@reown/appkit/chains” (which re‑export
 *  Viem/Wagmi chain objects) or build custom ones.
 */
const {   mainnet, bsc, arbitrum, harmonyOne, avalanche, polygon, 
  celo, optimism, opBNB, base, cronos, solana, bitcoin, tron } = chains;
export const networks = [
  mainnet, 
  bsc, 
  arbitrum, 
  harmonyOne, 
  avalanche, 
  polygon, 
  celo, 
  optimism, 
  opBNB, 
  base, 
  cronos, 
  solana, 
  bitcoin, 
  tron
];

/* ------------------------------------------------------------------ */
/* Adapters                                                            */
/* ------------------------------------------------------------------ */

/**
 *  wagmiAdapter — used for all EVM chains via Viem/Wagmi + ethers v6
 *  solanaWeb3JsAdapter — example Solana adapter (optional)
 *
 *  If you do NOT connect to Solana, you can remove that part.
 */
export const wagmiAdapter = createWagmiAdapter({
  projectId,
  metadata,
  chains : networks
});

export const solanaWeb3JsAdapter = createSolanaWeb3JsAdapter({
  projectId,
  metadata,
  // Optional: pass RPC endpoints or connection opts here
  endpoint : "https://api.mainnet-beta.solana.com"
});

/* ------------------------------------------------------------------ */
/* Convenience re‑exports                                              */
/* ------------------------------------------------------------------ */

export default {
  projectId,
  metadata,
  networks,
  wagmiAdapter,
  solanaWeb3JsAdapter
};

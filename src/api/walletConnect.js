import { InjectedConnector } from '@web3-react/injected-connector';
import { UniversalProvider } from '@walletconnect/universal-provider';  // Correct import for WalletConnect v2

// Get environment variables
const ANKR_ACCOUNT_TOKEN = process.env.REACT_APP_ANKR_ACCOUNT_TOKEN;

// Chain ID to native token mapping (use appropriate token names)
const CHAIN_TO_NATIVE_TOKEN = {
  1: 'eth',      // Ethereum Mainnet
  3: 'ropsten',  // Ropsten Testnet
  4: 'rinkeby',  // Rinkeby Testnet
  5: 'goerli',   // Goerli Testnet
  42: 'kovan',   // Kovan Testnet
  137: 'matic',  // Polygon Mainnet
  80001: 'mumbai', // Mumbai Testnet (Polygon)
  // Add more chains as necessary
};

// Function to get the RPC URL based on the chain ID
const getRpcUrl = (chainId) => {
  const nativeToken = CHAIN_TO_NATIVE_TOKEN[chainId];
  if (!nativeToken) {
    throw new Error(`Unsupported chain ID: ${chainId}`);
  }
  return `https://rpc.ankr.com/${nativeToken.toLowerCase()}/${ANKR_ACCOUNT_TOKEN}`;
};

// Define supported chains (example)
const SUPPORTED_CHAIN_IDS = process.env.REACT_APP_SUPPORTED_CHAIN_IDS.split(',');

// MetaMask Connector
export const injected = new InjectedConnector({
  supportedChainIds: SUPPORTED_CHAIN_IDS.map(id => parseInt(id, 10)),
});

// WalletConnect Provider (using Universal Provider for WalletConnect v2)
export const walletconnect = new UniversalProvider({
  rpc: {
    1: getRpcUrl(1),    // Ethereum Mainnet
    3: getRpcUrl(3),    // Ropsten Testnet
    4: getRpcUrl(4),    // Rinkeby Testnet
    5: getRpcUrl(5),    // Goerli Testnet
    42: getRpcUrl(42),  // Kovan Testnet
    137: getRpcUrl(137), // Polygon Mainnet
    80001: getRpcUrl(80001), // Mumbai Testnet (Polygon)
    // Add more chains as necessary
  },
  clientMeta: {
    description: 'Axodus Dashboard - WalletConnect',
    url: 'https://localhost:3000',
    icons: ['https://localhost:3000/favicon.ico'],
    name: 'Axodus',
  },
  supportedChainIds: SUPPORTED_CHAIN_IDS.map(id => parseInt(id, 10)),
  qrcodeModalOptions: {
    mobileLinks: ['metamask', 'trust'], // Configure available wallets
  },
  // Additional settings for WalletConnect v2 can be configured here
});

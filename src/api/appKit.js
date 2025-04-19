import { createAppKit } from '@reown/appkit/react';
import { EthersAdapter } from '@reown/appkit-adapter-ethers';
import { arbitrum, mainnet } from '@reown/appkit/networks';

// Use .env for security
const projectId = process.env.REACT_APP_PROJECT_ID;

// Set your networks
const networks = [arbitrum, mainnet];

// Metadata (customize this!)
const metadata = {
  name: 'Axodus Finance',
  description: 'Investor dashboard',
  url: 'https://localhost:3000', // must match your deployed domain!
  icons: ['https://localhost:3000/favicon.ico']
};

// Create AppKit instance
const appKit = createAppKit({
  adapters: [new EthersAdapter()],
  networks,
  metadata,
  projectId,
  features: {
    analytics: true // optional
  }
});

export default appKit;

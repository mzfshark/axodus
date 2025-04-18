const fs = require('fs');
const path = require('path');
const axios = require('axios');

const OUTPUT_DIR = path.resolve(__dirname, '../src/assets/tokenlist');
const SOURCE_URL = 'https://tokens.coingecko.com/uniswap/all.json'; // ou use IPFS gateway da Uniswap

const chainsToExport = [1, 137, 56, 10, 42161, 1666600000]; // Ethereum, Polygon, BNB, Optimism, Arbitrum

(async () => {
  try {
    const { data } = await axios.get(SOURCE_URL);
    const allTokens = data.tokens;

    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    chainsToExport.forEach(chainId => {
      const tokensForChain = allTokens
        .filter(token => token.chainId === chainId)
        .map(token => ({
          symbol: token.symbol,
          address: token.address,
          decimals: token.decimals
        }));

      fs.writeFileSync(
        path.join(OUTPUT_DIR, `${chainId}.json`),
        JSON.stringify(tokensForChain, null, 2)
      );

      console.log(`✅ Exported ${tokensForChain.length} tokens for chain ${chainId}`);
    });
  } catch (error) {
    console.error('❌ Error generating tokenlists:', error.message);
  }
})();

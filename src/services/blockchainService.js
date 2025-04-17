import { ethers } from 'ethers';

// Fetch Token Balance for the connected wallet
export const fetchTokenBalance = async (provider, tokenAddress, userAddress) => {
  try {
    const tokenContract = new ethers.Contract(tokenAddress, [
      'function balanceOf(address owner) view returns (uint256)',
    ], provider);

    const balance = await tokenContract.balanceOf(userAddress);
    return ethers.utils.formatUnits(balance, 18); // assuming the token has 18 decimals
  } catch (error) {
    console.error("Error fetching token balance:", error);
    return 0;
  }
};

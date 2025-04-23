import { ethers } from "ethers";
import InvestmentProductRegistryABI from "../abi/InvestmentProductRegistry.json";

// exemplo de endereço do contrato
const registryAddress = "0x1234567890abcdef...";

const provider = new ethers.JsonRpcProvider(import.meta.env.VITE_RPC_ETH);

export async function getOverviewStats() {
  const contract = new ethers.Contract(
    registryAddress,
    InvestmentProductRegistryABI,
    provider
  );

  const [totalUsers, totalProducts, protocolFee, tvl, rawProducts] =
    await Promise.all([
      contract.totalInvestors(),
      contract.totalProducts(),
      contract.protocolFee(),
      contract.totalValueLocked(),
      contract.getAllProducts()
    ]);

  const products = rawProducts.map((p) => ({
    address: p.addr,
    name: p.name,
    type: p.productType,
    chain: p.chain,
    roi: Number(p.roi) // simulando
  }));

  return {
    totalUsers: Number(totalUsers),
    totalProducts: Number(totalProducts),
    protocolFee: Number(protocolFee) / 100,
    totalValueLocked: Number(tvl) / 1e18,
    products
  };
}

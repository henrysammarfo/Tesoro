// Deployment script for Tesoro Vault to Sepolia testnet
// Run with: npx hardhat run scripts/deploy.ts --network sepolia

import { ethers } from "hardhat"

async function main() {
  console.log("Deploying Tesoro Vault to Sepolia testnet...")

  // USDC on Sepolia testnet
  const USDC_ADDRESS = "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238"

  const TesoroVault = await ethers.getContractFactory("TesoroVault")
  const vault = await TesoroVault.deploy(USDC_ADDRESS, "Tesoro Vault USDC", "tvUSDC")

  await vault.waitForDeployment()
  const vaultAddress = await vault.getAddress()

  console.log("✅ Tesoro Vault deployed to:", vaultAddress)
  console.log("\nNext steps:")
  console.log("1. Verify contract on Etherscan:")
  console.log(`   npx hardhat verify --network sepolia ${vaultAddress} ${USDC_ADDRESS} "Tesoro Vault USDC" "tvUSDC"`)
  console.log("\n2. Update TESORO_VAULT_ADDRESS in lib/contracts.ts")
  console.log("\n3. Get testnet USDC from: https://faucet.circle.com/")
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })

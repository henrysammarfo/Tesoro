import { ethers } from "hardhat"

async function main() {
  console.log("Deploying TesoroVault contract...")

  const TesoroVault = await ethers.getContractFactory("TesoroVault")
  const vault = await TesoroVault.deploy()

  await vault.waitForDeployment()

  const vaultAddress = await vault.getAddress()
  console.log("TesoroVault deployed to:", vaultAddress)

  // Add USDC as supported token
  const USDC_SEPOLIA = "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238"
  console.log("Adding USDC as supported token...")
  const tx = await vault.addSupportedToken(USDC_SEPOLIA)
  await tx.wait()
  console.log("USDC added successfully!")

  console.log("\n=== DEPLOYMENT COMPLETE ===")
  console.log("Contract Address:", vaultAddress)
  console.log("\nUpdate lib/contracts.ts with this address:")
  console.log(`export const TESORO_VAULT_ADDRESS = "${vaultAddress}"`)
  console.log("\nVerify on Etherscan:")
  console.log(`npx hardhat verify --network sepolia ${vaultAddress}`)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })

# Tesoro Deployment Guide

## Prerequisites

1. **MetaMask wallet** with Sepolia ETH
2. **Testnet USDC** from Circle faucet
3. **Node.js 18+** installed

## Step 1: Get Testnet Tokens

### Get Sepolia ETH (for gas)
- Visit: https://sepoliafaucet.com/
- Or: https://www.alchemy.com/faucets/ethereum-sepolia
- Request 0.5 ETH (enough for testing)

### Get Testnet USDC
- Visit: https://faucet.circle.com/
- Connect wallet
- Request USDC on Sepolia
- You'll receive 10,000 test USDC

## Step 2: Deploy Smart Contract

\`\`\`bash
# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Add your private key to .env
PRIVATE_KEY=your_wallet_private_key_here
SEPOLIA_RPC_URL=https://rpc.sepolia.org
ETHERSCAN_API_KEY=your_etherscan_api_key

# Deploy to Sepolia
npx hardhat run scripts/deploy.ts --network sepolia
\`\`\`

**Copy the deployed contract address!**

## Step 3: Update Frontend

Edit `lib/contracts.ts`:
\`\`\`typescript
export const TESORO_VAULT_ADDRESS = '0xYOUR_DEPLOYED_ADDRESS_HERE'
\`\`\`

## Step 4: Run the App

\`\`\`bash
# Install frontend dependencies
npm install

# Start development server
npm run dev
\`\`\`

Visit http://localhost:3000

## Step 5: Test the App

1. **Connect Wallet**
   - Click "Connect Wallet" button
   - Select MetaMask
   - Approve connection

2. **Make a Deposit**
   - Click "Deposit" button
   - Enter amount (e.g., 100 USDC)
   - Approve USDC spending (first transaction)
   - Confirm deposit (second transaction)
   - Wait for confirmation

3. **Check Balance**
   - Your vault balance should update
   - View transaction on Etherscan

4. **Withdraw Funds**
   - Click "Withdraw" button
   - Enter amount
   - Confirm transaction
   - USDC returns to your wallet

## Troubleshooting

### "Insufficient funds" error
- Get more Sepolia ETH from faucet

### "Insufficient allowance" error
- Approve USDC spending first

### Transaction stuck
- Check Sepolia network status
- Increase gas price in MetaMask

### Contract not found
- Verify contract address in lib/contracts.ts
- Check deployment was successful

## Testnet Resources

- **Sepolia Explorer**: https://sepolia.etherscan.io/
- **USDC Contract**: 0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238
- **Sepolia Faucet**: https://sepoliafaucet.com/
- **Circle USDC Faucet**: https://faucet.circle.com/

## Production Deployment

For mainnet deployment:
1. Audit smart contracts
2. Use mainnet USDC address
3. Deploy to Ethereum mainnet
4. Verify contracts on Etherscan
5. Set up monitoring and alerts

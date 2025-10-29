# For Claude: Backend & Blockchain Integration

## Current Status
✅ **Complete UI/UX** - All pages, modals, navigation working
✅ **Smart Contracts Ready** - TesoroVault.sol in `/contracts`
✅ **Web3 Structure Ready** - Wagmi config, contract ABIs, hooks prepared
✅ **All Components Built** - Deposit, withdraw, rebalance modals ready
✅ **Clean Codebase** - Organized, documented, ready for integration

## What You Need to Integrate

### 1. Environment Variables (Get API Keys)
\`\`\`env
# Required for Web3
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=xxx
NEXT_PUBLIC_ALCHEMY_API_KEY=xxx (optional but recommended)

# Required for Smart Contract Deployment
PRIVATE_KEY=xxx (deployer wallet private key)
ETHERSCAN_API_KEY=xxx (for contract verification)
\`\`\`

**Where to Get:**
- WalletConnect: https://cloud.walletconnect.com/
- Alchemy: https://dashboard.alchemy.com/
- Private Key: Export from MetaMask (keep secure!)
- Etherscan: https://etherscan.io/myapikey

### 2. Deploy Smart Contract to Sepolia Testnet

\`\`\`bash
# Install dependencies
npm install

# Compile contract
npx hardhat compile

# Deploy to Sepolia
npx hardhat run scripts/deploy-contract.ts --network sepolia
\`\`\`

**After deployment, you'll get:**
- Contract address (e.g., 0x123...)
- Copy this address

### 3. Update Contract Address

**File: `lib/contracts.ts`**
\`\`\`typescript
export const TESORO_VAULT_ADDRESS = '0xYOUR_DEPLOYED_CONTRACT_ADDRESS' as const
\`\`\`

### 4. Test the Integration

**Get Sepolia ETH:**
- https://sepoliafaucet.com/
- https://www.alchemy.com/faucets/ethereum-sepolia

**Get Sepolia USDC:**
- Use Aave faucet: https://staging.aave.com/faucet/
- Or deploy mock USDC for testing

### 5. Verify Everything Works

**User Flow to Test:**
1. Go to landing page → Click "Launch App"
2. Connect wallet (MetaMask on Sepolia network)
3. Click "Deposit" → Enter amount
4. Approve USDC → Confirm transaction
5. Deposit USDC → Confirm transaction
6. See balance update in dashboard
7. Navigate to Transactions → See deposit
8. Navigate to Analytics → See stats
9. Click "Withdraw" → Enter amount → Confirm
10. See balance decrease
11. Click "Rebalance" → Select protocol → Confirm

### 6. Deploy to Vercel

\`\`\`bash
# Push to GitHub (if not already)
git init
git add .
git commit -m "Tesoro MVP ready"
git push origin main

# Deploy to Vercel
vercel --prod
\`\`\`

**Add Environment Variables in Vercel:**
- Go to Project Settings → Environment Variables
- Add all the env vars from step 1

## Files Ready for Integration

### Smart Contracts
- `contracts/TesoroVault.sol` - Main vault contract
- `hardhat.config.ts` - Hardhat configuration
- `scripts/deploy-contract.ts` - Deployment script

### Web3 Integration Points
- `lib/wagmi-config.ts` - Wagmi configuration (needs PROJECT_ID)
- `lib/contracts.ts` - Contract addresses and ABIs (needs deployed address)
- `app/providers.tsx` - Web3 providers setup

### Components with Web3 Hooks
- `components/dashboard/deposit-modal.tsx` - Uses useWriteContract
- `components/dashboard/withdraw-modal.tsx` - Uses useWriteContract
- `components/dashboard/balance-card.tsx` - Uses useReadContract
- `components/dashboard/header.tsx` - Uses useAccount

### Pages
- `app/page.tsx` - Landing page (no integration needed)
- `app/dashboard/page.tsx` - Main dashboard
- `app/transactions/page.tsx` - Transaction history
- `app/analytics/page.tsx` - Analytics and stats

## Expected Result After Integration

✅ User can connect wallet on Sepolia testnet
✅ User can deposit USDC to vault
✅ User can see balance update in real-time
✅ User can withdraw USDC from vault
✅ User can view transaction history
✅ User can see analytics and performance
✅ User can rebalance between protocols
✅ All navigation works smoothly
✅ Mobile responsive
✅ Production-ready on Vercel

## Troubleshooting

**If wallet won't connect:**
- Check NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID is set
- Verify user is on Sepolia network

**If transactions fail:**
- Check user has Sepolia ETH for gas
- Check user has approved USDC spending
- Check contract address is correct in lib/contracts.ts

**If balance doesn't update:**
- Check contract address matches deployed contract
- Verify ABI is correct
- Check network is Sepolia (chainId: 11155111)

## Timeline Estimate
- Get API keys: 15 minutes
- Deploy contract: 10 minutes
- Update contract address: 2 minutes
- Test full flow: 20 minutes
- Deploy to Vercel: 10 minutes
- **Total: ~1 hour**

## Ready to Go Live
Once integrated and tested, the product will be:
- ✅ Live on Sepolia testnet
- ✅ Fully functional
- ✅ Professional UI/UX
- ✅ Ready for Startup World Cup submission
- ✅ Deployable to mainnet (just change network config)

---

**Everything is ready. Just follow these steps and it will be live and working.**

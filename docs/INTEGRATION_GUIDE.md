# Tesoro - Backend Integration Guide

## Overview
This guide provides step-by-step instructions for integrating the backend and blockchain functionality into Tesoro.

---

## Required API Keys & Setup

### 1. WalletConnect Project ID
**What it's for:** Wallet connection (MetaMask, Rainbow, etc.)

**How to get it:**
1. Go to https://cloud.walletconnect.com/
2. Sign up / Log in
3. Create a new project
4. Copy the Project ID

**Add to `.env.local`:**
\`\`\`
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_project_id_here
\`\`\`

---

### 2. Alchemy API Key (Optional but Recommended)
**What it's for:** Better RPC performance and reliability

**How to get it:**
1. Go to https://www.alchemy.com/
2. Sign up / Log in
3. Create a new app (select Ethereum Sepolia)
4. Copy the API key

**Add to `.env.local`:**
\`\`\`
NEXT_PUBLIC_ALCHEMY_API_KEY=your_alchemy_key_here
\`\`\`

---

### 3. Blockchain Deployment Keys

**For deploying smart contracts:**

**Private Key:**
- Export from MetaMask: Settings → Security & Privacy → Show Private Key
- **NEVER commit this to git or share it**

**Etherscan API Key:**
1. Go to https://etherscan.io/
2. Sign up / Log in
3. Go to API Keys section
4. Create new API key

**Add to `.env` (for deployment only):**
\`\`\`
PRIVATE_KEY=your_wallet_private_key_here
SEPOLIA_RPC_URL=https://eth-sepolia.g.alchemy.com/v2/YOUR_ALCHEMY_KEY
ETHERSCAN_API_KEY=your_etherscan_key_here
\`\`\`

---

## Deployment Steps

### Step 1: Install Dependencies
\`\`\`bash
npm install
\`\`\`

### Step 2: Get Testnet Tokens

**Sepolia ETH (for gas):**
- https://sepoliafaucet.com/
- https://www.alchemy.com/faucets/ethereum-sepolia

**Testnet USDC:**
- https://faucet.circle.com/
- Select Sepolia network
- Request 10,000 test USDC

### Step 3: Deploy Smart Contract
\`\`\`bash
# Compile contracts
npm run compile

# Deploy to Sepolia
npm run deploy:sepolia
\`\`\`

**Copy the deployed contract address!**

### Step 4: Update Contract Address

Edit `lib/contracts.ts`:
\`\`\`typescript
export const TESORO_VAULT_ADDRESS = '0xYOUR_DEPLOYED_ADDRESS_HERE'
\`\`\`

### Step 5: Run the App
\`\`\`bash
npm run dev
\`\`\`

Visit http://localhost:3000

---

## Testing the Full Flow

### 1. Connect Wallet
- Click "Connect Wallet" button
- Select MetaMask
- Approve connection
- Ensure you're on Sepolia network

### 2. Deposit USDC
- Click "Deposit" button
- Enter amount (e.g., 100 USDC)
- **First transaction:** Approve USDC spending
- **Second transaction:** Deposit to vault
- Wait for confirmations

### 3. Check Balance
- Dashboard should show your deposited balance
- View transaction on Etherscan

### 4. Withdraw Funds
- Click "Withdraw" button
- Enter amount
- Confirm transaction
- USDC returns to your wallet

---

## File Structure

### Frontend (UI/UX)
\`\`\`
app/
├── page.tsx                    # Landing page
├── dashboard/page.tsx          # Main dashboard
├── transactions/page.tsx       # Transaction history
├── analytics/page.tsx          # Analytics page
└── providers.tsx               # Web3 providers

components/
├── dashboard/
│   ├── header.tsx             # Dashboard header
│   ├── balance-card.tsx       # Balance display
│   ├── deposit-modal.tsx      # Deposit modal
│   ├── withdraw-modal.tsx     # Withdraw modal
│   ├── quick-actions.tsx      # Action buttons
│   ├── yield-chart.tsx        # Yield chart
│   ├── protocol-allocation.tsx # Protocol breakdown
│   └── transaction-history.tsx # Recent transactions
\`\`\`

### Backend (Blockchain)
\`\`\`
contracts/
└── TesoroVault.sol            # Main vault contract

scripts/
├── deploy-contract.ts         # Deployment script
└── deploy.ts                  # Alternative deploy

lib/
├── contracts.ts               # Contract addresses & ABIs
└── wagmi-config.ts           # Web3 configuration
\`\`\`

### Documentation
\`\`\`
README.md                      # Project overview
INTEGRATION_GUIDE.md          # This file
DEPLOYMENT.md                 # Deployment instructions
PITCH_DECK.md                 # Pitch deck content
COMPLETE_SETUP_GUIDE.md       # Comprehensive setup
QUICK_START.md                # Quick start guide
\`\`\`

---

## Troubleshooting

### "Insufficient funds" error
- Get more Sepolia ETH from faucet

### "Insufficient allowance" error
- Approve USDC spending first (happens automatically in deposit flow)

### Transaction stuck
- Check Sepolia network status
- Increase gas price in MetaMask

### Contract not found
- Verify contract address in `lib/contracts.ts`
- Check deployment was successful

### Wallet won't connect
- Verify WalletConnect Project ID is set
- Check you're on Sepolia network
- Try refreshing the page

---

## Production Checklist

Before going to mainnet:

- [ ] Audit smart contracts (use OpenZeppelin, Trail of Bits, etc.)
- [ ] Update USDC address to mainnet
- [ ] Deploy to Ethereum mainnet
- [ ] Verify contracts on Etherscan
- [ ] Set up monitoring and alerts
- [ ] Test with small amounts first
- [ ] Set up multi-sig wallet for admin functions
- [ ] Implement rate limiting
- [ ] Add comprehensive error handling
- [ ] Set up analytics tracking

---

## Support Resources

- **Sepolia Explorer:** https://sepolia.etherscan.io/
- **USDC Sepolia:** 0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238
- **Wagmi Docs:** https://wagmi.sh/
- **Viem Docs:** https://viem.sh/
- **Hardhat Docs:** https://hardhat.org/

---

## Next Steps

1. Get all API keys listed above
2. Follow deployment steps
3. Test the full user flow
4. Deploy to Vercel for live demo
5. Submit to Road to Buenos Aires

**Estimated time:** 2-3 hours for full setup and testing

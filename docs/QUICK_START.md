# Quick Start Guide - Get Live in 6 Hours

## Step 1: Get API Keys (30 min)

### WalletConnect Project ID
1. Go to https://cloud.walletconnect.com/
2. Create project → Copy Project ID
3. Add to `.env.local`: `NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=xxx`

### Alchemy API Key
1. Go to https://www.alchemy.com/
2. Create app (Sepolia) → Copy API Key
3. Add to `.env.local`: `SEPOLIA_RPC_URL=https://eth-sepolia.g.alchemy.com/v2/xxx`

### Etherscan API Key
1. Go to https://etherscan.io/myapikey
2. Create key → Copy
3. Add to `.env.local`: `ETHERSCAN_API_KEY=xxx`

### Private Key
1. MetaMask → Account Details → Export Private Key
2. Add to `.env.local`: `PRIVATE_KEY=xxx`

## Step 2: Get Testnet Tokens (15 min)

### Sepolia ETH
- https://sepoliafaucet.com/
- Request 0.5 ETH

### Testnet USDC
- https://staging.aave.com/faucet/
- Request 10,000 USDC

## Step 3: Deploy Contract (30 min)

\`\`\`bash
npm install
npm run compile
npm run deploy:sepolia
\`\`\`

Copy contract address → Update `lib/contracts.ts`

## Step 4: Deploy Frontend (20 min)

Click "Publish" in v0 → Add env vars → Deploy

## Step 5: Test Everything (30 min)

1. Connect wallet
2. Deposit USDC
3. Check balance
4. Withdraw
5. Verify transactions

## Step 6: Record Demo (45 min)

Use Loom to record:
- Landing page
- Wallet connection
- Deposit flow
- Dashboard
- Withdraw flow

## Step 7: Submit Application (1 hour)

Fill form with:
- Live URL
- Demo video
- GitHub repo
- Pitch deck PDF

**Done! 🚀**

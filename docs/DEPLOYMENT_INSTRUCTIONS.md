# 🚀 Tesoro Rapid Deployment Guide

## ✅ Completed Steps
- [x] Created `.env.local` with WalletConnect and Alchemy API keys
- [x] Project structure is ready
- [x] Smart contracts are written

## 📝 Next Critical Steps

### Step 1: Get Remaining API Keys (5 minutes)

#### Etherscan API Key (Optional but Recommended)
1. Go to https://etherscan.io/myapikey
2. Sign up/login
3. Create new API key
4. Copy key and add to `.env.local`:
   ```
   ETHERSCAN_API_KEY=your_key_here
   ```

### Step 2: Get MetaMask Private Key (CRITICAL - 2 minutes)

⚠️ **IMPORTANT**: This is needed to deploy the smart contract

1. Open MetaMask
2. Click three dots (•••) → Account Details
3. Click "Export Private Key"
4. Enter your password
5. Copy the private key
6. Add to `.env.local`:
   ```
   PRIVATE_KEY=your_private_key_here
   ```

### Step 3: Get Testnet Tokens (10-15 minutes)

#### Sepolia ETH (for gas fees)
Visit any of these faucets:
- https://sepoliafaucet.com/ (Alchemy - easiest)
- https://www.infura.io/faucet/sepolia
- https://faucet.quicknode.com/ethereum/sepolia

Request: 0.5 ETH (enough for deployment + testing)

#### Testnet USDC (for testing deposits)
1. Go to https://staging.aave.com/faucet/
2. Connect your MetaMask wallet
3. Switch network to Sepolia
4. Request USDC (you'll get 10,000 test USDC)
5. Confirm transaction

### Step 4: Install Dependencies & Deploy (30 minutes)

Once you have the private key and testnet tokens, run:

```bash
# Install all dependencies
npm install

# Compile smart contracts
npx hardhat compile

# Deploy to Sepolia testnet
npx hardhat run scripts/deploy-contract.ts --network sepolia
```

The deployment will output a contract address like:
```
TesoroVault deployed to: 0x1234567890abcdef...
```

Copy this address and update `lib/contracts.ts`

### Step 5: Deploy Frontend to Vercel (15 minutes)

Option A: From this project
1. Push code to GitHub
2. Go to vercel.com
3. Import repository
4. Add environment variables:
   - `NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID`
   - `NEXT_PUBLIC_ALCHEMY_API_KEY`
5. Deploy

Option B: Quick deploy
```bash
npm install -g vercel
vercel --prod
```

## 🎯 Testing Checklist

After deployment:
- [ ] Visit live URL
- [ ] Connect MetaMask wallet
- [ ] Check balance card shows "0.00"
- [ ] Click "Deposit" button
- [ ] Approve USDC spending
- [ ] Confirm deposit transaction
- [ ] Check balance updates
- [ ] Try withdrawal
- [ ] Verify on Etherscan

## ⏱️ Time Estimate

- Get API keys: 10 minutes
- Get testnet tokens: 15 minutes
- Deploy contract: 15 minutes
- Deploy frontend: 15 minutes
- Testing: 30 minutes
- Demo video: 30 minutes
- **Total: ~2 hours**

## 🆘 Troubleshooting

### "Insufficient funds for gas"
→ Get more Sepolia ETH from faucets

### "Private key invalid"
→ Make sure you copied the entire key from MetaMask

### "USDC not showing in wallet"
→ Add custom token: `0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238`

### "Transaction failed"
→ Check you have enough Sepolia ETH for gas

## 📱 Demo Video Content

Record using Loom (loom.com):
1. Show landing page (10 sec)
2. Connect wallet (15 sec)
3. Deposit flow (30 sec)
4. Dashboard overview (20 sec)
5. Withdraw flow (20 sec)
6. Transaction on Etherscan (15 sec)

**Total: 2 minutes**

## 🎓 Ready to Deploy?

You need:
1. ✅ WalletConnect Project ID (you have this)
2. ✅ Alchemy API Key (you have this)
3. ⏳ Etherscan API Key (get from etherscan.io)
4. ⏳ MetaMask Private Key (export from MetaMask)
5. ⏳ Sepolia ETH (get from faucets)
6. ⏳ Test USDC (get from Aave faucet)

Once you have items 4-6, we can proceed with deployment!
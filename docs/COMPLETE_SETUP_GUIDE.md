# Tesoro - Complete Setup Guide for Live Deployment

## Time Remaining: 6 Hours
This guide will get your Web3 treasury app LIVE and working on testnet.

---

## Phase 1: Get Required API Keys (30 minutes)

### 1. WalletConnect Project ID (REQUIRED)
**Steps:**
1. Go to https://cloud.walletconnect.com/
2. Sign up with your NEW account
3. Click "Create New Project"
4. Name: "Tesoro Treasury"
5. Copy the **Project ID** (looks like: `a1b2c3d4e5f6...`)

**Add to `.env.local`:**
\`\`\`
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=your_project_id_here
\`\`\`

### 2. Alchemy API Key (RECOMMENDED)
**Steps:**
1. Go to https://www.alchemy.com/
2. Sign up with your NEW account
3. Click "Create App"
4. Select "Ethereum" → "Sepolia Testnet"
5. Name: "Tesoro"
6. Copy the **API Key**

**Add to `.env.local`:**
\`\`\`
NEXT_PUBLIC_ALCHEMY_API_KEY=your_alchemy_key_here
SEPOLIA_RPC_URL=https://eth-sepolia.g.alchemy.com/v2/your_alchemy_key_here
\`\`\`

### 3. Etherscan API Key (For contract verification)
**Steps:**
1. Go to https://etherscan.io/
2. Sign up/login
3. Go to API Keys section
4. Create new API key
5. Copy the key

**Add to `.env.local`:**
\`\`\`
ETHERSCAN_API_KEY=your_etherscan_key_here
\`\`\`

### 4. Private Key for Deployment
**Steps:**
1. Open MetaMask
2. Click three dots → Account Details → Export Private Key
3. Enter password and copy key

**Add to `.env.local`:**
\`\`\`
PRIVATE_KEY=your_private_key_here
\`\`\`

⚠️ **NEVER commit .env.local to GitHub!**

---

## Phase 2: Get Testnet ETH (15 minutes)

You need Sepolia ETH for:
- Deploying smart contract (~0.01 ETH)
- Testing transactions (~0.001 ETH per tx)

### Sepolia Faucets:
1. **Alchemy Faucet**: https://sepoliafaucet.com/
2. **Infura Faucet**: https://www.infura.io/faucet/sepolia
3. **QuickNode Faucet**: https://faucet.quicknode.com/ethereum/sepolia

**Steps:**
1. Connect your MetaMask wallet
2. Request 0.5 ETH from faucet
3. Wait 1-2 minutes for confirmation

---

## Phase 3: Get Testnet USDC (10 minutes)

You need testnet USDC to test deposits.

### Option 1: Aave Faucet (EASIEST)
1. Go to https://staging.aave.com/faucet/
2. Connect MetaMask (switch to Sepolia)
3. Request USDC (you'll get 10,000 test USDC)
4. Confirm transaction

### Option 2: Circle Faucet
1. Go to https://faucet.circle.com/
2. Select Sepolia network
3. Enter your wallet address
4. Request USDC

**Verify you received USDC:**
- Open MetaMask
- Add custom token: `0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238`
- You should see your USDC balance

---

## Phase 4: Deploy Smart Contract (30 minutes)

### 1. Install Dependencies
\`\`\`bash
npm install
\`\`\`

### 2. Compile Contract
\`\`\`bash
npx hardhat compile
\`\`\`

### 3. Deploy to Sepolia
\`\`\`bash
npx hardhat run scripts/deploy-contract.ts --network sepolia
\`\`\`

**Expected Output:**
\`\`\`
Deploying TesoroVault contract...
TesoroVault deployed to: 0xYourContractAddress...
Adding USDC as supported token...
USDC added successfully!
\`\`\`

### 4. Update Contract Address
Copy the deployed address and update `lib/contracts.ts`:

\`\`\`typescript
export const TESORO_VAULT_ADDRESS = "0xYourDeployedContractAddress"
\`\`\`

### 5. Verify Contract on Etherscan
\`\`\`bash
npx hardhat verify --network sepolia 0xYourContractAddress
\`\`\`

---

## Phase 5: Deploy Frontend to Vercel (20 minutes)

### Option 1: Deploy from v0 (EASIEST)
1. Click "Publish" button in top right of v0
2. Connect to Vercel
3. Add environment variables:
   - `NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID`
   - `NEXT_PUBLIC_ALCHEMY_API_KEY`
4. Deploy!

### Option 2: Deploy from GitHub
1. Push code to GitHub
2. Go to https://vercel.com/
3. Import repository
4. Add environment variables
5. Deploy

**Your app will be live at:** `https://tesoro-treasury.vercel.app`

---

## Phase 6: Test Everything (30 minutes)

### 1. Test Wallet Connection
- Visit your live URL
- Click "Launch App"
- Connect MetaMask
- Verify wallet address shows in header

### 2. Test Deposit Flow
- Click "Deposit" button
- Enter amount (e.g., 100 USDC)
- Approve USDC spending (first transaction)
- Confirm deposit (second transaction)
- Verify balance updates in dashboard

### 3. Test Withdraw Flow
- Click "Withdraw" button
- Enter amount
- Confirm transaction
- Verify USDC returns to wallet

### 4. Check Transactions
- View transaction history in dashboard
- Click Etherscan links to verify on blockchain
- Confirm all data is accurate

---

## Phase 7: Create Demo Video (45 minutes)

### What to Record:
1. **Landing Page** (10 seconds)
   - Show professional design
   - Highlight key features

2. **Wallet Connection** (15 seconds)
   - Click "Launch App"
   - Connect MetaMask
   - Show connected state

3. **Deposit Flow** (30 seconds)
   - Click deposit
   - Enter amount
   - Show approval transaction
   - Show deposit transaction
   - Show updated balance

4. **Dashboard Overview** (20 seconds)
   - Show balance cards
   - Show yield chart
   - Show protocol allocation
   - Show transaction history

5. **Withdraw Flow** (20 seconds)
   - Click withdraw
   - Enter amount
   - Confirm transaction
   - Show updated balance

### Recording Tools:
- **Loom** (easiest): https://www.loom.com/
- **OBS Studio** (free): https://obsproject.com/
- **QuickTime** (Mac): Built-in screen recording

**Export as MP4, max 2 minutes**

---

## Phase 8: Prepare Application Materials (1 hour)

### 1. Pitch Deck
Use the provided `PITCH_DECK.md` and convert to slides:
- **Google Slides**: Import markdown
- **Pitch.com**: Professional templates
- **Canva**: Easy design tools

**Export as PDF**

### 2. GitHub Repository
Ensure your repo has:
- ✅ Clean README.md
- ✅ Setup instructions
- ✅ Smart contract code
- ✅ Frontend code
- ✅ No .env files committed

### 3. Application Form
Fill out with:
- **Product Name**: Tesoro
- **Tagline**: "Automated treasury yield for SMEs in emerging markets"
- **Live Demo URL**: Your Vercel URL
- **Demo Video**: Upload your recording
- **GitHub**: Repository link
- **Pitch Deck**: Upload PDF

### 4. Founder Information
Prepare:
- Short bios (2-3 sentences each)
- LinkedIn profiles
- Why you're building this
- Your relevant experience

---

## Troubleshooting

### "Transaction Failed"
- Check you have enough Sepolia ETH for gas
- Verify contract address is correct
- Check USDC balance is sufficient

### "Wallet Not Connecting"
- Ensure MetaMask is on Sepolia network
- Clear browser cache
- Try different browser

### "Contract Not Deployed"
- Verify private key in .env.local
- Check Sepolia ETH balance
- Review hardhat.config.ts settings

### "USDC Not Showing"
- Add custom token in MetaMask
- Address: `0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238`
- Decimals: 6

---

## Final Checklist Before Submission

- [ ] Smart contract deployed and verified on Sepolia
- [ ] Frontend deployed and live on Vercel
- [ ] Wallet connection works
- [ ] Deposit flow works end-to-end
- [ ] Withdraw flow works end-to-end
- [ ] Demo video recorded (under 2 minutes)
- [ ] Pitch deck completed (PDF)
- [ ] GitHub repo is public and clean
- [ ] Application form filled out
- [ ] All links tested and working

---

## Support

If you get stuck:
1. Check console logs in browser (F12)
2. Check transaction on Sepolia Etherscan
3. Verify all environment variables are set
4. Review error messages carefully

**You've got this! 🚀**
\`\`\`

```json file="" isHidden

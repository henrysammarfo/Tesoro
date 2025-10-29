# CLAUDE INTEGRATION GUIDE - 10 HOUR SPRINT

## MISSION
Convert Tesoro from UI-only to fully functional testnet MVP ready for Startup World Cup submission.

**Timeline: 10 hours**
**Deadline: Live demo + submission package**

---

## PHASE 1: ENVIRONMENT SETUP (30 mins)

### Step 1: Get API Keys
1. **Alchemy API Key** (for Sepolia testnet)
   - Go to https://www.alchemy.com/
   - Sign up → Create app → Select Sepolia
   - Copy API key

2. **WalletConnect Project ID**
   - Go to https://cloud.walletconnect.com/
   - Create project
   - Copy Project ID

3. **Private Key for Deployment**
   - Create new wallet on MetaMask
   - Export private key (NEVER share publicly)

### Step 2: Update Environment Variables
Create `.env.local`:
\`\`\`
NEXT_PUBLIC_ALCHEMY_API_KEY=your_alchemy_key_here
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_walletconnect_id_here
NEXT_PUBLIC_NETWORK=sepolia
PRIVATE_KEY=your_private_key_here
\`\`\`

### Step 3: Get Testnet ETH
1. Go to https://www.alchemy.com/faucets/ethereum-sepolia
2. Paste your wallet address
3. Claim testnet ETH (for gas fees)

---

## PHASE 2: SMART CONTRACT DEPLOYMENT (45 mins)

### Step 1: Deploy TesoroVault Contract
\`\`\`bash
# Install dependencies
npm install

# Compile contract
npx hardhat compile

# Deploy to Sepolia
npx hardhat run scripts/deploy.ts --network sepolia
\`\`\`

**Expected Output:**
\`\`\`
TesoroVault deployed to: 0x...
USDC Mock deployed to: 0x...
\`\`\`

### Step 2: Update Contract Address
1. Copy the deployed contract address
2. Update in `lib/contracts.ts`:
\`\`\`typescript
export const TESORO_VAULT_ADDRESS = '0x...'; // Your deployed address
export const USDC_ADDRESS = '0x...'; // Your USDC mock address
\`\`\`

### Step 3: Verify Contract (Optional but recommended)
\`\`\`bash
npx hardhat verify --network sepolia 0x... "constructor_args"
\`\`\`

---

## PHASE 3: FRONTEND INTEGRATION (2 hours)

### Step 1: Connect Wagmi to Real Blockchain
Update `lib/wagmi-config.ts`:
- Ensure Sepolia is configured
- Verify Alchemy RPC endpoint is correct
- Test wallet connection

### Step 2: Test Deposit Flow
1. Start app: `npm run dev`
2. Go to http://localhost:3000/dashboard
3. Click "Connect Wallet"
4. Select MetaMask
5. Approve connection
6. Click "Deposit"
7. Enter amount (e.g., 0.1)
8. Approve USDC spending
9. Confirm deposit transaction
10. **Verify:** Balance updates, transaction appears in history

### Step 3: Test Withdraw Flow
1. Click "Withdraw"
2. Enter amount
3. Confirm transaction
4. **Verify:** Balance decreases, transaction recorded

### Step 4: Test All Navigation
- [ ] Landing page → Dashboard works
- [ ] Dashboard → Transactions works
- [ ] Dashboard → Analytics works
- [ ] All modals open/close properly
- [ ] Wallet connect/disconnect works
- [ ] Mobile responsive (test on phone)

---

## PHASE 4: BACKEND API ROUTES (1 hour)

### Step 1: Create Transaction History API
Create `app/api/transactions/route.ts`:
\`\`\`typescript
// GET /api/transactions?address=0x...
// Returns: Array of transactions from blockchain
// Fetches from Alchemy API or The Graph
\`\`\`

### Step 2: Create Analytics API
Create `app/api/analytics/route.ts`:
\`\`\`typescript
// GET /api/analytics?address=0x...
// Returns: APY, total yield, performance metrics
\`\`\`

### Step 3: Create User Stats API
Create `app/api/user/stats/route.ts`:
\`\`\`typescript
// GET /api/user/stats?address=0x...
// Returns: Balance, yield, allocation, etc.
\`\`\`

---

## PHASE 5: TESTING & VALIDATION (1.5 hours)

### Test Checklist
- [ ] Wallet connection works
- [ ] Deposit transaction succeeds
- [ ] Withdraw transaction succeeds
- [ ] Balance updates in real-time
- [ ] Transaction history shows all transactions
- [ ] Analytics page shows correct data
- [ ] Protocol allocation displays correctly
- [ ] Yield chart updates
- [ ] Rebalance functionality works
- [ ] All navigation links work
- [ ] No console errors
- [ ] Mobile responsive
- [ ] Loading states show during transactions
- [ ] Error messages display on failed transactions

### Test Transactions
1. Deposit 0.1 USDC → Verify balance updates
2. Withdraw 0.05 USDC → Verify balance decreases
3. Rebalance allocation → Verify distribution changes
4. Check transaction history → Verify all 3 transactions appear
5. Check analytics → Verify metrics are accurate

---

## PHASE 6: DEPLOYMENT TO VERCEL (45 mins)

### Step 1: Push to GitHub
\`\`\`bash
git add .
git commit -m "Complete Tesoro MVP - testnet ready"
git push origin main
\`\`\`

### Step 2: Deploy to Vercel
\`\`\`bash
vercel --prod
\`\`\`

### Step 3: Set Environment Variables in Vercel
1. Go to Vercel dashboard
2. Select project
3. Settings → Environment Variables
4. Add all variables from `.env.local`
5. Redeploy

### Step 4: Test Live Demo
1. Visit your Vercel URL
2. Test complete flow:
   - Connect wallet
   - Deposit
   - Withdraw
   - Check analytics
3. **Record demo video** (2-3 mins showing full flow)

---

## PHASE 7: SUBMISSION PACKAGE (1.5 hours)

### Step 1: Create Demo Video
Using Loom or similar:
1. Show landing page
2. Connect wallet
3. Deposit funds
4. Show balance update
5. Show transaction history
6. Show analytics
7. Withdraw funds
8. Show final state

**Upload to:** YouTube (unlisted) or Loom

### Step 2: Finalize Pitch Deck
1. Update with live demo URL
2. Add actual founder names/bios
3. Add team travel plan
4. Export as PDF

### Step 3: Create Submission Package
Folder structure:
\`\`\`
tesoro-submission/
├── pitch-deck.pdf
├── github-link.txt (link to repo)
├── demo-video-link.txt (link to Loom/YouTube)
├── founder-bios.md
├── team-travel-plan.md
├── live-demo-url.txt
└── README.md
\`\`\`

### Step 4: Submit to Startup World Cup
1. Go to https://www.startupworldcup.com/
2. Click "Apply"
3. Fill in all fields
4. Upload pitch deck
5. Provide GitHub link
6. Provide demo video link
7. Submit

---

## SUCCESS CRITERIA

✅ **Technical:**
- Smart contract deployed on Sepolia
- All transactions work (deposit, withdraw, rebalance)
- Real-time balance updates
- Transaction history populated
- Analytics showing real data
- No console errors
- Mobile responsive

✅ **Product:**
- Landing page professional and compelling
- Dashboard intuitive and functional
- All modals work smoothly
- Navigation seamless
- Loading states visible
- Error handling in place

✅ **Submission:**
- Pitch deck professional and compelling
- GitHub repo clean and well-documented
- Demo video shows complete flow
- Founder bios complete
- Team travel plan included
- All requirements met

---

## TROUBLESHOOTING

### Issue: Wallet won't connect
**Solution:** 
- Check WalletConnect Project ID is correct
- Ensure Sepolia is added to MetaMask
- Clear browser cache and try again

### Issue: Deposit transaction fails
**Solution:**
- Verify you have testnet ETH for gas
- Check contract address is correct
- Ensure USDC mock is deployed
- Check approval transaction succeeded first

### Issue: Balance not updating
**Solution:**
- Refresh page
- Check contract address in `lib/contracts.ts`
- Verify transaction was confirmed on blockchain
- Check Alchemy API key is correct

### Issue: Analytics showing no data
**Solution:**
- Ensure transactions are confirmed
- Check API route is working
- Verify The Graph query is correct
- Check browser console for errors

---

## FINAL CHECKLIST

Before submission:
- [ ] Smart contract deployed and verified
- [ ] All environment variables set
- [ ] Live demo URL working
- [ ] Demo video recorded and uploaded
- [ ] Pitch deck finalized
- [ ] GitHub repo public and clean
- [ ] Founder bios complete
- [ ] Team travel plan included
- [ ] All requirements met
- [ ] Submission form filled out
- [ ] Application submitted

---

## PROMPTS FOR CLAUDE

### Prompt 1: Deploy Smart Contract
"Deploy the TesoroVault smart contract to Sepolia testnet. Use the hardhat deployment script. Return the contract address and USDC mock address."

### Prompt 2: Integrate Blockchain
"Integrate the deployed smart contract address into the frontend. Update all Web3 calls to use real blockchain data instead of mock data. Ensure deposit, withdraw, and rebalance transactions work."

### Prompt 3: Create API Routes
"Create API routes for /api/transactions, /api/analytics, and /api/user/stats. These should fetch real data from the blockchain using Alchemy API or The Graph."

### Prompt 4: Test Complete Flow
"Test the complete user flow: connect wallet → deposit → withdraw → check analytics. Verify all transactions succeed and data updates correctly."

### Prompt 5: Deploy to Vercel
"Deploy the application to Vercel with all environment variables set. Ensure the live demo works end-to-end on testnet."

---

## TIME ALLOCATION

- Phase 1 (Setup): 30 mins
- Phase 2 (Smart Contract): 45 mins
- Phase 3 (Frontend): 2 hours
- Phase 4 (APIs): 1 hour
- Phase 5 (Testing): 1.5 hours
- Phase 6 (Deployment): 45 mins
- Phase 7 (Submission): 1.5 hours

**Total: 8 hours** (2 hours buffer for troubleshooting)

---

## RESOURCES

- Hardhat Docs: https://hardhat.org/
- Wagmi Docs: https://wagmi.sh/
- Alchemy Docs: https://docs.alchemy.com/
- The Graph: https://thegraph.com/
- Vercel Docs: https://vercel.com/docs
- Sepolia Faucet: https://www.alchemy.com/faucets/ethereum-sepolia

---

**YOU'VE GOT THIS! 🚀**

This is a complete, testnet-ready MVP. Once Claude follows these steps, Tesoro will be live and ready for submission.

Good luck at Startup World Cup!

# Tesoro - Automated Treasury Yield for SMEs

![Tesoro Banner](https://via.placeholder.com/1200x400/0066FF/FFFFFF?text=Tesoro+-+Treasury+Management+Reimagined)

## Overview

Tesoro is an automated treasury management platform that helps SMEs earn 5-10% APY on idle business funds through yield-bearing stablecoins. Built for Devconnect Buenos Aires 2024.

## The Problem

Small and medium-sized businesses, especially in emerging markets like Argentina, face:
- **Inflation erosion**: Cash loses value daily (40%+ inflation in Argentina)
- **Zero yield**: Traditional business accounts earn 0-1% interest
- **Limited access**: Complex DeFi protocols are inaccessible to non-technical founders
- **Opportunity cost**: $12M+ in idle cash across SMEs earning nothing

## Our Solution

Tesoro provides one-click treasury management:
1. **Deposit** stablecoins (USDC, USDT, DAI)
2. **Auto-route** to highest-yielding DeFi protocols
3. **Earn** 5-10% APY with full liquidity
4. **Withdraw** anytime with no penalties

## Key Features

- **Automated Yield Routing**: Smart contracts automatically allocate funds to highest-yielding protocols
- **Bank-Grade Security**: Multi-signature wallets, audited contracts, institutional custody
- **Real-Time Analytics**: Track yields, deposits, and returns with comprehensive dashboards
- **Full Liquidity**: Withdraw anytime with no lock-up periods
- **Transparent Fees**: 10% of yield generated, no hidden charges

## Market Opportunity

- **TAM**: $2.3T in SME idle cash globally
- **Argentina**: $91.1B crypto market, highest LATAM adoption
- **Timing**: Argentina legalized asset tokenization (2024)
- **Revenue**: $99-$999/mo per business (B2B SaaS)

## Technology Stack

- **Frontend**: Next.js 16, React 19, TailwindCSS v4
- **Smart Contracts**: Solidity, OpenZeppelin
- **Blockchain**: Ethereum, Polygon, Arbitrum
- **DeFi Protocols**: Aave, Compound, Yearn, Curve

## Business Model

- **Revenue**: 10% of yield generated (0.5-1% of AUM annually)
- **Target**: 1,000 businesses × $100K average = $100M AUM
- **Annual Revenue**: $1M+ at scale
- **Unit Economics**: 90%+ gross margin, $50 CAC, $1,200 LTV

## Competitive Advantages

1. **First Mover**: No direct competitor in LATAM SME treasury space
2. **Local Expertise**: Built for emerging markets with high inflation
3. **Simple UX**: Non-technical founders can use in 2 minutes
4. **Regulatory Compliant**: Aligned with Argentina's new crypto regulations

## Roadmap

**Phase 1 (Q4 2024)**: MVP launch, 50 pilot businesses
**Phase 2 (Q1 2025)**: Multi-chain support, 500 businesses
**Phase 3 (Q2 2025)**: Fiat on/off ramps, 2,000 businesses
**Phase 4 (Q3 2025)**: Enterprise features, 5,000+ businesses

## Team

**[Founder 1 Name]** - CEO
- Background in fintech and blockchain
- Previously at [Company]
- Expert in emerging markets

**[Founder 2 Name]** - CTO
- Full-stack blockchain developer
- Built DeFi protocols with $10M+ TVL
- Smart contract security specialist

## Getting Started

### Quick Start (6 Hours to Live)

See [QUICK_START.md](./QUICK_START.md) for rapid deployment guide.

### Installation

\`\`\`bash
# Clone the repository
git clone https://github.com/your-username/tesoro.git

# Install dependencies
cd tesoro
npm install

# Copy environment variables
cp .env.example .env.local
\`\`\`

### Environment Variables

Create `.env.local` with:

\`\`\`env
# WalletConnect (Required)
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=your_project_id_here

# Alchemy RPC (Recommended)
SEPOLIA_RPC_URL=https://eth-sepolia.g.alchemy.com/v2/your_key_here

# Contract Deployment
PRIVATE_KEY=your_private_key_here
ETHERSCAN_API_KEY=your_etherscan_key_here
\`\`\`

**Get API Keys:**
- WalletConnect: https://cloud.walletconnect.com/
- Alchemy: https://www.alchemy.com/
- Etherscan: https://etherscan.io/myapikey

### Deploy Smart Contracts

\`\`\`bash
# Compile contracts
npm run compile

# Deploy to Sepolia testnet
npm run deploy:sepolia

# Verify contract on Etherscan
npm run verify:sepolia CONTRACT_ADDRESS
\`\`\`

**After deployment:**
1. Copy contract address from terminal
2. Update `lib/contracts.ts`:
   \`\`\`typescript
   export const TESORO_VAULT_ADDRESS = "0xYourContractAddress"
   \`\`\`

### Get Testnet Tokens

**Sepolia ETH:**
- https://sepoliafaucet.com/
- https://www.infura.io/faucet/sepolia

**Testnet USDC:**
- https://staging.aave.com/faucet/
- Request 10,000 USDC for testing

### Run Development Server

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000)

### Deploy to Production

**Option 1: Deploy from v0**
1. Click "Publish" button in v0
2. Add environment variables
3. Deploy to Vercel

**Option 2: Deploy from GitHub**
\`\`\`bash
# Push to GitHub
git push origin main

# Deploy on Vercel
vercel --prod
\`\`\`

## Documentation

- [Complete Setup Guide](./COMPLETE_SETUP_GUIDE.md) - Detailed deployment instructions
- [Quick Start](./QUICK_START.md) - 6-hour rapid deployment
- [Pitch Deck](./PITCH_DECK.md) - Investor presentation
- [Application Guide](./APPLICATION_GUIDE.md) - Submission materials

---

**Built with ❤️ for SMEs in emerging markets**

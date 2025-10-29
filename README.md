# Tesoro — Automated Treasury Yield for SMEs

![Tesoro Banner](https://via.placeholder.com/1200x400/0066FF/FFFFFF?text=Tesoro+-+Treasury+Management+Reimagined)

## Overview

Tesoro is an automated treasury management platform that helps SMEs earn yield on idle business funds via yield-bearing stablecoins. The product provides simple deposit/withdraw flows, real-time portfolio analytics, and automated allocation across supported DeFi protocols.

## Key Features

- **Automated yield routing**: Smart contracts route funds to the highest-yielding supported protocol(s).
- **Secure by design**: Built on audited OpenZeppelin primitives with a minimal, reviewable surface area.
- **Real-time analytics**: Portfolio balance, yield earned, allocations, and recent transactions.
- **Full liquidity**: Withdraw anytime without lockups.
- **Transparent fees**: Clear, simple fee model suitable for SMEs.

## Architecture

- **Frontend**: Next.js App Router (React 19, TailwindCSS v4)
- **Web3**: wagmi + WalletConnect, targeting `sepolia` and `baseSepolia`
- **Contracts**: Solidity (Hardhat), OpenZeppelin contracts
- **Data viz**: Recharts for charts and analytics

```
App Router → Providers (wagmi + React Query) → Pages (Dashboard/Analytics/Transactions)
           → UI components (modals, charts, tables)
           → wagmi hooks → TesoroVault contract (deposit/withdraw/read)
```

## Repository Structure

- `app/` — Next.js routes and layout
- `components/` — UI and dashboard components
- `hooks/` — React hooks
- `lib/` — web3 config, ABIs/addresses, utilities
- `contracts/` — Solidity contracts
- `scripts/` — Hardhat deployment/verification scripts
- `docs/` — product and deployment documentation

## Tech Stack

- Next.js 15, React 19, TailwindCSS v4
- wagmi, viem, WalletConnect
- Hardhat, Ethers, OpenZeppelin
- Recharts

## Prerequisites

- Node.js 18+
- npm 9+
- WalletConnect Project ID
- RPC provider (e.g., Alchemy) for Sepolia

## Setup

```bash
# Clone
git clone https://github.com/your-username/tesoro.git
cd tesoro

# Install
npm install

# Configure environment
cp .env.example .env.local
```

Create `.env.local` with:

```env
# WalletConnect (Required)
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=your_project_id_here

# RPC (Recommended)
SEPOLIA_RPC_URL=https://eth-sepolia.g.alchemy.com/v2/your_key_here

# Contract Deployment
PRIVATE_KEY=your_private_key_here
ETHERSCAN_API_KEY=your_etherscan_key_here
```

Helpful links: `https://cloud.walletconnect.com`, `https://www.alchemy.com`, `https://etherscan.io/myapikey`

## Development

```bash
# Run dev server
npm run dev

# Build
npm run build

# Start (production)
npm run start
```

Open http://localhost:3000

## Smart Contracts

Compile and deploy to Sepolia:

```bash
# Compile
npm run compile

# Deploy
npm run deploy:sepolia

# Verify
npm run verify:sepolia CONTRACT_ADDRESS
```

After deployment, update the frontend address in `lib/contracts.ts`:

```ts
export const TESORO_VAULT_ADDRESS = "0xYourContractAddress"
```

Note: The included `scripts/deploy.ts` and `scripts/deploy-contract.ts` demonstrate two deployment patterns. Ensure the constructor/signature you use matches your final `contracts/TesoroVault.sol` implementation and keep `lib/contracts.ts` ABI consistent with the contract.

### Testnet Tokens

- Sepolia ETH: `https://sepoliafaucet.com`, `https://www.infura.io/faucet/sepolia`
- Testnet USDC: `https://staging.aave.com/faucet/`

## Deployment (Vercel)

```bash
# Push to GitHub
git push origin main

# Deploy
vercel --prod
```

Configure the following environment variables in your hosting provider:

- `NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID`
- `SEPOLIA_RPC_URL`

## Security & Notes

- The included Solidity file is a scaffold; integrate full logic and audits before mainnet use.
- Always test on testnets prior to mainnet deployment.
- Never commit private keys or secrets. Use environment variables/secret managers.

## Roadmap (indicative)

- MVP on testnet with deposit/withdraw and basic analytics
- Multi-chain support and protocol integrations (Aave, Compound, Yearn)
- Admin controls, monitoring, and automated rebalancing

## Documentation

- [Complete Setup Guide](./docs/COMPLETE_SETUP_GUIDE.md)
- [Quick Start](./docs/QUICK_START.md)
- [Pitch Deck](./docs/PITCH_DECK.md)
- [Application Guide](./docs/APPLICATION_GUIDE.md)

## Contributing

PRs are welcome. Please open an issue for significant changes to discuss scope and approach.

## License

Proprietary — All rights reserved (update if you choose an open-source license).

---

Built for SMEs in emerging markets.

# Tesoro - Complete User Journey

## New User Flow

### 1. Landing Page (/)
**User arrives at homepage**
- Sees hero section with value proposition
- Reads about features and benefits
- Views "How It Works" section
- Sees social proof and stats
- **Action:** Clicks "Launch App" or "Get Started"

### 2. Dashboard - Not Connected (/dashboard)
**User arrives at dashboard without wallet**
- Sees ConnectWallet component with clear CTA
- Reads benefits of connecting
- **Action:** Clicks "Connect Wallet"
- Wallet modal opens (MetaMask, WalletConnect, Coinbase Wallet)
- Selects wallet provider
- Approves connection in wallet
- **Result:** Wallet connected, dashboard loads

### 3. Dashboard - Connected (First Time)
**User sees dashboard with $0 balance**
- Header shows: Tesoro logo, navigation (Dashboard, Transactions, Analytics), wallet address
- Balance cards show:
  - Total Balance: $0
  - Total Yield: $0
  - Current APY: 0%
  - Total Deposited: $0
- Quick Actions: Deposit, Withdraw, Rebalance, Analytics buttons
- Yield Chart: Empty state or placeholder
- Protocol Allocation: Empty state
- Transaction History: "No transactions yet"

### 4. First Deposit
**User wants to deposit funds**
- **Action:** Clicks "Deposit" button in Quick Actions
- Deposit modal opens
- Shows:
  - USDC balance in wallet (reads from blockchain)
  - Input field for amount
  - Current APY: 7.8%
  - Estimated yearly yield calculation
- **User enters amount:** e.g., 1000 USDC
- **Step 1 - Approve:**
  - Clicks "Approve USDC"
  - Wallet popup appears
  - Confirms approval transaction
  - Button shows "Approving..." with loading state
  - Transaction confirms
  - Button changes to "Deposit"
- **Step 2 - Deposit:**
  - Clicks "Deposit"
  - Wallet popup appears
  - Confirms deposit transaction
  - Button shows "Depositing..." with loading state
  - Transaction confirms
  - Success message appears
  - Modal closes after 2 seconds
- **Result:** Dashboard updates with new balance

### 5. Dashboard - After Deposit
**User sees updated dashboard**
- Balance cards update:
  - Total Balance: $1,000
  - Total Yield: $0 (will accumulate over time)
  - Current APY: 7.8%
  - Total Deposited: $1,000
- Yield Chart: Shows starting point
- Protocol Allocation: Shows distribution (e.g., 60% Aave, 40% Compound)
- Transaction History: Shows deposit transaction with:
  - Type: Deposit
  - Amount: +1,000 USDC
  - Protocol: Aave V3
  - Timestamp: "Just now"
  - Etherscan link

### 6. Exploring Other Pages
**User navigates to Transactions**
- **Action:** Clicks "Transactions" in header
- Sees full transaction history page
- Each transaction shows:
  - Icon (deposit/withdraw/rebalance)
  - Type and status badge
  - Protocol name
  - Amount with +/- indicator
  - Timestamp
  - Etherscan link
- **Action:** Clicks Etherscan link → opens in new tab

**User navigates to Analytics**
- **Action:** Clicks "Analytics" in header
- Sees analytics dashboard with:
  - 4 stat cards: Total Yield Earned, Average APY, Total Deposits, Days Active
  - Yield Chart: 30-day performance
  - Protocol Allocation: Pie chart
  - Performance Insights: AI-generated recommendations
- Reviews performance metrics
- Sees optimization suggestions

### 7. Rebalancing Funds
**User wants to optimize yield**
- **Action:** Returns to dashboard, clicks "Rebalance"
- Rebalance modal opens
- Selects:
  - From Protocol: Compound (7.5% APY)
  - To Protocol: Aave V3 (8.2% APY)
  - Amount: 500 USDC
- Sees APY change preview: 7.5% → 8.2%
- **Action:** Clicks "Rebalance Funds"
- Wallet popup appears
- Confirms transaction
- Loading state: "Rebalancing..."
- Success message appears
- Modal closes
- **Result:** Protocol allocation updates

### 8. Withdrawing Funds
**User needs to withdraw**
- **Action:** Clicks "Withdraw" in Quick Actions
- Withdraw modal opens
- Shows:
  - Available balance: $1,000
  - Input field for amount
  - Withdrawal fee: 0%
- **User enters amount:** e.g., 500 USDC
- **Action:** Clicks "Withdraw"
- Wallet popup appears
- Confirms transaction
- Button shows "Withdrawing..." with loading state
- Transaction confirms
- Success message appears
- Modal closes
- **Result:** Balance updates to $500, USDC sent to wallet

### 9. Disconnecting
**User finishes session**
- **Action:** Clicks wallet address in header
- Dropdown shows: Address, Disconnect button
- Clicks "Disconnect"
- Wallet disconnects
- Returns to ConnectWallet screen

---

## Returning User Flow

### 1. Direct to Dashboard
**User bookmarks /dashboard or returns to site**
- Wallet auto-connects (if previously connected)
- Dashboard loads immediately with current balance
- Sees accumulated yield since last visit

### 2. Quick Check
**User reviews performance**
- Checks balance cards for yield growth
- Views yield chart for trend
- Checks transaction history for recent activity

### 3. Regular Actions
**User performs routine operations**
- Deposits more funds when available
- Withdraws when needed
- Rebalances based on APY changes
- Monitors analytics for optimization

---

## Key User Experience Features

### Visual Feedback
- Loading states on all buttons during transactions
- Success messages after completed actions
- Error messages if transactions fail
- Real-time balance updates
- Smooth animations and transitions

### Error Handling
- "Insufficient balance" warning if trying to deposit/withdraw more than available
- "Transaction failed" message with retry option
- "Wallet not connected" prompt if connection drops
- Network error handling with user-friendly messages

### Mobile Experience
- Responsive design works on all screen sizes
- Touch-friendly buttons and inputs
- Simplified navigation on mobile
- Modal dialogs adapt to mobile screens

### Empty States
- "No transactions yet" when transaction history is empty
- "Connect wallet to get started" on dashboard
- Placeholder charts when no data available
- Clear CTAs to guide next steps

### Performance
- Fast page loads
- Instant navigation between pages
- Real-time blockchain data updates
- Optimistic UI updates (show changes before blockchain confirmation)

---

## Technical Flow (Behind the Scenes)

### Wallet Connection
1. User clicks "Connect Wallet"
2. RainbowKit modal opens
3. User selects wallet (MetaMask, WalletConnect, etc.)
4. Wallet prompts for connection approval
5. User approves
6. Wagmi stores connection state
7. Dashboard reads wallet address via `useAccount()`
8. Components query blockchain data via `useReadContract()`

### Deposit Transaction
1. User enters amount in modal
2. Component reads USDC balance via `useReadContract()`
3. User clicks "Approve USDC"
4. `useWriteContract()` calls USDC.approve(vaultAddress, amount)
5. Wallet prompts for signature
6. User confirms
7. Transaction sent to blockchain
8. `useWaitForTransactionReceipt()` waits for confirmation
9. Approval confirmed
10. User clicks "Deposit"
11. `useWriteContract()` calls Vault.deposit(amount)
12. Wallet prompts for signature
13. User confirms
14. Transaction sent to blockchain
15. `useWaitForTransactionReceipt()` waits for confirmation
16. Deposit confirmed
17. Balance updates via `useReadContract()` re-query

### Withdraw Transaction
1. User enters amount in modal
2. Component reads vault balance via `useReadContract()`
3. User clicks "Withdraw"
4. `useWriteContract()` calls Vault.withdraw(amount)
5. Wallet prompts for signature
6. User confirms
7. Transaction sent to blockchain
8. `useWaitForTransactionReceipt()` waits for confirmation
9. Withdrawal confirmed
10. USDC transferred to user's wallet
11. Balance updates via `useReadContract()` re-query

---

## Success Metrics

### User Onboarding
- Time from landing page to first deposit: < 5 minutes
- Wallet connection success rate: > 95%
- First deposit completion rate: > 80%

### User Engagement
- Average session duration: > 3 minutes
- Pages per session: > 3
- Return user rate: > 60%

### Transaction Success
- Transaction completion rate: > 95%
- Average transaction time: < 30 seconds
- Error rate: < 5%

### User Satisfaction
- Clear value proposition understanding: > 90%
- Ease of use rating: > 4.5/5
- Would recommend to others: > 80%

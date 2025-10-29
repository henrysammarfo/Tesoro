"use client"

import { useAccount } from "wagmi"
import { DashboardHeader } from "@/components/dashboard/header"
import { BalanceCard } from "@/components/dashboard/balance-card"
import { YieldChart } from "@/components/dashboard/yield-chart"
import { QuickActions } from "@/components/dashboard/quick-actions"
import { TransactionHistory } from "@/components/dashboard/transaction-history"
import { ProtocolAllocation } from "@/components/dashboard/protocol-allocation"
import { ConnectWallet } from "@/components/dashboard/connect-wallet"

export default function DashboardPage() {
  const { isConnected } = useAccount()

  if (!isConnected) {
    return <ConnectWallet />
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Balance Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <BalanceCard />
        </div>

        {/* Quick Actions */}
        <QuickActions />

        {/* Charts and Allocation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <YieldChart />
          <ProtocolAllocation />
        </div>

        {/* Transaction History */}
        <TransactionHistory />
      </main>
    </div>
  )
}

"use client"

import { DashboardHeader } from "@/components/dashboard/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowDownToLine, ArrowUpFromLine, ExternalLink } from "lucide-react"

export default function TransactionsPage() {
  const transactions = [
    {
      id: 1,
      type: "deposit",
      amount: "5,000",
      token: "USDC",
      protocol: "Aave V3",
      apy: "8.2%",
      timestamp: "2 hours ago",
      hash: "0x742d35cb...",
      status: "completed",
    },
    {
      id: 2,
      type: "withdraw",
      amount: "1,200",
      token: "USDC",
      protocol: "Compound",
      apy: "7.5%",
      timestamp: "1 day ago",
      hash: "0x8f3a21bc...",
      status: "completed",
    },
    {
      id: 3,
      type: "deposit",
      amount: "3,500",
      token: "USDC",
      protocol: "Aave V3",
      apy: "8.2%",
      timestamp: "3 days ago",
      hash: "0x5c9d47ef...",
      status: "completed",
    },
    {
      id: 4,
      type: "rebalance",
      amount: "2,000",
      token: "USDC",
      protocol: "Aave V3 → Compound",
      apy: "7.5% → 8.2%",
      timestamp: "5 days ago",
      hash: "0x1a2b3c4d...",
      status: "completed",
    },
    {
      id: 5,
      type: "deposit",
      amount: "10,000",
      token: "USDC",
      protocol: "Compound",
      apy: "7.5%",
      timestamp: "1 week ago",
      hash: "0x9e8f7d6c...",
      status: "completed",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Transaction History</h1>
          <p className="text-gray-600">View all your deposits, withdrawals, and rebalancing activities</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {transactions.map((tx) => (
                <div
                  key={tx.id}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        tx.type === "deposit" ? "bg-green-100" : tx.type === "withdraw" ? "bg-red-100" : "bg-blue-100"
                      }`}
                    >
                      {tx.type === "deposit" ? (
                        <ArrowDownToLine className="w-5 h-5 text-green-600" />
                      ) : tx.type === "withdraw" ? (
                        <ArrowUpFromLine className="w-5 h-5 text-red-600" />
                      ) : (
                        <ArrowDownToLine className="w-5 h-5 text-blue-600" />
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-gray-900 capitalize">{tx.type}</span>
                        <Badge variant="secondary">{tx.status}</Badge>
                      </div>
                      <p className="text-sm text-gray-600">{tx.protocol}</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="font-semibold text-gray-900">
                      {tx.type === "withdraw" ? "-" : "+"}
                      {tx.amount} {tx.token}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span>{tx.timestamp}</span>
                      <a
                        href={`https://sepolia.etherscan.io/tx/${tx.hash}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 flex items-center gap-1"
                      >
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

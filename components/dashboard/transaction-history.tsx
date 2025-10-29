"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDownToLine, ArrowUpFromLine, RefreshCw } from "lucide-react"

export function TransactionHistory() {
  const transactions = [
    {
      id: "1",
      type: "deposit" as const,
      amount: "$5,000.00",
      token: "USDC",
      date: "Oct 27, 2024 2:30 PM",
      status: "completed",
      hash: "0x1234...5678",
    },
    {
      id: "2",
      type: "yield" as const,
      amount: "$42.50",
      token: "USDC",
      date: "Oct 26, 2024 12:00 PM",
      status: "completed",
      hash: "0x2345...6789",
    },
    {
      id: "3",
      type: "deposit" as const,
      amount: "$10,000.00",
      token: "USDC",
      date: "Oct 25, 2024 9:15 AM",
      status: "completed",
      hash: "0x3456...7890",
    },
    {
      id: "4",
      type: "withdraw" as const,
      amount: "$2,500.00",
      token: "USDC",
      date: "Oct 24, 2024 4:45 PM",
      status: "completed",
      hash: "0x4567...8901",
    },
    {
      id: "5",
      type: "yield" as const,
      amount: "$38.20",
      token: "USDC",
      date: "Oct 23, 2024 12:00 PM",
      status: "completed",
      hash: "0x5678...9012",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((tx) => (
            <div key={tx.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
              <div className="flex items-center gap-4">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    tx.type === "deposit" ? "bg-blue-100" : tx.type === "withdraw" ? "bg-orange-100" : "bg-green-100"
                  }`}
                >
                  {tx.type === "deposit" && <ArrowDownToLine className="w-5 h-5 text-blue-600" />}
                  {tx.type === "withdraw" && <ArrowUpFromLine className="w-5 h-5 text-orange-600" />}
                  {tx.type === "yield" && <RefreshCw className="w-5 h-5 text-green-600" />}
                </div>
                <div>
                  <div className="font-medium text-gray-900 capitalize">{tx.type}</div>
                  <div className="text-sm text-gray-600">{tx.date}</div>
                </div>
              </div>
              <div className="text-right">
                <div className={`font-semibold ${tx.type === "withdraw" ? "text-gray-900" : "text-green-600"}`}>
                  {tx.amount}
                </div>
                <a
                  href={`https://sepolia.etherscan.io/tx/${tx.hash}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-600 hover:underline"
                >
                  View on Etherscan
                </a>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

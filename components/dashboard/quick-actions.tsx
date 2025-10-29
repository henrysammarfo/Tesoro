"use client"

import { Button } from "@/components/ui/button"
import { ArrowDownToLine, ArrowUpFromLine, RefreshCw, BarChart3 } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { DepositModal } from "./deposit-modal"
import { WithdrawModal } from "./withdraw-modal"
import { RebalanceModal } from "./rebalance-modal"

export function QuickActions() {
  const router = useRouter()
  const [depositOpen, setDepositOpen] = useState(false)
  const [withdrawOpen, setWithdrawOpen] = useState(false)
  const [rebalanceOpen, setRebalanceOpen] = useState(false)

  return (
    <>
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Button className="h-auto py-4 flex-col gap-2" onClick={() => setDepositOpen(true)}>
            <ArrowDownToLine className="w-5 h-5" />
            <span>Deposit</span>
          </Button>
          <Button
            variant="outline"
            className="h-auto py-4 flex-col gap-2 bg-transparent"
            onClick={() => setWithdrawOpen(true)}
          >
            <ArrowUpFromLine className="w-5 h-5" />
            <span>Withdraw</span>
          </Button>
          <Button
            variant="outline"
            className="h-auto py-4 flex-col gap-2 bg-transparent"
            onClick={() => setRebalanceOpen(true)}
          >
            <RefreshCw className="w-5 h-5" />
            <span>Rebalance</span>
          </Button>
          <Button
            variant="outline"
            className="h-auto py-4 flex-col gap-2 bg-transparent"
            onClick={() => router.push("/analytics")}
          >
            <BarChart3 className="w-5 h-5" />
            <span>Analytics</span>
          </Button>
        </div>
      </div>

      <DepositModal open={depositOpen} onOpenChange={setDepositOpen} />
      <WithdrawModal open={withdrawOpen} onOpenChange={setWithdrawOpen} />
      <RebalanceModal open={rebalanceOpen} onOpenChange={setRebalanceOpen} />
    </>
  )
}

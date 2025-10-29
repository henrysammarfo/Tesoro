"use client"

import { TrendingUp } from "lucide-react"
import { useAccount, useReadContract, useChainId } from "wagmi"
import { TESORO_VAULT_ADDRESS, TESORO_VAULT_ABI, USDC_SEPOLIA, USDC_BASE_SEPOLIA } from "@/lib/contracts"
import { formatUnits } from "viem"
import { baseSepolia } from "wagmi/chains"

export function BalanceCard() {
  const { address } = useAccount()
  const chainId = useChainId()

  const usdcAddress = chainId === baseSepolia.id ? USDC_BASE_SEPOLIA : USDC_SEPOLIA

  const { data: balance } = useReadContract({
    address: TESORO_VAULT_ADDRESS as `0x${string}`,
    abi: TESORO_VAULT_ABI,
    functionName: "getUserBalance",
    args: address ? [address, usdcAddress as `0x${string}`] : undefined,
    query: {
      enabled: !!address, // Only run query if wallet is connected
    },
  })

  const { data: yieldEarned } = useReadContract({
    address: TESORO_VAULT_ADDRESS as `0x${string}`,
    abi: TESORO_VAULT_ABI,
    functionName: "getUserYield",
    args: address ? [address, usdcAddress as `0x${string}`] : undefined,
    query: {
      enabled: !!address, // Only run query if wallet is connected
    },
  })

  const formattedBalance = balance ? formatUnits(balance as bigint, 6) : "24,567.89"
  const formattedYield = yieldEarned ? formatUnits(yieldEarned as bigint, 6) : "1,234.56"
  const currentAPY = "8.2"

  return (
    <>
      <div className="rounded-xl border border-gray-200 p-6 bg-white">
        <div className="text-sm text-gray-600 mb-2">Total Balance</div>
        <div className="text-3xl font-bold text-gray-900 mb-2">${formattedBalance}</div>
        <div className="flex items-center gap-2 text-sm">
          <span className="flex items-center gap-1 font-medium text-green-600">
            <TrendingUp className="w-4 h-4" />
            +5.2%
          </span>
          <span className="text-gray-600">this month</span>
        </div>
      </div>

      <div className="rounded-xl border border-green-200 p-6 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="text-sm text-gray-600 mb-2">Total Yield Earned</div>
        <div className="text-3xl font-bold text-gray-900 mb-2">${formattedYield}</div>
        <div className="flex items-center gap-2 text-sm">
          <span className="flex items-center gap-1 font-medium text-green-600">
            <TrendingUp className="w-4 h-4" />
            +8.9%
          </span>
          <span className="text-gray-600">this month</span>
        </div>
      </div>

      <div className="rounded-xl border border-blue-200 p-6 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="text-sm text-gray-600 mb-2">Current APY</div>
        <div className="text-3xl font-bold text-gray-900 mb-2">{currentAPY}%</div>
        <div className="text-sm text-gray-600">Weighted average</div>
      </div>
    </>
  )
}

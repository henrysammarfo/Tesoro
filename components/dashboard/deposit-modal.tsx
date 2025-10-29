"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight, Wallet, Loader2, CheckCircle2 } from "lucide-react"
import { useAccount, useWriteContract, useReadContract, useWaitForTransactionReceipt } from "wagmi"
import { parseUnits, formatUnits } from "viem"
import { TESORO_VAULT_ADDRESS, TESORO_VAULT_ABI, USDC_SEPOLIA, ERC20_ABI } from "@/lib/contracts"

interface DepositModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function DepositModal({ open, onOpenChange }: DepositModalProps) {
  const [amount, setAmount] = useState("")
  const { address } = useAccount()

  const { data: usdcBalance } = useReadContract({
    address: USDC_SEPOLIA,
    abi: ERC20_ABI,
    functionName: "balanceOf",
    args: address ? [address] : undefined,
  })

  const { writeContract: approveUsdc, data: approveHash, isPending: isApproving } = useWriteContract()

  const { writeContract: depositToVault, data: depositHash, isPending: isDepositing } = useWriteContract()

  const { isSuccess: isApproveSuccess } = useWaitForTransactionReceipt({
    hash: approveHash,
  })

  const { isSuccess: isDepositSuccess } = useWaitForTransactionReceipt({
    hash: depositHash,
  })

  const formattedBalance = usdcBalance ? formatUnits(usdcBalance, 6) : "0.00"
  const estimatedYield = amount ? (Number.parseFloat(amount) * 0.082).toFixed(2) : "0.00"

  const handleDeposit = async () => {
    if (!amount || Number.parseFloat(amount) <= 0 || !address) return

    const amountInWei = parseUnits(amount, 6)

    if (!isApproveSuccess) {
      approveUsdc({
        address: USDC_SEPOLIA,
        abi: ERC20_ABI,
        functionName: "approve",
        args: [TESORO_VAULT_ADDRESS, amountInWei],
      })
      return
    }

    depositToVault({
      address: TESORO_VAULT_ADDRESS,
      abi: TESORO_VAULT_ABI,
      functionName: "deposit",
      args: [USDC_SEPOLIA, amountInWei],
    })
  }

  if (isDepositSuccess && open) {
    setTimeout(() => {
      onOpenChange(false)
      setAmount("")
    }, 2000)
  }

  const isLoading = isApproving || isDepositing
  const isSuccess = isDepositSuccess

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Deposit Funds</DialogTitle>
          <DialogDescription>Deposit USDC to start earning yield automatically</DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Balance Display */}
          <div className="space-y-2">
            <Label>Your USDC Balance</Label>
            <div className="p-3 rounded-lg border-2 border-gray-200 bg-gray-50">
              <div className="font-semibold text-lg">{formattedBalance} USDC</div>
              <div className="text-xs text-gray-600">Available to deposit</div>
            </div>
          </div>

          {/* Amount Input */}
          <div className="space-y-2">
            <Label htmlFor="amount">Amount</Label>
            <div className="relative">
              <Input
                id="amount"
                type="number"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="text-lg pr-20"
                disabled={isLoading || isSuccess}
              />
              <button
                className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-medium text-blue-600 hover:text-blue-700 disabled:opacity-50"
                onClick={() => setAmount(formattedBalance)}
                disabled={isLoading || isSuccess}
              >
                MAX
              </button>
            </div>
          </div>

          {/* Yield Estimate */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Estimated Annual Yield</span>
              <span className="text-sm font-medium text-gray-900">8.2% APY</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">You'll earn approximately</span>
              <span className="text-lg font-bold text-green-600">${estimatedYield}</span>
            </div>
            <div className="text-xs text-gray-500 mt-2">Per year • Compounded daily • Withdraw anytime</div>
          </div>

          {/* Success Message */}
          {isSuccess && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center flex items-center justify-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <div>
                <div className="text-green-600 font-semibold">Deposit Successful!</div>
                <div className="text-sm text-gray-600">Your funds are now earning yield</div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1"
              disabled={isLoading || isSuccess}
            >
              Cancel
            </Button>
            <Button
              className="flex-1 gap-2"
              disabled={!amount || Number.parseFloat(amount) <= 0 || isLoading || isSuccess || !address}
              onClick={handleDeposit}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  {isApproving ? "Approving..." : "Depositing..."}
                </>
              ) : (
                <>
                  Deposit <ArrowRight className="w-4 h-4" />
                </>
              )}
            </Button>
          </div>

          {/* Info */}
          <div className="flex items-start gap-2 text-xs text-gray-600 bg-gray-50 p-3 rounded-lg">
            <Wallet className="w-4 h-4 mt-0.5 flex-shrink-0" />
            <p>
              Your funds will be automatically routed to the highest-yielding protocols. You maintain full custody and
              can withdraw anytime.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight, AlertCircle, Loader2, CheckCircle2 } from "lucide-react"
import { useAccount, useWriteContract, useWaitForTransactionReceipt, useReadContract, useChainId } from "wagmi"
import { TESORO_VAULT_ADDRESS, TESORO_VAULT_ABI, USDC_SEPOLIA, USDC_BASE_SEPOLIA } from "@/lib/contracts"
import { parseUnits, formatUnits } from "viem"
import { baseSepolia } from "wagmi/chains"

interface WithdrawModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function WithdrawModal({ open, onOpenChange }: WithdrawModalProps) {
  const [amount, setAmount] = useState("")
  const { address } = useAccount()
  const chainId = useChainId()

  const usdcAddress = chainId === baseSepolia.id ? USDC_BASE_SEPOLIA : USDC_SEPOLIA

  const { data: vaultBalance } = useReadContract({
    address: TESORO_VAULT_ADDRESS as `0x${string}`,
    abi: TESORO_VAULT_ABI,
    functionName: "getUserBalance",
    args: address ? [address, usdcAddress as `0x${string}`] : undefined,
    query: {
      enabled: !!address,
    },
  })

  const { data: hash, writeContract, isPending } = useWriteContract()

  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({
    hash,
  })

  const availableBalance = vaultBalance ? formatUnits(vaultBalance as bigint, 6) : "0.00"

  const handleWithdraw = async () => {
    if (!amount || Number.parseFloat(amount) <= 0 || !address) return

    try {
      const amountInWei = parseUnits(amount, 6)

      writeContract({
        address: TESORO_VAULT_ADDRESS as `0x${string}`,
        abi: TESORO_VAULT_ABI,
        functionName: "withdraw",
        args: [usdcAddress as `0x${string}`, amountInWei],
      })
    } catch (error) {
      console.error("Withdraw error:", error)
    }
  }

  if (isSuccess && open) {
    setTimeout(() => {
      onOpenChange(false)
      setAmount("")
    }, 2000)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Withdraw Funds</DialogTitle>
          <DialogDescription>Withdraw your funds back to your wallet instantly</DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Available Balance */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="text-sm text-gray-600 mb-1">Available Balance</div>
            <div className="text-2xl font-bold text-gray-900">{availableBalance} USDC</div>
          </div>

          {/* Amount Input */}
          <div className="space-y-2">
            <Label htmlFor="withdraw-amount">Amount</Label>
            <div className="relative">
              <Input
                id="withdraw-amount"
                type="number"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="text-lg pr-20"
                disabled={isPending || isConfirming || isSuccess}
              />
              <button
                className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-medium text-blue-600 hover:text-blue-700 disabled:opacity-50"
                onClick={() => setAmount(availableBalance)}
                disabled={isPending || isConfirming || isSuccess}
              >
                MAX
              </button>
            </div>
          </div>

          {/* Warning */}
          <div className="flex items-start gap-2 text-xs text-amber-800 bg-amber-50 border border-amber-200 p-3 rounded-lg">
            <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
            <p>Withdrawing will stop yield generation on this amount. You can re-deposit anytime.</p>
          </div>

          {/* Success Message */}
          {isSuccess && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center flex items-center justify-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <div>
                <div className="text-green-600 font-semibold">Withdrawal Successful!</div>
                <div className="text-sm text-gray-600">Funds sent to your wallet</div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1"
              disabled={isPending || isConfirming || isSuccess}
            >
              Cancel
            </Button>
            <Button
              className="flex-1 gap-2"
              disabled={!amount || Number.parseFloat(amount) <= 0 || isPending || isConfirming || isSuccess}
              onClick={handleWithdraw}
            >
              {isPending || isConfirming ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  {isPending ? "Confirm in wallet..." : "Withdrawing..."}
                </>
              ) : (
                <>
                  Withdraw <ArrowRight className="w-4 h-4" />
                </>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

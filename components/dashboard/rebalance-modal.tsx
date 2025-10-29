"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { RefreshCw, ArrowRight } from "lucide-react"

interface RebalanceModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function RebalanceModal({ open, onOpenChange }: RebalanceModalProps) {
  const [amount, setAmount] = useState("")
  const [fromProtocol, setFromProtocol] = useState("")
  const [toProtocol, setToProtocol] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const protocols = [
    { name: "Aave V3", apy: "8.2%", balance: "$15,000" },
    { name: "Compound", apy: "7.5%", balance: "$12,000" },
    { name: "Yearn Finance", apy: "6.8%", balance: "$8,000" },
  ]

  const handleRebalance = async () => {
    setIsLoading(true)
    // Simulate rebalancing transaction
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsLoading(false)
    setSuccess(true)
    setTimeout(() => {
      setSuccess(false)
      onOpenChange(false)
      setAmount("")
      setFromProtocol("")
      setToProtocol("")
    }, 2000)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <RefreshCw className="w-5 h-5" />
            Rebalance Funds
          </DialogTitle>
        </DialogHeader>

        {success ? (
          <div className="py-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <RefreshCw className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Rebalancing Complete!</h3>
            <p className="text-sm text-gray-600">Your funds have been successfully rebalanced</p>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <Label htmlFor="from-protocol">From Protocol</Label>
              <Select value={fromProtocol} onValueChange={setFromProtocol}>
                <SelectTrigger id="from-protocol">
                  <SelectValue placeholder="Select protocol" />
                </SelectTrigger>
                <SelectContent>
                  {protocols.map((protocol) => (
                    <SelectItem key={protocol.name} value={protocol.name}>
                      {protocol.name} - {protocol.apy} ({protocol.balance})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex justify-center">
              <ArrowRight className="w-5 h-5 text-gray-400" />
            </div>

            <div>
              <Label htmlFor="to-protocol">To Protocol</Label>
              <Select value={toProtocol} onValueChange={setToProtocol}>
                <SelectTrigger id="to-protocol">
                  <SelectValue placeholder="Select protocol" />
                </SelectTrigger>
                <SelectContent>
                  {protocols.map((protocol) => (
                    <SelectItem key={protocol.name} value={protocol.name}>
                      {protocol.name} - {protocol.apy}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="amount">Amount (USDC)</Label>
              <Input
                id="amount"
                type="number"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>

            {fromProtocol && toProtocol && amount && (
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-900">
                  <strong>APY Change:</strong> {protocols.find((p) => p.name === fromProtocol)?.apy} →{" "}
                  {protocols.find((p) => p.name === toProtocol)?.apy}
                </p>
              </div>
            )}

            <Button
              className="w-full"
              onClick={handleRebalance}
              disabled={!amount || !fromProtocol || !toProtocol || isLoading}
            >
              {isLoading ? "Rebalancing..." : "Rebalance Funds"}
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

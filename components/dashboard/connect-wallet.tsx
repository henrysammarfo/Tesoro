"use client"

import { WalletConnectButton } from "@/components/wallet-connect-button"
import { Wallet, TrendingUp, Shield } from "lucide-react"

export function ConnectWallet() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Wallet className="w-10 h-10 text-white" />
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-3">Welcome to Tesoro</h1>
        <p className="text-lg text-gray-600 mb-8">Connect your wallet to start earning 5-10% APY on your stablecoins</p>

        <div className="mb-8">
          <WalletConnectButton />
        </div>

        <div className="grid grid-cols-1 gap-4 text-left">
          <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Automated Yield</h3>
              <p className="text-sm text-gray-600">Earn 5-10% APY automatically on your deposits</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Shield className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Secure & Audited</h3>
              <p className="text-sm text-gray-600">Smart contracts audited for maximum security</p>
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-500 mt-6">Supported networks: Sepolia Testnet, Base Sepolia</p>
      </div>
    </div>
  )
}

"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Bell, Settings } from "lucide-react"
import { WalletConnectButton } from "@/components/wallet-connect-button"

export function DashboardHeader() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-green-500 rounded-lg" />
            <span className="text-xl font-bold text-gray-900">Tesoro</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/dashboard" className="text-sm font-medium text-gray-900">
              Dashboard
            </Link>
            <Link href="/transactions" className="text-sm text-gray-600 hover:text-gray-900">
              Transactions
            </Link>
            <Link href="/analytics" className="text-sm text-gray-600 hover:text-gray-900">
              Analytics
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon">
              <Bell className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="w-5 h-5" />
            </Button>
            <WalletConnectButton />
          </div>
        </div>
      </div>
    </header>
  )
}

"use client"

import { DashboardHeader } from "@/components/dashboard/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { YieldChart } from "@/components/dashboard/yield-chart"
import { ProtocolAllocation } from "@/components/dashboard/protocol-allocation"
import { TrendingUp, DollarSign, Percent, Calendar } from "lucide-react"

export default function AnalyticsPage() {
  const stats = [
    {
      label: "Total Yield Earned",
      value: "$1,247.50",
      change: "+12.5%",
      icon: DollarSign,
      trend: "up",
    },
    {
      label: "Average APY",
      value: "7.8%",
      change: "+0.3%",
      icon: Percent,
      trend: "up",
    },
    {
      label: "Total Deposits",
      value: "$45,000",
      change: "+$5,000",
      icon: TrendingUp,
      trend: "up",
    },
    {
      label: "Days Active",
      value: "127",
      change: "Since Jan 2024",
      icon: Calendar,
      trend: "neutral",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Analytics</h1>
          <p className="text-gray-600">Track your yield performance and portfolio metrics</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <Card key={stat.label}>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-2">
                  <stat.icon className="w-5 h-5 text-gray-600" />
                  <span className={`text-sm font-medium ${stat.trend === "up" ? "text-green-600" : "text-gray-600"}`}>
                    {stat.change}
                  </span>
                </div>
                <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <YieldChart />
          <ProtocolAllocation />
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Performance Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-2">Strong Performance</h3>
                <p className="text-sm text-green-700">
                  Your portfolio is outperforming the market average by 2.3%. Aave V3 is your top-performing protocol.
                </p>
              </div>
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">Optimization Opportunity</h3>
                <p className="text-sm text-blue-700">
                  Consider rebalancing $2,000 from Compound to Aave V3 to increase your APY by 0.7%.
                </p>
              </div>
              <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Portfolio Health</h3>
                <p className="text-sm text-gray-700">
                  Your portfolio is well-diversified across 3 protocols with an average APY of 7.8%.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

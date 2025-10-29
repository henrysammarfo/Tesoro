"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ProtocolAllocation() {
  const protocols = [
    {
      name: "Aave V3",
      allocation: 45,
      apy: 8.5,
      amount: "$11,055.55",
    },
    {
      name: "Compound",
      allocation: 30,
      apy: 7.8,
      amount: "$7,370.37",
    },
    {
      name: "Yearn Finance",
      allocation: 25,
      apy: 9.2,
      amount: "$6,141.97",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Protocol Allocation</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {protocols.map((protocol) => (
            <div key={protocol.name} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-gray-900">{protocol.name}</span>
                <div className="flex items-center gap-4">
                  <span className="text-green-600 font-medium">{protocol.apy}% APY</span>
                  <span className="text-gray-600">{protocol.amount}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-blue-600 h-full rounded-full transition-all"
                    style={{ width: `${protocol.allocation}%` }}
                  />
                </div>
                <span className="text-sm text-gray-600 w-12 text-right">{protocol.allocation}%</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Weighted Average APY</span>
            <span className="text-lg font-bold text-gray-900">8.2%</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

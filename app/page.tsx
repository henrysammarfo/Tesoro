"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Shield, Zap, BarChart3, DollarSign, Clock } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-white/10 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg" />
              <span className="text-xl font-bold text-white">Tesoro</span>
            </div>
            <div className="flex items-center gap-8">
              <Link href="#features" className="text-sm text-white/70 hover:text-white transition-colors">
                Features
              </Link>
              <Link href="#how-it-works" className="text-sm text-white/70 hover:text-white transition-colors">
                How it works
              </Link>
              <Link href="/dashboard">
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-semibold">Launch app</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-green-400 font-medium">247 businesses on waitlist • Growing 40% weekly</span>
          </div>

          <h1 className="text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
            Time is money.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Save both.</span>
          </h1>

          <p className="text-2xl text-white/80 mb-12 leading-relaxed max-w-3xl mx-auto">
            Turn idle business funds into yield-bearing stablecoins earning 5-10% APY. Built for SMEs in emerging
            markets facing inflation.
          </p>

          <div className="flex items-center justify-center gap-4 mb-16">
            <Link href="/dashboard">
              <Button
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-semibold h-14 px-8 text-lg"
              >
                Get started <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 text-lg bg-transparent border-white/20 text-white hover:bg-white/10"
            >
              View demo
            </Button>
          </div>

          <div className="flex items-center justify-center gap-12 text-sm text-white/50">
            <span>247 businesses waiting</span>
            <span>•</span>
            <span>$12M+ potential AUM</span>
            <span>•</span>
            <span>3 pilot partners</span>
          </div>
        </div>
      </section>

      {/* Feature Cards - Ramp style */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-32">
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Automated routing</h3>
            <p className="text-white/60 leading-relaxed">
              Smart contracts route funds to highest-yielding protocols automatically
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
            <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-6">
              <Shield className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Bank-grade security</h3>
            <p className="text-white/60 leading-relaxed">
              Multi-sig wallets and audited smart contracts protect your funds
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
              <BarChart3 className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Real-time analytics</h3>
            <p className="text-white/60 leading-relaxed">Track yields and returns with live dashboards and insights</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
            <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-6">
              <DollarSign className="w-6 h-6 text-orange-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Transparent fees</h3>
            <p className="text-white/60 leading-relaxed">Only 10% of yield generated. No hidden charges or surprises</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
            <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center mb-6">
              <Clock className="w-6 h-6 text-pink-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Full liquidity</h3>
            <p className="text-white/60 leading-relaxed">Withdraw anytime with no lock-up periods or penalties</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
            <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-6">
              <TrendingUp className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Global access</h3>
            <p className="text-white/60 leading-relaxed">Perfect for emerging markets facing high inflation rates</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-white/10 bg-white/5 backdrop-blur-sm py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-4 gap-12 text-center">
            <div>
              <div className="text-5xl font-bold text-white mb-2">$12M+</div>
              <div className="text-white/60">Potential AUM (waitlist)</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">247</div>
              <div className="text-white/60">Businesses on waitlist</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">40%</div>
              <div className="text-white/60">Week-over-week growth</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">3</div>
              <div className="text-white/60">Pilot partners testing</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-white mb-6">Start earning in minutes</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Three simple steps to maximize your treasury returns
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10 text-center">
            <div className="w-16 h-16 bg-yellow-400 text-slate-900 rounded-2xl flex items-center justify-center text-2xl font-bold mb-6 mx-auto">
              1
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">Connect wallet</h3>
            <p className="text-white/60 leading-relaxed">
              Connect your business wallet or create a new multi-sig wallet in seconds
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10 text-center">
            <div className="w-16 h-16 bg-yellow-400 text-slate-900 rounded-2xl flex items-center justify-center text-2xl font-bold mb-6 mx-auto">
              2
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">Deposit funds</h3>
            <p className="text-white/60 leading-relaxed">
              Deposit stablecoins and we automatically route to highest-yielding protocols
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10 text-center">
            <div className="w-16 h-16 bg-yellow-400 text-slate-900 rounded-2xl flex items-center justify-center text-2xl font-bold mb-6 mx-auto">
              3
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">Earn yield</h3>
            <p className="text-white/60 leading-relaxed">
              Watch your balance grow in real-time with full transparency. Withdraw anytime
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-32">
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-20 text-center">
          <h2 className="text-5xl font-bold text-white mb-6">Join the waitlist</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Be among the first to access automated treasury management. 247 businesses already waiting.
          </p>
          <Link href="/dashboard">
            <Button
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-semibold h-14 px-10 text-lg"
            >
              Request early access <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg" />
              <span className="text-xl font-bold text-white">Tesoro</span>
            </div>
            <p className="text-sm text-white/50">© 2025 Tesoro. Built for Devconnect Buenos Aires.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

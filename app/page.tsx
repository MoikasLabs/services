import Link from 'next/link';
import { Brain, BarChart3, MessageSquare, Radar, ArrowRight, Zap, Shield, Coins, BadgePercent } from 'lucide-react';
import { Navigation } from './components/Navigation';

export default function Home() {
  const services = [
    {
      title: 'AI Research',
      description: 'Pay-per-use AI-powered research. Submit your topic, pay with crypto, get comprehensive results.',
      icon: Brain,
      href: '/research',
      features: ['TipTap Editor', 'Multi-Token', 'Instant Results'],
      priceUSD: '$0.01',
      priceToken: '1,000 tokens',
      serviceId: 'ai-research',
    },
    {
      title: 'Moltlaunch Scanner',
      description: 'Real-time Moltlaunch agent network analysis. Top power scores, volume trends, treasury insights.',
      icon: Radar,
      href: '/moltlaunch-scanner',
      features: ['Live Network Data', 'Power Rankings', 'Treasury Health'],
      priceUSD: '$0.05',
      priceToken: '5,000 tokens',
      serviceId: 'moltlaunch-scanner',
    },
    {
      title: 'Analytics',
      description: 'Advanced data analytics and visualization powered by AI. Transform data into insights.',
      icon: BarChart3,
      href: '/analytics',
      features: ['Real-time Processing', 'Interactive Charts', 'Export Reports'],
      priceUSD: '$0.05',
      priceToken: '5,000 tokens',
      serviceId: 'analytics',
    },
    {
      title: 'Consulting',
      description: 'Expert AI consulting sessions. Get strategic advice and implementation guidance.',
      icon: MessageSquare,
      href: '/consulting',
      features: ['Live Sessions', 'Documentation', 'Follow-up Support'],
      priceUSD: '$0.25',
      priceToken: '25,000 tokens',
      serviceId: 'consulting',
    },
  ];

  return (
    <div className="min-h-screen bg-shell-950 texture-grid">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-crab-950/50 border border-crab-700 rounded-full mb-8">
            <Zap className="w-4 h-4 text-crab-400" />
            <span className="text-sm text-crab-300">Powered by OpenFacilitator x402</span>
          </div>

          <h1 className="font-arcade text-4xl sm:text-5xl lg:text-6xl text-white mb-6 glow-red leading-tight">
            SHALOM
            <br />
            <span className="text-crab-400">SERVICES</span>
          </h1>

          <p className="max-w-2xl mx-auto text-xl text-gray-400 mb-6">
            Premium AI-powered services with instant crypto payments on Base.
            No subscriptions. No friction. Just results.
          </p>

          {/* Multi-token badge */}
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-shell-800/50 border border-shell-700 rounded-full mb-10">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#2775CA] flex items-center justify-center text-white text-[10px] font-bold">
                U
              </div>
              <span className="text-sm text-gray-300">USDC</span>
            </div>
            <div className="w-px h-4 bg-shell-600" />
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#FF6B35] flex items-center justify-center text-white text-[10px] font-bold">
                D
              </div>
              <span className="text-sm text-gray-300">DRAKIN</span>
            </div>
            <div className="w-px h-4 bg-shell-600" />
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#8B5CF6] flex items-center justify-center text-white text-[10px] font-bold">
                K
              </div>
              <span className="text-sm text-gray-300">KOBOLDS</span>
            </div>
            <div className="w-px h-4 bg-shell-600" />
            <div className="flex items-center gap-1 text-neon-mint">
              <BadgePercent className="w-4 h-4" />
              <span className="text-xs font-medium">Save 10% with tokens!</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/moltlaunch-scanner"
              className="btn-retro flex items-center gap-2"
            >
              <span>Launch Scanner</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/research"
              className="btn-retro btn-retro-secondary flex items-center gap-2"
            >
              <span>AI Research</span>
              <Brain className="w-4 h-4" />
            </Link>
          </div>

          <div className="flex items-center justify-center gap-6 mt-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-neon-mint" />
              <span>Secure Payments</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-neon-peach" />
              <span>Instant Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <Coins className="w-4 h-4 text-crab-400" />
              <span>3 Token Options</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-shell-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl sm:text-3xl text-white mb-4">
              Available Services
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Choose your service, connect your wallet, and pay with USDC, DRAKIN, or KOBOLDS for instant AI-powered results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group panel-retro p-6 hover:border-crab-700/50 border border-transparent transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-crab-600/20 flex items-center justify-center group-hover:bg-crab-600/30 transition-colors">
                      <Icon className="w-6 h-6 text-crab-400" />
                    </div>
                    <div className="text-right">
                      <span className="text-crab-400 font-display text-sm block">
                        {service.priceUSD}
                      </span>
                      <span className="text-xs text-neon-mint">
                        or {service.priceToken}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-display text-lg text-white mb-2 group-hover:text-crab-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-gray-400 mb-4">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-2 py-1 bg-shell-800 rounded text-xs text-gray-500"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Token Payment Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="panel-retro p-8">
            <div className="text-center mb-8">
              <h2 className="font-display text-2xl text-white mb-2">
                Pay With Tokens, Save 10%
              </h2>
              <p className="text-gray-400">
                Use DRAKIN or KOBOLDS tokens and get an automatic 10% discount on all services.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-shell-800/50 rounded-lg border border-shell-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#2775CA] flex items-center justify-center text-white font-bold">
                    U
                  </div>
                  <div>
                    <h3 className="text-white font-medium">USDC</h3>
                    <p className="text-xs text-gray-500">Base Price</p>
                  </div>
                </div>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li className="flex justify-between">
                    <span>Research</span>
                    <span className="text-white">$0.01</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Scanner</span>
                    <span className="text-white">$0.05</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Consulting</span>
                    <span className="text-white">$0.25</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-crab-950/20 rounded-lg border border-crab-700/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#FF6B35] flex items-center justify-center text-white font-bold">
                    D
                  </div>
                  <div>
                    <h3 className="text-white font-medium">DRAKIN</h3>
                    <p className="text-xs text-neon-mint">10% Off</p>
                  </div>
                </div>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li className="flex justify-between">
                    <span>Research</span>
                    <span className="text-neon-mint">1,000 DRAKIN</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Scanner</span>
                    <span className="text-neon-mint">5,000 DRAKIN</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Consulting</span>
                    <span className="text-neon-mint">25,000 DRAKIN</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-purple-950/20 rounded-lg border border-purple-700/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#8B5CF6] flex items-center justify-center text-white font-bold">
                    K
                  </div>
                  <div>
                    <h3 className="text-white font-medium">KOBOLDS</h3>
                    <p className="text-xs text-neon-mint">10% Off</p>
                  </div>
                </div>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li className="flex justify-between">
                    <span>Research</span>
                    <span className="text-neon-mint">1,000 KOBOLDS</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Scanner</span>
                    <span className="text-neon-mint">5,000 KOBOLDS</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Consulting</span>
                    <span className="text-neon-mint">25,000 KOBOLDS</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 bg-shell-800/50 rounded-lg">
              <p className="text-sm text-gray-400 text-center">
                <span className="text-crab-400 font-medium">Note:</span> Token prices are approximate based on current market rates. 
                Prices are updated periodically if market values shift more than 20%.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl sm:text-3xl text-white mb-4">
              How It Works
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Connect Wallet',
                description: 'Link your crypto wallet (Rainbow, MetaMask, Coinbase, etc.) via RainbowKit.',
              },
              {
                step: '02',
                title: 'Choose Service & Token',
                description: 'Select your service and pick USDC, DRAKIN, or KOBOLDS for payment.',
              },
              {
                step: '03',
                title: 'Pay with x402',
                description: 'Confirm the payment on Base Mainnet. Instant results delivered via OpenFacilitator.',
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="font-arcade text-3xl text-crab-600 mb-4">{item.step}</div>
                <h3 className="font-display text-lg text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-shell-700 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-arcade text-xs text-crab-400">SHALOM SERVICES</span>
          </div>
          <p className="text-sm text-gray-500">
            Built with x402 • Powered by OpenFacilitator • Base Network
          </p>
        </div>
      </footer>
    </div>
  );
}

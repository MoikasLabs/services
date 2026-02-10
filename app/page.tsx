import Link from 'next/link';
import { Brain, BarChart3, MessageSquare, ArrowRight, Zap, Shield } from 'lucide-react';
import { Navigation } from './components/Navigation';
import { TokenSelector } from './components/TokenSelector';
import { SERVICE_PRICING, TREASURY_ADDRESS } from './lib/openfacilitator';

export default function Home() {
  const services = [
    {
      title: 'AI Research',
      description: 'Pay-per-use AI-powered research. Submit your topic, pay with crypto, get comprehensive results.',
      icon: Brain,
      href: '/research',
      features: ['TipTap Editor', 'x402 Payments', 'Instant Results'],
      price: SERVICE_PRICING['ai-research'].usd,
    },
    {
      title: 'Analytics',
      description: 'Advanced data analytics and visualization powered by AI. Transform data into insights.',
      icon: BarChart3,
      href: '/analytics',
      features: ['Real-time Processing', 'Interactive Charts', 'Export Reports'],
      price: SERVICE_PRICING['analytics'].usd,
    },
    {
      title: 'Consulting',
      description: 'Expert AI consulting sessions. Get strategic advice and implementation guidance.',
      icon: MessageSquare,
      href: '/consulting',
      features: ['Live Sessions', 'Documentation', 'Follow-up Support'],
      price: SERVICE_PRICING['consulting'].usd,
    },
    {
      title: 'Security Audit',
      description: 'Automated security scan of smart contracts with vulnerability report and recommendations.',
      icon: Shield,
      href: '/security-audit',
      features: ['kobold-scan', 'Report Export', 'Auto-fix Suggestions'],
      price: SERVICE_PRICING['security-audit'].usd,
    },
    {
      title: 'Vault Setup',
      description: 'SOPS + Age encrypted secrets vault setup with templates for all your API keys.',
      icon: Zap,
      href: '/vault-setup',
      features: ['Encrypted Vault', 'SOPS Templates', 'CLI Scripts'],
      price: SERVICE_PRICING['vault-setup'].usd,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#fb923c]/10 border border-[#fb923c]/30 rounded-full mb-8">
            <Zap className="w-4 h-4 text-[#fb923c]" />
            <span className="text-sm text-[#fb923c]">Multi-Token: USDC, DRAKIN, or KOBOLDS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white mb-6 font-bold">
            KOBOLDS
            <br />
            <span className="text-[#fb923c]">SERVICES</span>
          </h1>

          <p className="max-w-2xl mx-auto text-xl text-gray-400 mb-6">
            Premium AI-powered services with instant crypto payments on Base.
            Pay with USDC, DRAKIN, or KOBOLDS (10% discount with tokens!)
          </p>

          <p className="text-sm text-[#fb923c] mb-10">
            Treasury: {TREASURY_ADDRESS.slice(0, 6)}...{TREASURY_ADDRESS.slice(-4)}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/research"
              className="bg-[#fb923c] text-[#0a0a0f] px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:opacity-90"
            >
              <span>Start Research</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/analytics"
              className="border border-[#fb923c]/50 text-[#fb923c] px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-[#fb923c]/10"
            >
              <span>View Analytics</span>
              <BarChart3 className="w-4 h-4" />
            </Link>
          </div>

          <div className="flex items-center justify-center gap-6 mt-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-500" />
              <span>x402 Secured</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#fb923c]" />
              <span>Instant Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#fb923c]">🐉</span>
              <span>KOBOLDS Token 10% Off</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0a0a0f]/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl text-white mb-4 font-bold">
              Available Services
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Choose your service, connect your wallet, and pay with any of three tokens. 
              Save 10% when paying with DRAKIN or KOBOLDS.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="block bg-[#16161d] border border-[#2a2a35] rounded-lg p-6 hover:border-[#fb923c]/50 transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-[#fb923c]/20 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#fb923c]" />
                    </div>
                    <span className="text-[#fb923c] font-semibold text-sm">
                      {service.price < 1 ? `${(service.price * 100).toFixed(0)}¢` : `$${service.price.toFixed(2)}`}
                    </span>
                  </div>

                  <h3 className="text-lg text-white font-semibold mb-2">
                    {service.title}
                  </h3>

                  <p className="text-sm text-gray-400 mb-4">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-2 py-1 bg-[#0a0a0f] rounded text-xs text-gray-500"
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-[#2a2a35]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl text-white mb-8 text-center font-bold">Payment Options</h2>
          
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-[#16161d] border border-[#2a2a35] rounded-lg p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#2775CA]/20 flex items-center justify-center">
                <span className="text-[#2775CA] font-bold">$</span>
              </div>
              <h3 className="text-white font-semibold mb-2">USDC</h3>
              <p className="text-sm text-gray-400">Base price, stable value</p>
            </div>
            
            <div className="bg-[#16161d] border border-[#fb923c]/30 rounded-lg p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#FF6B35]/20 flex items-center justify-center">
                <span className="text-[#FF6B35] font-bold">D</span>
              </div>
              <h3 className="text-white font-semibold mb-2">DRAKIN</h3>
              <p className="text-sm text-[#fb923c]">10% discount applied!</p>
            </div>
            
            <div className="bg-[#16161d] border border-[#8B5CF6]/30 rounded-lg p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#8B5CF6]/20 flex items-center justify-center">
                <span className="text-[#8B5CF6] font-bold">K</span>
              </div>
              <h3 className="text-white font-semibold mb-2">KOBOLDS</h3>
              <p className="text-sm text-[#8B5CF6]">10% discount applied!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#2a2a35] py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#fb923c]">KOBOLDS SERVICES</span>
          </div>
          <p className="text-sm text-gray-500">
            Built with x402 • Multi-Token Payments • DRAKIN + KOBOLDS Utility
          </p>
        </div>
      </footer>
    </div>
  );
}

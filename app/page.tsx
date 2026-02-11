import Link from 'next/link';
import { Brain, Shield, Lock, Wand2, ArrowRight, Zap } from 'lucide-react';
import { Navigation } from './components/Navigation';
import { SERVICE_PRICING, TREASURY_ADDRESS } from './lib/openfacilitator';

export default function Home() {
  const services = [
    {
      title: 'AI Research',
      description: 'Pay-per-use AI-powered research. Submit your topic, get comprehensive results with sources.',
      icon: Brain,
      href: '/research',
      price: SERVICE_PRICING['ai-research'].usd,
    },
    {
      title: 'Security Audit',
      description: 'Automated security scan of smart contracts. Vulnerability report with recommendations.',
      icon: Shield,
      href: '/security-audit',
      price: SERVICE_PRICING['security-audit'].usd,
    },
    {
      title: 'Vault Setup',
      description: 'SOPS + Age encrypted secrets vault. Templates and CLI scripts for secure API key storage.',
      icon: Lock,
      href: '/vault-setup',
      price: SERVICE_PRICING['vault-setup'].usd,
    },
    {
      title: 'Image Generation',
      description: 'AI image generation via Fal.ai. FLUX models from fast prototyping to photorealistic output.',
      icon: Wand2,
      href: '/image-generation',
      price: SERVICE_PRICING['image-generation'].usd,
    },
  ];

  // Format price display
  const formatPrice = (price: number) => {
    if (price < 1) return `${(price * 100).toFixed(0)}¢`;
    return `$${price.toFixed(2)}`;
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <Navigation />

      {/* Hero */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#fb923c]/10 border border-[#fb923c]/30 rounded-full mb-8">
            <Zap className="w-4 h-4 text-[#fb923c]" />
            <span className="text-sm text-[#fb923c]">USDC, DRAKIN, or KOBOLDS — 10% off with tokens</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white mb-6 font-bold">
            KOBOLDS
            <br />
            <span className="text-[#fb923c]">SERVICES</span>
          </h1>

          <p className="max-w-2xl mx-auto text-xl text-gray-400 mb-6">
            Fully automated AI services. 100% kobold infrastructure.
          </p>

          <p className="text-sm text-gray-500 mb-10 font-mono">
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
              href="/image-generation"
              className="border border-[#fb923c]/50 text-[#fb923c] px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-[#fb923c]/10"
            >
              <span>Generate Image</span>
              <Wand2 className="w-4 h-4" />
            </Link>
          </div>

          <div className="flex items-center justify-center gap-6 mt-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-500" />
              <span>x402 Verified</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#fb923c]" />
              <span>AI-Powered</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#fb923c]">🐉</span>
              <span>100% Automated</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0a0a0f]/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl text-white mb-4 font-bold">Available Services</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Four fully-automated services. 100% kobold AI infrastructure — no human intervention.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
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
                      {formatPrice(service.price)}
                    </span>
                  </div>

                  <h3 className="text-lg text-white font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-400">{service.description}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-[#2a2a35]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl text-white mb-8 font-bold">Payment Options</h2>
          
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-[#16161d] border border-[#2a2a35] rounded-lg p-6">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#2775CA]/20 flex items-center justify-center">
                <span className="text-[#2775CA] font-bold">$</span>
              </div>
              <h3 className="text-white font-semibold mb-1">USDC</h3>
              <p className="text-sm text-gray-400">Base price</p>
            </div>
            
            <div className="bg-[#16161d] border border-[#fb923c]/30 rounded-lg p-6">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#FF6B35]/20 flex items-center justify-center">
                <span className="text-[#FF6B35] font-bold">D</span>
              </div>
              <h3 className="text-white font-semibold mb-1">DRAKIN</h3>
              <p className="text-sm text-[#fb923c]">10% discount</p>
            </div>
            
            <div className="bg-[#16161d] border border-[#8B5CF6]/30 rounded-lg p-6">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#8B5CF6]/20 flex items-center justify-center">
                <span className="text-[#8B5CF6] font-bold">K</span>
              </div>
              <h3 className="text-white font-semibold mb-1">KOBOLDS</h3>
              <p className="text-sm text-[#8B5CF6]">10% discount</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#2a2a35] py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-bold text-[#fb923c]">KOBOLDS SERVICES</span>
          <p className="text-sm text-gray-500">
            x402 • AI Infrastructure • DRAKIN + KOBOLDS Utility
          </p>
        </div>
      </footer>
    </div>
  );
}

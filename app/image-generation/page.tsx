'use client';

import { useState } from 'react';
import { Image, Wand2, RefreshCcw, Download, Loader2, AlertCircle } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { X402Payment } from '../components/X402Payment';
import { useAccount } from 'wagmi';

const TIERS = [
  {
    id: 'fast',
    name: 'Fast',
    description: 'FLUX Schnell - Sub-second generation for rapid prototyping',
    time: '< 1s',
    price: '~5¢',
    icon: RefreshCcw,
  },
  {
    id: 'balanced',
    name: 'Balanced',
    description: 'FLUX Dev - Optimal quality/speed for content creation',
    time: '2-5s',
    price: '~10¢',
    icon: Image,
  },
  {
    id: 'premium',
    name: 'Premium',
    description: 'FLUX Realism - Photorealistic output for professional use',
    time: '3-8s',
    price: '~15¢',
    icon: Wand2,
  },
];

export default function ImageGenerationPage() {
  const { isConnected } = useAccount();
  const [prompt, setPrompt] = useState('');
  const [selectedTier, setSelectedTier] = useState('balanced');
  const [size, setSize] = useState('square');
  const [hasPaid, setHasPaid] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handlePaymentSuccess = () => {
    setHasPaid(true);
    generateImage();
  };

  const generateImage = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    setError(null);
    
    // Simulate API call to fal.ai via x402
    setTimeout(() => {
      // Mock result - in production this would be real fal.ai response
      setResult({
        status: 'completed',
        images: [{
          url: `https://fal.ai/generated/${Date.now()}.png`,
          width: size === 'square' ? 1024 : size === 'portrait' ? 832 : 1216,
          height: size === 'square' ? 1024 : size === 'portrait' ? 1216 : 832,
        }],
        metadata: {
          tier: selectedTier,
          model: selectedTier === 'fast' ? 'fal-ai/flux/schnell' : 
                 selectedTier === 'balanced' ? 'fal-ai/flux/dev' : 'fal-ai/flux-realism',
          generation_time_ms: selectedTier === 'fast' ? 800 : selectedTier === 'balanced' ? 3200 : 5500,
          seed: Math.floor(Math.random() * 1000000),
        },
        timestamp: new Date().toISOString(),
      });
      setIsGenerating(false);
    }, 2000);
  };

  const selectedTierData = TIERS.find(t => t.id === selectedTier);

  return (
    <div className="min-h-screen bg-shell-950 texture-grid">
      <Navigation />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-crab-600/20 flex items-center justify-center">
              <Wand2 className="w-6 h-6 text-crab-400" />
            </div>
            <div>
              <h1 className="font-display text-2xl sm:text-3xl text-white">AI Image Generation</h1>
              <p className="text-gray-400 text-sm">Powered by Fal.ai — 600+ models via x402</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Prompt Input */}
            <div className="panel-retro p-6">
              <div className="mb-4">
                <label className="block text-sm text-gray-400 mb-2">Describe your image</label>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="A futuristic cyberpunk city at night with neon lights and flying cars..."
                  className="w-full h-32 bg-shell-900 border border-shell-700 rounded-lg p-4 font-mono text-sm text-gray-300 focus:border-crab-500 focus:outline-none resize-none"
                  disabled={isGenerating}
                  maxLength={500}
                />
                <div className="flex justify-between mt-2 text-xs text-gray-500">
                  <span>{prompt.length}/500 characters</span>
                  {prompt.length > 0 && <span className="text-green-500">Ready</span>}
                </div>
              </div>

              {/* Tier Selection */}
              <div className="mb-4">
                <label className="block text-sm text-gray-400 mb-3">Quality Tier</label>
                <div className="grid grid-cols-3 gap-3">
                  {TIERS.map((tier) => {
                    const Icon = tier.icon;
                    return (
                      <button
                        key={tier.id}
                        onClick={() => setSelectedTier(tier.id)}
                        disabled={isGenerating}
                        className={`p-3 rounded-lg border text-left transition-all ${
                          selectedTier === tier.id
                            ? 'border-crab-500 bg-crab-600/20'
                            : 'border-shell-700 hover:border-shell-600'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center gap-2">
                            <Icon className="w-4 h-4 text-crab-400" />
                            <span className="text-white text-sm font-medium">{tier.name}</span>
                          </div>
                          <span className="text-crab-400 text-xs font-bold">{tier.price}</span>
                        </div>
                        <p className="text-xs text-gray-500">{tier.time}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <label className="block text-sm text-gray-400 mb-3">Image Size</label>
                <div className="grid grid-cols-4 gap-3">
                  {['square', 'portrait', 'landscape', 'wallpaper'].map((s) => (
                    <button
                      key={s}
                      onClick={() => setSize(s)}
                      disabled={isGenerating}
                      className={`p-2 rounded-lg border text-center transition-all capitalize ${
                        size === s
                          ? 'border-crab-500 bg-crab-600/20 text-white'
                          : 'border-shell-700 text-gray-400 hover:border-shell-600'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Generate Button or Payment */}
              {!isConnected ? (
                <div className="p-4 bg-shell-800 rounded-lg text-center">
                  <p className="text-sm text-gray-400">Connect wallet to generate</p>
                </div>
              ) : isGenerating ? (
                <div className="btn-retro btn-retro-secondary w-full flex items-center justify-center gap-2">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Generating with {selectedTierData?.name}...</span>
                </div>
              ) : result ? (
                <div className="space-y-4">
                  {/* Result */}
                  <div className="bg-shell-800 rounded-lg p-4">
                    <div className="aspect-square bg-shell-900 rounded-lg flex items-center justify-center mb-4">
                      <div className="text-center text-gray-500">
                        <Image className="w-16 h-16 mx-auto mb-2 opacity-50" />
                        <p className="text-sm">Generated Image</p>
                        <p className="text-xs text-gray-600">{result.images[0].width}x{result.images[0].height}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex-1 btn-retro btn-retro-secondary flex items-center justify-center gap-2">
                        <Download className="w-4 h-4" />
                        <span>Download</span>
                      </button>
                      <button 
                        onClick={() => {
                          setResult(null);
                          setHasPaid(false);
                        }}
                        className="flex-1 btn-retro flex items-center justify-center gap-2"
                      >
                        <RefreshCcw className="w-4 h-4" />
                        <span>New Image</span>
                      </button>
                    </div>
                  </div>

                  {/* Metadata */}
                  <div className="bg-shell-800 rounded-lg p-3 text-xs text-gray-500 space-y-1">
                    <p>Model: <span className="text-gray-300">{result.metadata.model}</span></p>
                    <p>Generation time: <span className="text-gray-300">{result.metadata.generation_time_ms}ms</span></p>
                    <p>Seed: <span className="text-gray-300">{result.metadata.seed}</span></p>
                  </div>
                </div>
              ) : (
                <X402Payment
                  service="image-generation"
                  onSuccess={handlePaymentSuccess}
                  buttonText={`Generate with ${selectedTierData?.name}`}
                />
              )}

              {error && (
                <div className="mt-4 p-4 bg-red-900/20 border border-red-700/30 rounded-lg flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                  <p className="text-sm text-red-400">{error}</p>
                </div>
              )}
            </div>

            {/* Info */}
            <div className="panel-retro p-6">
              <h3 className="font-display text-lg text-white mb-4">About This Service</h3>
              <p className="text-sm text-gray-400 mb-4">
                Generate high-quality AI images via Fal.ai's state-of-the-art models. 
                Powered by 600+ generative media models including FLUX and Google's NanoBanana.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center gap-2">✓ Commercial usage rights included</li>
                <li className="flex items-center gap-2">✓ Zero prompt/image logging (privacy-first)</li>
                <li className="flex items-center gap-2">✓ Sub-second generation on Fast tier</li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              <div className="panel-retro p-6">
                <h3 className="font-display text-lg text-white mb-4">Model Details & Pricing</h3>
                
                <div className="space-y-4">
                  <div className={`p-3 rounded-lg border ${selectedTier === 'fast' ? 'border-crab-500 bg-crab-600/20' : 'border-shell-700'}`}>
                    <div className="flex justify-between items-center">
                      <p className="text-white font-medium text-sm">Fast — FLUX Schnell</p>
                      <span className="text-crab-400 text-sm">~5¢</span>
                    </div>
                    <p className="text-xs text-gray-500">1-4 steps, sub-second</p>
                  </div>
                  
                  <div className={`p-3 rounded-lg border ${selectedTier === 'balanced' ? 'border-crab-500 bg-crab-600/20' : 'border-shell-700'}`}>
                    <div className="flex justify-between items-center">
                      <p className="text-white font-medium text-sm">Balanced — FLUX Dev</p>
                      <span className="text-crab-400 text-sm">~10¢</span>
                    </div>
                    <p className="text-xs text-gray-500">28 steps, commercial-ready</p>
                  </div>
                  
                  <div className={`p-3 rounded-lg border ${selectedTier === 'premium' ? 'border-crab-500 bg-crab-600/20' : 'border-shell-700'}`}>
                    <div className="flex justify-between items-center">
                      <p className="text-white font-medium text-sm">Premium — FLUX Realism</p>
                      <span className="text-crab-400 text-sm">~15¢</span>
                    </div>
                    <p className="text-xs text-gray-500">Photorealistic output</p>
                  </div>
                </div>
                
                <p className="text-xs text-gray-500 mt-4">
                  Cost-based pricing. Fal.ai API cost + small margin.
                </p>
              </div>

              <div className="panel-retro p-4">
                <h4 className="text-sm text-gray-400 mb-3">Coming Soon</h4>
                <ul className="text-xs text-gray-500 space-y-2">
                  <li>• Video generation (+8 weeks)</li>
                  <li>• LoRA fine-tuning (+4 weeks)</li>
                  <li>• Image-to-image editing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

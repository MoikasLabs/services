'use client';

import { useState } from 'react';
import { Image, Wand2, RefreshCcw, Sparkles, Download, Loader2, AlertCircle } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { X402Payment } from '../components/X402Payment';
import { useAccount } from 'wagmi';

const TIERS = [
  {
    id: 'standard',
    name: 'Standard',
    description: 'NanoBanana - Fast text-to-image generation',
    time: '1-3s',
    price: '5¢',
    icon: RefreshCcw,
    model: 'fal-ai/nano-banana' as const,
    cost: '$0.039',
  },
  {
    id: 'premium',
    name: 'Premium',
    description: 'NanoBanana Pro - Google SOTA, high quality',
    time: '2-5s',
    price: '18¢',
    icon: Wand2,
    model: 'fal-ai/nano-banana-pro' as const,
    cost: '$0.15',
  },
  {
    id: '4k',
    name: '4K Premium',
    description: 'NanoBanana Pro - 4K resolution output',
    time: '3-8s',
    price: '35¢',
    icon: Sparkles,
    model: 'fal-ai/nano-banana-pro' as const,
    cost: '$0.30',
  },
];

export default function ImageGenerationPage() {
  const { isConnected } = useAccount();
  const [prompt, setPrompt] = useState('');
  const [selectedTier, setSelectedTier] = useState('standard');
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
    
    const tierData = TIERS.find(t => t.id === selectedTier);
    if (!tierData) {
      setError('Invalid tier selected');
      setIsGenerating(false);
      return;
    }
    
    try {
      const response = await fetch('/api/generate-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt,
          model: tierData.model.includes('nano-banana-pro') ? 'nano-banana-pro' : 'nano-banana',
          image_size: size === 'wallpaper' ? 'landscape' : size,
          is4k: selectedTier === '4k',
        }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Image generation failed');
      }
      
      setResult({
        status: 'completed',
        images: data.images,
        metadata: {
          tier: selectedTier,
          model: tierData.model,
          generation_time_ms: data.timings?.inference || 0,
          seed: data.seed,
        },
        timestamp: new Date().toISOString(),
      });
    } catch (err) {
      console.error('Generation error:', err);
      setError(err instanceof Error ? err.message : 'Failed to generate image');
    } finally {
      setIsGenerating(false);
    }
  };

  const selectedTierData = TIERS.find(t => t.id === selectedTier) || TIERS[0];

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
              <p className="text-gray-400 text-sm">Powered by Fal.ai — Google NanoBanana via x402</p>
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
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {TIERS.map((tier) => {
                    const Icon = tier.icon;
                    return (
                      <button
                        key={tier.id}
                        onClick={() => setSelectedTier(tier.id)}
                        disabled={isGenerating}
                        className={`p-3 rounded-lg border text-left transition-all min-h-[70px] ${
                          selectedTier === tier.id
                            ? 'border-crab-500 bg-crab-600/20'
                            : 'border-shell-700 hover:border-shell-600'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center gap-2">
                            <Icon className="w-4 h-4 text-crab-400 flex-shrink-0" />
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
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['square', 'portrait', 'landscape', 'wallpaper'].map((s) => (
                    <button
                      key={s}
                      onClick={() => setSize(s)}
                      disabled={isGenerating}
                      className={`p-2 rounded-lg border text-center transition-all capitalize min-h-[44px] ${
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
                    <div className="aspect-square bg-shell-900 rounded-lg flex items-center justify-center mb-4 overflow-hidden">
                      {result.images?.[0]?.url ? (
                        <img 
                          src={result.images[0].url} 
                          alt="Generated" 
                          className="max-w-full max-h-full object-contain"
                        />
                      ) : (
                        <div className="text-center text-gray-500">
                          <Image className="w-16 h-16 mx-auto mb-2 opacity-50" />
                          <p className="text-sm">No image generated</p>
                        </div>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <a 
                        href={result.images?.[0]?.url} 
                        download
                        className="flex-1 btn-retro btn-retro-secondary flex items-center justify-center gap-2"
                      >
                        <Download className="w-4 h-4" />
                        <span>Download</span>
                      </a>
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
                    <p>Model: <span className="text-gray-300">{result.metadata?.model}</span></p>
                    <p>Generation time: <span className="text-gray-300">{result.metadata?.generation_time_ms}ms</span></p>
                    <p>Seed: <span className="text-gray-300">{result.metadata?.seed}</span></p>
                  </div>
                </div>
              ) : (
                <X402Payment
                  service={`image-generation-${selectedTier}` as 'image-generation-standard' | 'image-generation-premium' | 'image-generation-4k'}
                  onSuccess={handlePaymentSuccess}
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
                Powered by Google's NanoBanana models via Fal.ai — best-in-class text-to-image generation with 3 quality tiers.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center gap-2">✓ Commercial usage rights included</li>
                <li className="flex items-center gap-2">✓ Zero prompt/image logging (privacy-first)</li>
                <li className="flex items-center gap-2">✓ Fast generation on Standard tier</li>
                <li className="flex items-center gap-2">✓ Google SOTA quality on Premium/4K</li>
                <li className="flex items-center gap-2">✓ 4K resolution available</li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              <div className="panel-retro p-6">
                <h3 className="font-display text-lg text-white mb-4">Model Details & Pricing</h3>
                
                <div className="space-y-3">
                  <div className={`p-3 rounded-lg border ${selectedTier === 'standard' ? 'border-crab-500 bg-crab-600/20' : 'border-shell-700'}`}>
                    <div className="flex justify-between items-center">
                      <p className="text-white font-medium text-sm">Standard — NanoBanana</p>
                      <span className="text-crab-400 text-sm">5¢</span>
                    </div>
                    <p className="text-xs text-gray-500">Fast text-to-image</p>
                    <p className="text-xs text-gray-600">Fal cost: $0.039 + ~1¢ margin</p>
                  </div>
                  
                  <div className={`p-3 rounded-lg border ${selectedTier === 'premium' ? 'border-crab-500 bg-crab-600/20' : 'border-shell-700'}`}>
                    <div className="flex justify-between items-center">
                      <p className="text-white font-medium text-sm">Premium — NanoBanana Pro</p>
                      <span className="text-crab-400 text-sm">18¢</span>
                    </div>
                    <p className="text-xs text-gray-500">Google SOTA, high quality</p>
                    <p className="text-xs text-gray-600">Fal cost: $0.15 + ~3¢ margin</p>
                  </div>
                  
                  <div className={`p-3 rounded-lg border ${selectedTier === '4k' ? 'border-crab-500 bg-crab-600/20' : 'border-shell-700'}`}>
                    <div className="flex justify-between items-center">
                      <p className="text-white font-medium text-sm">4K Premium — NanoBanana Pro</p>
                      <span className="text-crab-400 text-sm">35¢</span>
                    </div>
                    <p className="text-xs text-gray-500">4K resolution output</p>
                    <p className="text-xs text-gray-600">Fal cost: $0.30 + ~5¢ margin</p>
                  </div>
                </div>
                
                <p className="text-xs text-gray-500 mt-4">
                  Transparent pricing. Fal.ai API cost + small margin. Much cheaper than Midjourney/DALL-E.
                </p>
              </div>

              <div className="panel-retro p-4">
                <h4 className="text-sm text-gray-400 mb-3">Also Available</h4>
                <ul className="text-xs text-gray-500 space-y-2">
                  <li>• Image Editing (now live!)</li>
                  <li>• Video generation (+8 weeks)</li>
                  <li>• LoRA fine-tuning (+4 weeks)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

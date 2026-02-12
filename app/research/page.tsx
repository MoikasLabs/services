'use client';

import { useState } from 'react';
import { Brain, Clock, FileText, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Navigation } from '../components/Navigation';
import { TipTapEditor } from '../components/TipTapEditor';
import { X402Payment } from '../components/X402Payment';
import { useAccount } from 'wagmi';

export default function ResearchPage() {
  const { isConnected } = useAccount();
  const [researchQuery, setResearchQuery] = useState('');
  const [results, setResults] = useState<string | null>(null);
  const [isResearching, setIsResearching] = useState(false);

  const handlePaymentSuccess = () => {
    setIsResearching(true);
    setTimeout(() => {
      setResults(`
        <h2>Research Results: ${researchQuery.replace(/<[^>]*>/g, '').substring(0, 50)}...</h2>
        <p>Based on your query, here are the key findings:</p>
        <ul>
          <li><strong>Market Analysis:</strong> Current trends indicate significant growth potential.</li>
          <li><strong>Competitive Landscape:</strong> 3 major players dominate with emerging challengers.</li>
          <li><strong>Key Insights:</strong> Regulatory environment favorable, technology adoption accelerating.</li>
          <li><strong>Recommendations:</strong> Entry point optimal within next 6 months.</li>
        </ul>
        <blockquote>"The convergence of AI and decentralized infrastructure creates unprecedented opportunities."</blockquote>
      `);
      setIsResearching(false);
    }, 2000);
  };

  const wordCount = researchQuery.replace(/<[^>]*>/g, '').split(/\s+/).filter(w => w.length > 0).length;

  return (
    <div className="min-h-screen bg-shell-950 texture-grid">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-white mb-4">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Services</span>
          </Link>
          
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-crab-600/20 flex items-center justify-center">
              <Brain className="w-6 h-6 text-crab-400" />
            </div>
            <div>
              <h1 className="font-display text-2xl sm:text-3xl text-white">AI Research</h1>
              <p className="text-gray-400 text-sm">Pay-per-use research powered by AI • ~3 min delivery</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Input */}
          <div className="lg:col-span-2 space-y-6">
            {/* Research Input */}
            <div className="panel-retro p-6">
              <h2 className="font-display text-lg text-white mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-crab-400" />
                Your Research Query
              </h2>
              
              <TipTapEditor
                content={researchQuery}
                onChange={setResearchQuery}
                placeholder="Describe what you want to research. Be specific about topics, scope, and any specific data points you're looking for..."
              />

              <div className="flex items-center justify-between mt-4 text-sm">
                <div className="flex items-center gap-4 text-gray-500">
                  <span>{wordCount} words</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    ~{(wordCount / 50).toFixed(1)} min read
                  </span>
                </div>
              </div>
            </div>

            {/* Results Section */}
            {results && (
              <div className="panel-retro p-6 border-crab-700/30">
                <h2 className="font-display text-lg text-white mb-4 flex items-center gap-2">
                  <Brain className="w-5 h-5 text-neon-mint" />
                  Research Results
                </h2>
                <div 
                  className="prose prose-invert max-w-none tiptap"
                  dangerouslySetInnerHTML={{ __html: results }}
                />
              </div>
            )}

            {isResearching && (
              <div className="panel-retro p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-crab-600/20 mb-4">
                  <Brain className="w-8 h-8 text-crab-400 animate-pulse" />
                </div>
                <p className="text-gray-400">AI is researching your query...</p>
              </div>
            )}
          </div>

          {/* Right Column - Payment */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              {/* Pricing Card */}
              <div className="panel-retro p-6">
                <h3 className="font-display text-lg text-white mb-4">Payment Details</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Service</span>
                    <span className="text-white">AI Research</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Base Price</span>
                    <span className="text-white">$15.00</span>
                  </div>
                  <div className="h-px bg-shell-700" />
                  <p className="text-xs text-gray-500">
                    Select token to see live pricing with 10% discount
                  </p>
                </div>

                {!isConnected ? (
                  <div className="p-4 bg-shell-800 rounded-lg text-center">
                    <p className="text-sm text-gray-400 mb-2">Connect wallet to proceed</p>
                  </div>
                ) : wordCount < 10 ? (
                  <button disabled className="btn-retro btn-retro-secondary w-full opacity-50 cursor-not-allowed">
                    Enter research query first
                  </button>
                ) : (
                  <X402Payment
                    service="ai-research"
                    onSuccess={handlePaymentSuccess}
                  />
                )}
              </div>

              {/* Info Card */}
              <div className="panel-retro p-4">
                <h4 className="text-sm text-gray-400 mb-2">What you get:</h4>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-crab-500 rounded-full" />
                    Comprehensive analysis
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-crab-500 rounded-full" />
                    Source citations
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-crab-500 rounded-full" />
                    Actionable insights
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-crab-500 rounded-full" />
                    Fast delivery (~3 min)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

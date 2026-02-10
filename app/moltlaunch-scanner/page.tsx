'use client';

import { useState, useEffect } from 'react';
import { Radar, TrendingUp, Wallet, Activity, ArrowLeft, Loader2, Zap, Coins, BadgePercent } from 'lucide-react';
import Link from 'next/link';
import { X402Payment } from '../components/X402Payment';
import { TokenSelector } from '../components/TokenSelector';
import { calculateDisplayAmount, TokenSymbol, type ServiceType } from '../lib/openfacilitator';

interface ScannerData {
  success: boolean;
  timestamp: string;
  treasury: {
    ethBalance: number;
    ethPrice: number;
    totalUsd: string;
    totalPositions: number;
  };
  topAgents: Array<{
    symbol: string;
    name: string;
    powerScore: number;
    volume24hETH: number;
    marketCapETH: number;
    balance: string;
    usdValue: number;
  }>;
  recentActivity: Array<{
    id: string;
    content: string;
    timestamp: string;
  }>;
  scanner: {
    totalAgents: number;
    totalVolume24h: number;
  };
}

export default function MoltlaunchScanner() {
  const [data, setData] = useState<ScannerData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [paid, setPaid] = useState(false);
  const [selectedToken, setSelectedToken] = useState<TokenSymbol>('USDC');

  const service: ServiceType = 'moltlaunch-scanner';
  const pricing = calculateDisplayAmount(service, selectedToken);

  const fetchData = async () => {
    setLoading(true);
    setError('');
    try {
      // Fetch directly from KOBOLDS API (no backend route needed)
      const [statusRes, holdingsRes, memosRes] = await Promise.all([
        fetch('https://kobolds.shalohm.co/api/v1/status'),
        fetch('https://kobolds.shalohm.co/api/v1/holdings'),
        fetch('https://kobolds.shalohm.co/api/v1/memos')
      ]);

      const status = statusRes.ok ? await statusRes.json() : null;
      const holdings = holdingsRes.ok ? await holdingsRes.json() : null;
      const memos = memosRes.ok ? await memosRes.json() : null;

      // Calculate total value
      const totalValue = holdings?.holdings?.reduce((sum: number, h: any) => {
        return sum + (h.usdValue || 0);
      }, 0) || 0;

      const ethBalance = status?.treasury?.ethBalance || 0;
      const ethPrice = 2650;
      const totalUsd = (ethBalance * ethPrice) + totalValue;

      // Format top agents
      const topAgents = holdings?.holdings
        ?.sort((a: any, b: any) => (b.powerScore?.total || 0) - (a.powerScore?.total || 0))
        ?.slice(0, 5)
        ?.map((h: any) => ({
          symbol: h.symbol,
          name: h.name,
          powerScore: h.powerScore?.total || 0,
          volume24hETH: h.volume24hETH || 0,
          marketCapETH: h.marketCapETH || 0,
          balance: h.balance,
          usdValue: h.usdValue || 0
        })) || [];

      setData({
        success: true,
        timestamp: new Date().toISOString(),
        treasury: {
          ethBalance,
          ethPrice,
          totalUsd: totalUsd.toFixed(2),
          totalPositions: holdings?.holdings?.length || 0
        },
        topAgents,
        recentActivity: memos?.memos?.slice(0, 3) || [],
        scanner: {
          totalAgents: status?.totalAgents || 0,
          totalVolume24h: status?.totalVolume24h || 0
        }
      });
    } catch (e) {
      setError('Network error - could not fetch KOBOLDS data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (paid) {
      fetchData();
    }
  }, [paid]);

  const handlePaymentSuccess = () => {
    setPaid(true);
  };

  if (!paid) {
    return (
      <div className="min-h-screen bg-shell-950 texture-grid">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-white mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Services</span>
          </Link>

          <div className="panel-retro p-8 mb-8">
            <div className="flex items-start justify-between mb-6">
              <div className="w-16 h-16 rounded-lg bg-crab-600/20 flex items-center justify-center">
                <Radar className="w-8 h-8 text-crab-400" />
              </div>
              <div className="text-right">
                <span className="text-crab-400 font-display text-2xl block">{pricing.displayText}</span>
                {pricing.discountApplied > 0 && (
                  <span className="text-xs text-neon-mint">~${pricing.usdValue.toFixed(3)} value</span>
                )}
              </div>
            </div>

            <h1 className="font-arcade text-3xl text-white mb-4">Moltlaunch Scanner</h1>
            <p className="text-lg text-gray-400 mb-8">
              Real-time Moltlaunch agent network analysis. Get top power scores, volume trends, 
              and treasury insights from active KOBOLDS monitoring.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="p-4 bg-shell-800/50 rounded-lg">
                <Zap className="w-5 h-5 text-neon-peach mb-2" />
                <h3 className="text-sm text-gray-300">Power Scores</h3>
                <p className="text-xs text-gray-500">Top 5 agents ranked</p>
              </div>
              <div className="p-4 bg-shell-800/50 rounded-lg">
                <TrendingUp className="w-5 h-5 text-neon-mint mb-2" />
                <h3 className="text-sm text-gray-300">Volume Data</h3>
                <p className="text-xs text-gray-500">24h trading metrics</p>
              </div>
              <div className="p-4 bg-shell-800/50 rounded-lg">
                <Wallet className="w-5 h-5 text-crab-400 mb-2" />
                <h3 className="text-sm text-gray-300">Treasury Health</h3>
                <p className="text-xs text-gray-500">Cross-holdings value</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Pay with</label>
                <TokenSelector
                  service={service}
                  selectedToken={selectedToken}
                  onSelect={setSelectedToken}
                />
                {pricing.discountApplied > 0 && (
                  <p className="text-xs text-neon-mint flex items-center gap-1">
                    <BadgePercent className="w-3 h-3" />
                    You save 10% with {selectedToken}!
                  </p>
                )}
              </div>

              <X402Payment
                service={service}
                onSuccess={handlePaymentSuccess}
                buttonText={`Pay ${pricing.displayText} & Scan`}
                showTokenSelector={false}
              />
            </div>

            <div className="mt-6 p-4 bg-shell-800/30 rounded-lg">
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <Coins className="w-4 h-4 text-crab-400" />
                <span>Or pay with USDC ($0.05), DRAKIN (5,000), or KOBOLDS (5,000)</span>
              </div>
            </div>

            <p className="text-xs text-gray-500 mt-4 text-center">
              Payment processed via OpenFacilitator x402 on Base. Data updates in real-time.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-shell-950 texture-grid flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 text-crab-400 animate-spin mx-auto mb-4" />
          <p className="text-gray-400">Scanning Moltlaunch network...</p>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen bg-shell-950 texture-grid flex items-center justify-center">
        <div className="text-center">
          <p className="text-crab-400 mb-4">{error || 'Failed to load'}</p>
          <button onClick={fetchData} className="btn-retro">
            Retry Scan
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-shell-950 texture-grid">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-white">
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </Link>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Activity className="w-4 h-4 text-neon-mint" />
            <span>Live Data • {new Date(data.timestamp).toLocaleTimeString()}</span>
          </div>
        </div>

        {/* Treasury Overview */}
        <div className="panel-retro p-6 mb-6">
          <h2 className="font-display text-xl text-white mb-4 flex items-center gap-2">
            <Wallet className="w-5 h-5 text-crab-400" />
            KOBOLDS Treasury
          </h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div>
              <p className="text-sm text-gray-500">Total Value</p>
              <p className="text-2xl font-display text-white">${data.treasury.totalUsd}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">ETH Balance</p>
              <p className="text-xl font-display text-white">{data.treasury.ethBalance.toFixed(4)} ETH</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Positions</p>
              <p className="text-xl font-display text-white">{data.treasury.totalPositions}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Network Agents</p>
              <p className="text-xl font-display text-white">{data.scanner.totalAgents}</p>
            </div>
          </div>
        </div>

        {/* Top Agents */}
        <div className="panel-retro p-6 mb-6">
          <h2 className="font-display text-xl text-white mb-4 flex items-center gap-2">
            <Radar className="w-5 h-5 text-crab-400" />
            Top 5 Agents by Power Score
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm text-gray-500 border-b border-shell-700">
                  <th className="pb-3">Agent</th>
                  <th className="pb-3">Power Score</th>
                  <th className="pb-3">24h Volume</th>
                  <th className="pb-3">Market Cap</th>
                  <th className="pb-3">USD Value</th>
                </tr>
              </thead>
              <tbody>
                {data.topAgents.map((agent) => (
                  <tr key={agent.symbol} className="border-b border-shell-700/50">
                    <td className="py-4">
                      <div>
                        <p className="font-medium text-white">{agent.symbol}</p>
                        <p className="text-xs text-gray-500">{agent.name}</p>
                      </div>
                    </td>
                    <td className="py-4">
                      <span className="text-neon-mint font-display">{agent.powerScore}</span>
                    </td>
                    <td className="py-4 text-gray-300">{agent.volume24hETH.toFixed(1)} ETH</td>
                    <td className="py-4 text-gray-300">{agent.marketCapETH.toFixed(1)} ETH</td>
                    <td className="py-4 text-crab-400">${agent.usdValue?.toFixed(2) || '0.00'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Activity */}
        {data.recentActivity.length > 0 && (
          <div className="panel-retro p-6">
            <h2 className="font-display text-xl text-white mb-4 flex items-center gap-2">
              <Activity className="w-5 h-5 text-crab-400" />
              Recent On-Chain Activity
            </h2>
            <div className="space-y-3">
              {data.recentActivity.map((activity) => (
                <div key={activity.id} className="p-3 bg-shell-800/50 rounded-lg">
                  <p className="text-sm text-gray-300">{activity.content}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {new Date(activity.timestamp).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';
import { BarChart3, TrendingUp, PieChart, Play, Download, Loader2, CheckCircle } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { X402Payment } from '../components/X402Payment';
import { useAccount } from 'wagmi';

export default function AnalyticsPage() {
  const { isConnected } = useAccount();
  const [isRunning, setIsRunning] = useState(false);
  const [results, setResults] = useState<any>(null);
  const [selectedService, setSelectedService] = useState<'data' | 'metrics' | 'forecast' | null>(null);

  const analyticsServices = [
    {
      id: 'data',
      title: 'Data Analysis',
      description: 'Analyze your uploaded data with advanced AI',
      icon: BarChart3,
      price: '10 USDC',
      features: ['CSV/JSON Upload', 'Statistical Analysis', 'Pattern Detection'],
    },
    {
      id: 'metrics',
      title: 'Custom Metrics',
      description: 'Build and track custom KPIs',
      icon: TrendingUp,
      price: '15 USDC',
      features: ['KPI Definition', 'Real-time Tracking', 'Alerts'],
    },
    {
      id: 'forecast',
      title: 'AI Forecasting',
      description: 'Predict trends and outcomes',
      icon: PieChart,
      price: '25 USDC',
      features: ['Time Series', 'Regression Models', 'Confidence Intervals'],
    },
  ];

  const handleRun = (serviceId: string) => {
    setSelectedService(serviceId as 'data' | 'metrics' | 'forecast');
  };

  const handlePaymentSuccess = (response: unknown) => {
    setIsRunning(true);
    setTimeout(() => {
      setResults({
        status: 'completed',
        timestamp: new Date().toISOString(),
        metrics: {
          totalDataPoints: 1250,
          processed: 1250,
          insights: 8,
          accuracy: '94.7%',
        },
        chartData: [
          { label: 'Jan', value: 65 },
          { label: 'Feb', value: 78 },
          { label: 'Mar', value: 92 },
          { label: 'Apr', value: 85 },
          { label: 'May', value: 105 },
          { label: 'Jun', value: 118 },
        ],
      });
      setIsRunning(false);
      setSelectedService(null);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-shell-950 texture-grid">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-crab-600/20 flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-crab-400" />
            </div>
            <div>
              <h1 className="font-display text-2xl sm:text-3xl text-white">AI Analytics</h1>
              <p className="text-gray-400 text-sm">Advanced data analysis and visualization</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Services */}
          <div className="lg:col-span-2 space-y-6">
            {/* Service Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {analyticsServices.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.id}
                    className={`panel-retro p-6 transition-all cursor-pointer border-2 ${
                      selectedService === service.id && selectedService
                        ? 'border-crab-500 bg-crab-950/30'
                        : 'border-transparent hover:border-shell-700'
                    }`}
                    onClick={() => !isRunning && handleRun(service.id)}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 rounded-lg bg-crab-600/20 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-crab-400" />
                      </div>
                      <span className="text-crab-400 font-display text-sm">
                        {service.price}
                      </span>
                    </div>

                    <h3 className="font-display text-lg text-white mb-2">
                      {service.title}
                    </h3>

                    <p className="text-sm text-gray-400 mb-4">
                      {service.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-2 py-1 bg-shell-800 rounded text-xs text-gray-500"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <button className="btn-retro w-full flex items-center justify-center gap-2">
                      {isRunning && selectedService === service.id ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Running...</span>
                        </>
                      ) : results ? (
                        <>
                          <CheckCircle className="w-4 h-4 text-neon-mint" />
                          <span>Ran Successfully</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4" />
                          <span>Run {service.title}</span>
                        </>
                      )}
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Results Section */}
            {results && (
              <div className="panel-retro p-6 border-crab-700/30">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-display text-lg text-white flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-neon-mint" />
                    Analysis Results
                  </h2>
                  <button className="btn-retro btn-retro-secondary flex items-center gap-2 text-sm">
                    <Download className="w-4 h-4" />
                    <span>Export</span>
                  </button>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                  {Object.entries(results.metrics).map(([key, value]) => (
                    <div key={key} className="bg-shell-800 rounded-lg p-4">
                      <p className="text-xs text-gray-500 uppercase mb-1">{key}</p>
                      <p className="font-display text-xl text-white">
                        {String(value)}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Chart Preview */}
                <div className="bg-shell-800 rounded-lg p-6">
                  <h3 className="text-sm text-gray-400 mb-4">Trend Analysis</h3>
                  <div className="flex items-end justify-between h-40 gap-2">
                    {results.chartData.map((item: any) => (
                      <div key={item.label} className="flex-1 flex flex-col items-center gap-2">
                        <div
                          className="w-full bg-gradient-to-t from-crab-600 to-crab-400 rounded-t transition-all"
                          style={{ height: `${(item.value / 120) * 100}%` }}
                        />
                        <span className="text-xs text-gray-500">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Payment */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              {/* Payment Info */}
              {selectedService && (
                <div className="panel-retro p-6">
                  <h3 className="font-display text-lg text-white mb-4">
                    Run Analytics
                  </h3>

                  <div className="p-4 bg-shell-800 rounded-lg mb-6">
                    <p className="text-sm text-gray-400 mb-2">Selected Service:</p>
                    <p className="font-display text-lg text-white">
                      {analyticsServices.find((s) => s.id === selectedService)?.title}
                    </p>
                  </div>

                  {!isConnected ? (
                    <div className="p-4 bg-shell-800 rounded-lg text-center">
                      <p className="text-sm text-gray-400">Connect wallet to run analytics</p>
                    </div>
                  ) : (
                    <X402Payment
                      service="analytics"
                      onSuccess={handlePaymentSuccess}
                      buttonText={`Pay & Run`}
                    />
                  )}
                </div>
              )}

              {/* Features */}
              <div className="panel-retro p-4">
                <h4 className="text-sm text-gray-400 mb-3">Analytics Features:</h4>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-crab-500 rounded-full" />
                    Multi-format data input
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-crab-500 rounded-full" />
                    Advanced ML algorithms
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-crab-500 rounded-full" />
                    Real-time visualization
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-crab-500 rounded-full" />
                    Export to CSV/PDF
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
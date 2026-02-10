'use client';

import { useState } from 'react';
import { Shield, AlertTriangle, CheckCircle, FileCode, Play, Download } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { X402Payment } from '../components/X402Payment';
import { useAccount } from 'wagmi';

export default function SecurityAuditPage() {
  const { isConnected } = useAccount();
  const [code, setCode] = useState('');
  const [hasPaid, setHasPaid] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [results, setResults] = useState<any>(null);

  const handlePaymentSuccess = () => {
    setHasPaid(true);
  };

  const runScan = async () => {
    if (!code.trim()) return;
    
    setIsScanning(true);
    
    // Simulate kobold-scan analysis
    setTimeout(() => {
      setResults({
        status: 'completed',
        timestamp: new Date().toISOString(),
        summary: {
          totalLines: code.split('\n').length,
          issuesFound: Math.floor(Math.random() * 3), // 0-2 issues for demo
          severity: 'low',
        },
        findings: [
          {
            line: 15,
            type: 'Info',
            message: 'Consider adding explicit visibility modifiers',
            recommendation: 'Add "public" or "external" to function declarations',
          },
          {
            line: 42,
            type: 'Warning',
            message: 'Uninitialized storage variable',
            recommendation: 'Initialize variables before use',
          },
        ].slice(0, Math.floor(Math.random() * 2) + 1),
        scanId: Math.random().toString(36).substring(7),
      });
      setIsScanning(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-shell-950 texture-grid">
      <Navigation />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-crab-600/20 flex items-center justify-center">
              <Shield className="w-6 h-6 text-crab-400" />
            </div>
            <div>
              <h1 className="font-display text-2xl sm:text-3xl text-white">Security Audit</h1>
              <p className="text-gray-400 text-sm">Smart contract security scan with kobold-scan</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Code Input */}
            <div className="panel-retro p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-display text-lg text-white flex items-center gap-2">
                  <FileCode className="w-5 h-5 text-crab-400" />
                  Contract Code
                </h2>
                <span className="text-xs text-gray-500">Paste Solidity or JavaScript</span>
              </div>

              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="// Paste your smart contract code here...
pragma solidity ^0.8.0;

contract MyContract {
  // Your code here
}"
                className="w-full h-64 bg-shell-900 border border-shell-700 rounded-lg p-4 font-mono text-sm text-gray-300 focus:border-crab-500 focus:outline-none resize-none"
                disabled={isScanning}
              />

              <div className="flex items-center justify-between mt-4">
                <span className="text-sm text-gray-500">
                  {code.split('\n').filter(l => l.trim()).length} lines
                </span>
                <button
                  onClick={runScan}
                  disabled={!hasPaid || !code.trim() || isScanning}
                  className="btn-retro flex items-center gap-2 disabled:opacity-50"
                >
                  {isScanning ? (
                    <>
                      <Play className="w-4 h-4 animate-pulse" />
                      <span>Scanning...</span>
                    </>
                  ) : (
                    <>
                      <Shield className="w-4 h-4" />
                      <span>Run Security Scan</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Results */}
            {results && (
              <div className="panel-retro p-6 border-crab-700/30">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-display text-lg text-white flex items-center gap-2">
                    {results.summary.issuesFound === 0 ? (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : (
                      <AlertTriangle className="w-5 h-5 text-yellow-500" />
                    )}
                    Scan Results
                  </h2>
                  <button className="btn-retro btn-retro-secondary flex items-center gap-2 text-sm">
                    <Download className="w-4 h-4" />
                    <span>Export</span>
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-shell-800 rounded-lg p-4 text-center">
                    <p className="text-xs text-gray-500 uppercase mb-1">Lines</p>
                    <p className="font-display text-xl text-white">{results.summary.totalLines}</p>
                  </div>
                  <div className="bg-shell-800 rounded-lg p-4 text-center">
                    <p className="text-xs text-gray-500 uppercase mb-1">Issues</p>
                    <p className={`font-display text-xl ${results.summary.issuesFound === 0 ? 'text-green-500' : 'text-yellow-500'}`}>
                      {results.summary.issuesFound}
                    </p>
                  </div>
                  <div className="bg-shell-800 rounded-lg p-4 text-center">
                    <p className="text-xs text-gray-500 uppercase mb-1">Severity</p>
                    <p className="font-display text-xl text-green-500 capitalize">{results.summary.severity}</p>
                  </div>
                </div>

                {results.findings.length > 0 && (
                  <div className="space-y-3">
                    <h3 className="text-sm text-gray-400">Findings:</h3>
                    {results.findings.map((finding: any, idx: number) => (
                      <div key={idx} className="bg-shell-800 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${finding.type === 'Warning' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-blue-500/20 text-blue-400'}`}>
                            {finding.type}
                          </span>
                          <span className="text-sm text-gray-400">Line {finding.line}</span>
                        </div>
                        <p className="text-white text-sm mb-1">{finding.message}</p>
                        <p className="text-gray-500 text-xs">{finding.recommendation}</p>
                      </div>
                    ))}
                  </div>
                )}

                <p className="text-xs text-gray-500 mt-4 text-center">
                  Scan ID: {results.scanId}
                </p>
              </div>
            )}
          </div>

          {/* Payment Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              <div className="panel-retro p-6">
                <h3 className="font-display text-lg text-white mb-4">Security Scan</h3>
                
                <div className="p-4 bg-shell-800 rounded-lg mb-6">
                  <p className="text-sm text-gray-400 mb-2">Service:</p>
                  <p className="text-white font-medium">Smart Contract Audit</p>
                  <p className="text-xs text-gray-500 mt-1">kobold-scan analysis</p>
                </div>

                {!isConnected ? (
                  <div className="p-4 bg-shell-800 rounded-lg text-center">
                    <p className="text-sm text-gray-400">Connect wallet to scan</p>
                  </div>
                ) : hasPaid ? (
                  <div className="p-4 bg-green-900/20 border border-green-700/30 rounded-lg text-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mx-auto mb-2" />
                    <p className="text-sm text-green-400">Paid — Ready to scan</p>
                  </div>
                ) : (
                  <X402Payment
                    service="security-audit"
                    onSuccess={handlePaymentSuccess}
                    buttonText="Pay & Scan"
                  />
                )}
              </div>

              <div className="panel-retro p-4">
                <h4 className="text-sm text-gray-400 mb-3">What you get:</h4>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-crab-500" />
                    Static code analysis
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-crab-500" />
                    Vulnerability detection
                  </li>
                  <li className="flex items-center gap-2">
                    <FileCode className="w-4 h-4 text-crab-500" />
                    Actionable recommendations
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

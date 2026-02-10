'use client';

import { useState } from 'react';
import { Lock, Key, FileCode, CheckCircle, Copy, Terminal } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { X402Payment } from '../components/X402Payment';
import { useAccount } from 'wagmi';

export default function VaultSetupPage() {
  const { isConnected } = useAccount();
  const [hasPaid, setHasPaid] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  const handlePaymentSuccess = () => {
    setHasPaid(true);
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  const setupScript = `# Install SOPS and Age
wget -qO /usr/local/bin/sops https://github.com/getsops/sops/releases/download/v3.9.0/sops-v3.9.0.linux.amd64
chmod +x /usr/local/bin/sops

# Install Age
apt-get update && apt-get install -y age || brew install age

# Generate Age key
age-keygen -o ~/.config/sops/age/keys.txt

# Extract public key
age-keygen -y ~/.config/sops/age/keys.txt

# Create .sops.yaml
cat > .sops.yaml << 'EOF'
creation_rules:
  - path_regex: secrets/.*\\.yaml$
    age: YOUR_PUBLIC_KEY_HERE
EOF

# Encrypt a file
sops -e -i secrets/config.yaml

# Decrypt a file
sops -d secrets/config.yaml`;

  return (
    <div className="min-h-screen bg-shell-950 texture-grid">
      <Navigation />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-crab-600/20 flex items-center justify-center">
              <Lock className="w-6 h-6 text-crab-400" />
            </div>
            <div>
              <h1 className="font-display text-2xl sm:text-3xl text-white">Secret Vault Setup</h1>
              <p className="text-gray-400 text-sm">SOPS + Age encrypted secrets management</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {!hasPaid ? (
              <div className="panel-retro p-6 text-center">
                <Lock className="w-16 h-16 text-crab-400 mx-auto mb-4" />
                <h2 className="font-display text-xl text-white mb-2">Secure Your Secrets</h2>
                <p className="text-gray-400 mb-6 max-w-md mx-auto">
                  Get the complete SOPS + Age vault setup guide with scripts, templates, and best practices for secure API key storage.
                </p>
                <ul className="text-sm text-gray-500 space-y-2 max-w-sm mx-auto mb-6 text-left">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-crab-500" />
                    Step-by-step installation guide
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-crab-500" />
                    Ready-to-use CLI scripts
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-crab-500" />
                    Team sharing configuration
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-crab-500" />
                    CI/CD integration examples
                  </li>
                </ul>
              </div>
            ) : (
              <>
                <div className="panel-retro p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="font-display text-lg text-white flex items-center gap-2">
                      <Terminal className="w-5 h-5 text-crab-400" />
                      Quick Setup Script
                    </h2>
                    <button
                      onClick={() => copyToClipboard(setupScript, 'script')}
                      className="flex items-center gap-1 text-sm text-crab-400 hover:text-crab-300"
                    >
                      {copied === 'script' ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      {copied === 'script' ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                  <pre className="bg-shell-900 rounded-lg p-4 overflow-x-auto text-sm font-mono text-gray-300">
                    {setupScript}
                  </pre>
                </div>

                <div className="panel-retro p-6">
                  <h2 className="font-display text-lg text-white mb-4 flex items-center gap-2">
                    <FileCode className="w-5 h-5 text-crab-400" />
                    Project Structure
                  </h2>
                  <pre className="text-sm font-mono text-gray-400">
{`your-project/
├── .sops.yaml          # Encryption rules
├── secrets/            # Encrypted files
│   ├── api-keys.yaml
│   └── database.yaml
└── scripts/
    └── decrypt.sh      # Helper scripts`}
                  </pre>
                </div>

                <div className="panel-retro p-6">
                  <h2 className="font-display text-lg text-white mb-4">Next Steps</h2>
                  <ol className="space-y-3 text-sm text-gray-400">
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-crab-600/20 text-crab-400 flex items-center justify-center text-xs font-bold">1</span>
                      Run the setup script above to install SOPS and Age
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-crab-600/20 text-crab-400 flex items-center justify-center text-xs font-bold">2</span>
                      Generate your Age keypair and save the public key
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-crab-600/20 text-crab-400 flex items-center justify-center text-xs font-bold">3</span>
                      Create .sops.yaml with your public key
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-crab-600/20 text-crab-400 flex items-center justify-center text-xs font-bold">4</span>
                      Start encrypting secrets with sops -e -i secrets/file.yaml
                    </li>
                  </ol>
                </div>
              </>
            )}
          </div>

          {/* Payment Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              <div className="panel-retro p-6">
                <h3 className="font-display text-lg text-white mb-4">Vault Access</h3>
                
                <div className="p-4 bg-shell-800 rounded-lg mb-6">
                  <p className="text-sm text-gray-400 mb-2">Service:</p>
                  <p className="text-white font-medium">SOPS + Age Setup</p>
                  <p className="text-xs text-gray-500 mt-1">Complete guide with scripts</p>
                </div>

                {!isConnected ? (
                  <div className="p-4 bg-shell-800 rounded-lg text-center">
                    <p className="text-sm text-gray-400">Connect wallet to access</p>
                  </div>
                ) : hasPaid ? (
                  <div className="p-4 bg-green-900/20 border border-green-700/30 rounded-lg text-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mx-auto mb-2" />
                    <p className="text-sm text-green-400">Paid — Full access granted</p>
                  </div>
                ) : (
                  <X402Payment
                    service="vault-setup"
                    onSuccess={handlePaymentSuccess}
                    buttonText="Get Access"
                  />
                )}
              </div>

              <div className="panel-retro p-4">
                <h4 className="text-sm text-gray-400 mb-3">What's included:</h4>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li className="flex items-center gap-2">
                    <Key className="w-4 h-4 text-crab-500" />
                    Age key generation
                  </li>
                  <li className="flex items-center gap-2">
                    <FileCode className="w-4 h-4 text-crab-500" />
                    SOPS configuration
                  </li>
                  <li className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-crab-500" />
                    CLI helper scripts
                  </li>
                  <li className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-crab-500" />
                    CI/CD integration
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

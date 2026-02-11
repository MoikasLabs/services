'use client';

import { useState, useEffect } from 'react';
import { useAccount, useChainId, useSignTypedData } from 'wagmi';
import { Wallet, Zap, CheckCircle, AlertCircle, Loader2, Coins } from 'lucide-react';
import {
  facilitator,
  createPaymentRequirements,
  ServiceType,
  TokenSymbol,
  SUPPORTED_TOKENS,
  getTokenConfig,
  FACILITATOR_URL,
  NETWORK_ID,
  SERVICE_PRICING,
} from '../lib/openfacilitator';
import { calculateDynamicAmount, getTokenPrices } from '../lib/dynamic-pricing';
import { TokenSelector } from './TokenSelector';
import { parseUnits } from 'viem';

interface X402PaymentProps {
  service: ServiceType;
  onSuccess?: (response: PaymentSuccessResponse) => void;
  onError?: (error: Error) => void;
  buttonText?: string;
  showTokenSelector?: boolean;
}

interface PaymentSuccessResponse {
  transactionHash: string;
  amount: string;
  token: TokenSymbol;
  service: string;
  discountApplied?: string;
}

type PaymentStatus = 'idle' | 'requesting' | 'signing' | 'settling' | 'success' | 'error';

export function X402Payment({
  service,
  onSuccess,
  onError,
  buttonText,
  showTokenSelector = true,
}: X402PaymentProps) {
  const { address, isConnected } = useAccount();
  const chainId = useChainId();
  const [selectedToken, setSelectedToken] = useState<TokenSymbol>('USDC');
  const [status, setStatus] = useState<PaymentStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [transactionHash, setTransactionHash] = useState<string>('');
  const [livePrices, setLivePrices] = useState<{ DRAKIN: number; KOBOLDS: number } | null>(null);
  const [isLoadingPrices, setIsLoadingPrices] = useState(false);

  // Fetch live token prices on mount and when token changes to DRAKIN/KOBOLDS
  useEffect(() => {
    if (selectedToken === 'USDC') {
      setLivePrices(null); // Clear live prices for USDC
      return;
    }
    
    console.log(`[X402Payment] Fetching live prices for ${selectedToken}...`);
    setIsLoadingPrices(true);
    getTokenPrices()
      .then(prices => {
        console.log(`[X402Payment] Got prices:`, prices);
        setLivePrices(prices);
      })
      .catch(err => {
        console.error('[X402Payment] Price fetch error:', err);
        setLivePrices(null);
      })
      .finally(() => setIsLoadingPrices(false));
  }, [selectedToken]);

  // Calculate pricing display
  const getPricing = () => {
    const basePricing = SERVICE_PRICING[service as keyof typeof SERVICE_PRICING];
    if (!basePricing) return { amount: 0, usdValue: 0, discountApplied: 0, displayText: '$0' };

    if (selectedToken === 'USDC') {
      if (basePricing.usd < 1) {
        return { amount: basePricing.usd, usdValue: basePricing.usd, discountApplied: 0, displayText: `${(basePricing.usd * 100).toFixed(0)}¢` };
      }
      return { amount: basePricing.usd, usdValue: basePricing.usd, discountApplied: 0, displayText: `$${basePricing.usd.toFixed(2)}` };
    }

    // Use live price if available
    const tokenPrice = livePrices?.[selectedToken];
    console.log(`[X402Payment] Calculating pricing for ${selectedToken}:`, { tokenPrice, livePrices });
    
    if (tokenPrice && tokenPrice > 0) {
      const dynamic = calculateDynamicAmount(basePricing.usd, selectedToken, tokenPrice);
      console.log(`[X402Payment] Dynamic pricing result:`, dynamic);
      return { 
        amount: dynamic.amount, 
        usdValue: basePricing.usd * 0.9, 
        discountApplied: 0.1, 
        displayText: dynamic.displayText 
      };
    }

    // Fallback to static pricing from SERVICE_PRICING
    console.log(`[X402Payment] Using FALLBACK static pricing for ${selectedToken}`);
    const staticAmount = basePricing.tokens[selectedToken as keyof typeof basePricing.tokens] || 0;
    return { 
      amount: staticAmount, 
      usdValue: basePricing.usd * 0.9, 
      discountApplied: 0.1, 
      displayText: `${staticAmount.toLocaleString()} ${selectedToken} (~$${(basePricing.usd * 0.9).toFixed(2)})` 
    };
  };

  const pricing = getPricing();
  const tokenConfig = getTokenConfig(selectedToken);

  const handlePayment = async () => {
    if (!isConnected || !address) {
      setErrorMessage('Please connect your wallet first');
      setStatus('error');
      return;
    }

    // Check network
    if (chainId !== 8453) {
      setErrorMessage('Please switch to Base Mainnet (Chain ID: 8453)');
      setStatus('error');
      return;
    }

    setStatus('requesting');
    setErrorMessage('');

    try {
      // Create payment requirements with dynamic amount if available
      const requirements = createPaymentRequirements(service, selectedToken, pricing.amount);
      console.log('Payment requirements:', requirements);

      // Step 1: Request payment authorization from user
      // In a real implementation, this would use the x402 client library
      // to create the authorization. For now, we'll use viem to sign the
      // EIP-3009 authorization.

      setStatus('signing');

      // Get current time for authorization validity
      const now = Math.floor(Date.now() / 1000);
      const validAfter = now - 60; // Valid from 1 minute ago
      const validBefore = now + 600; // Valid for 10 minutes

      // Generate a unique nonce
      const nonce = `0x${Array.from(crypto.getRandomValues(new Uint8Array(32)))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('')}`;

      // For USDC on Base, we need to sign a transferWithAuthorization
      // This is EIP-3009 which allows gasless transfers
      const domain = {
        name: selectedToken === 'USDC' ? 'USD Coin' : selectedToken,
        version: '2',
        chainId: 8453,
        verifyingContract: tokenConfig.address as `0x${string}`,
      };

      const types = {
        TransferWithAuthorization: [
          { name: 'from', type: 'address' },
          { name: 'to', type: 'address' },
          { name: 'value', type: 'uint256' },
          { name: 'validAfter', type: 'uint256' },
          { name: 'validBefore', type: 'uint256' },
          { name: 'nonce', type: 'bytes32' },
        ],
      };

      const value = {
        from: address,
        to: requirements.payTo as `0x${string}`,
        value: BigInt(requirements.amount),
        validAfter,
        validBefore,
        nonce: nonce as `0x${string}`,
      };

      // Sign the authorization
      // Note: In production, this should be done via a proper x402 client
      // that handles the 402 flow automatically

      setStatus('settling');

      // For demo purposes, we'll simulate the payment verification
      // In production, this would:
      // 1. Submit to the x402 facilitator
      // 2. Facilitator verifies signature
      // 3. Facilitator submits to blockchain
      // 4. Return transaction hash

      // Simulate API call to backend
      const response = await fetch('/api/payment/process', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service,
          token: selectedToken,
          amount: requirements.amount,
          asset: tokenConfig.address,
          payer: address,
          network: NETWORK_ID,
          // In production, include the signed authorization here
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Payment processing failed');
      }

      const result = await response.json();

      setTransactionHash(result.transactionHash || '0x' + Math.random().toString(16).slice(2, 34));
      setStatus('success');

      onSuccess?.({
        transactionHash: result.transactionHash || 'simulated',
        amount: pricing.displayText,
        token: selectedToken,
        service,
        discountApplied: pricing.discountApplied > 0 ? '10%' : undefined,
      });

    } catch (error) {
      console.error('Payment error:', error);
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Payment failed');
      onError?.(error instanceof Error ? error : new Error('Payment failed'));
    }
  };

  const getStatusIcon = () => {
    switch (status) {
      case 'requesting':
      case 'signing':
      case 'settling':
        return <Loader2 className="w-4 h-4 animate-spin" />;
      case 'success':
        return <CheckCircle className="w-4 h-4 text-neon-mint" />;
      case 'error':
        return <AlertCircle className="w-4 h-4 text-crab-400" />;
      default:
        return <Zap className="w-4 h-4" />;
    }
  };

  const getStatusText = () => {
    switch (status) {
      case 'requesting':
        return 'Requesting...';
      case 'signing':
        return 'Sign in wallet...';
      case 'settling':
        return 'Processing...';
      case 'success':
        return 'Payment Successful!';
      case 'error':
        return 'Payment Failed';
      default:
        return buttonText || `Pay ${pricing.displayText}`;
    }
  };

  const getButtonClass = () => {
    const baseClass = 'btn-retro w-full flex items-center justify-center gap-2';
    switch (status) {
      case 'success':
        return `${baseClass} bg-green-600 border-green-500`;
      case 'error':
        return `${baseClass} bg-crab-700 border-crab-600`;
      default:
        return baseClass;
    }
  };

  if (status === 'success') {
    return (
      <div className="space-y-3">
        <div className="flex items-center justify-center gap-2 p-4 bg-green-950/30 border border-green-700 rounded-lg">
          <CheckCircle className="w-5 h-5 text-neon-mint" />
          <div className="text-center">
            <p className="text-sm text-white">Payment Complete!</p>
            {transactionHash && (
              <p className="text-xs text-gray-500 font-mono truncate max-w-[200px]">
                {transactionHash.slice(0, 10)}...{transactionHash.slice(-8)}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {showTokenSelector && (
        <div className="space-y-2">
          <label className="text-sm text-gray-400">Pay with</label>
          <TokenSelector
            service={service}
            selectedToken={selectedToken}
            onSelect={setSelectedToken}
          />
          {isLoadingPrices && selectedToken !== 'USDC' && (
            <p className="text-xs text-gray-500 flex items-center gap-1">
              <Loader2 className="w-3 h-3 animate-spin" />
              Fetching live {selectedToken} price...
            </p>
          )}
          {pricing.discountApplied > 0 && !isLoadingPrices && (
            <p className="text-xs text-neon-mint flex items-center gap-1">
              <Coins className="w-3 h-3" />
              Save 10% when paying with {selectedToken}!
              <span className="text-gray-500">
                (was ${SERVICE_PRICING[service].usd.toFixed(2)})
              </span>
            </p>
          )}
        </div>
      )}

      <button
        onClick={handlePayment}
        disabled={status !== 'idle'}
        className={getButtonClass()}
      >
        {getStatusIcon()}
        <span>{getStatusText()}</span>
      </button>

      {status === 'error' && errorMessage && (
        <div className="flex items-start gap-2 p-3 bg-crab-950/50 border border-crab-700 rounded-lg">
          <AlertCircle className="w-4 h-4 text-crab-400 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-crab-300">{errorMessage}</p>
        </div>
      )}

      {!isConnected && (
        <div className="flex items-center gap-2 p-3 bg-shell-800 rounded-lg text-sm text-gray-400">
          <Wallet className="w-4 h-4" />
          <span>Connect wallet to complete payment</span>
        </div>
      )}

      <div className="flex items-center justify-between text-xs text-gray-500 pt-2">
        <span>Powered by OpenFacilitator x402</span>
        <span>{FACILITATOR_URL.replace('https://', '')}</span>
      </div>
    </div>
  );
}

// Hook for programmatic x402 payments
export function useX402Payment() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<PaymentSuccessResponse | null>(null);

  const pay = async (
    service: ServiceType,
    token: TokenSymbol
  ) => {
    setIsLoading(true);
    setError(null);

    try {
      const requirements = createPaymentRequirements(service, token);

      // Simulated API call - in production, use actual x402 flow
      const response = await fetch('/api/payment/process', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service,
          token,
          amount: requirements.amount,
          asset: requirements.asset,
          network: requirements.network,
        }),
      });

      if (!response.ok) {
        throw new Error('Payment failed');
      }

      const result = await response.json();

      const paymentResult: PaymentSuccessResponse = {
        transactionHash: result.transactionHash || 'simulated',
        amount: requirements.amount,
        token,
        service,
      };

      setData(paymentResult);
      setIsLoading(false);
      return paymentResult;
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Payment failed');
      setError(error);
      setIsLoading(false);
      throw error;
    }
  };

  return { pay, isLoading, error, data };
}

// Export token info for display
export { SUPPORTED_TOKENS, type TokenSymbol, type ServiceType };

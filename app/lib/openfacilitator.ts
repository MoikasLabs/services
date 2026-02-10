/**
 * OpenFacilitator Configuration
 * Multi-token x402 payment support for Shalom Services
 * 
 * Supported tokens:
 * - USDC (Base): 0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913 - base price
 * - DRAKIN (Base): 0xd8ba99F5bef09561ad9510ec67d9D17A3d2e238F - 10% discount
 * - KOBOLDS (Base): 0x8a6d3bb6091ea0dd8b1b87c915041708d11f9d3a - 10% discount
 */

import { OpenFacilitator } from '@openfacilitator/sdk';

// Token contract addresses on Base Mainnet
export const TOKEN_ADDRESSES = {
  USDC: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
  DRAKIN: '0xd8ba99F5bef09561ad9510ec67d9D17A3d2e238F',
  KOBOLDS: '0x8a6d3bb6091ea0dd8b1b87c915041708d11f9d3a',
} as const;

// Token decimals
export const TOKEN_DECIMALS = {
  USDC: 6,
  DRAKIN: 18,
  KOBOLDS: 18,
} as const;

// Token display config
export interface TokenConfig {
  symbol: 'USDC' | 'DRAKIN' | 'KOBOLDS';
  address: string;
  decimals: number;
  discount: number; // 0 = no discount, 0.1 = 10% off
  color: string;
}

export const SUPPORTED_TOKENS: TokenConfig[] = [
  {
    symbol: 'USDC',
    address: TOKEN_ADDRESSES.USDC,
    decimals: TOKEN_DECIMALS.USDC,
    discount: 0,
    color: '#2775CA',
  },
  {
    symbol: 'DRAKIN',
    address: TOKEN_ADDRESSES.DRAKIN,
    decimals: TOKEN_DECIMALS.DRAKIN,
    discount: 0.1, // 10% discount
    color: '#FF6B35',
  },
  {
    symbol: 'KOBOLDS',
    address: TOKEN_ADDRESSES.KOBOLDS,
    decimals: TOKEN_DECIMALS.KOBOLDS,
    discount: 0.1, // 10% discount
    color: '#8B5CF6',
  },
];

// Pricing for services
// USDC: base USD price
// Tokens: amount in token units (with 10% discount applied)
export const SERVICE_PRICING = {
  'ai-research': { 
    usd: 0.01, 
    tokens: { DRAKIN: 1000, KOBOLDS: 1000 }
  },
  'moltlaunch-scanner': { 
    usd: 0.05, 
    tokens: { DRAKIN: 5000, KOBOLDS: 5000 }
  },
  'analytics': { 
    usd: 0.05, 
    tokens: { DRAKIN: 5000, KOBOLDS: 5000 }
  },
  'consulting': { 
    usd: 0.25, 
    tokens: { DRAKIN: 25000, KOBOLDS: 25000 }
  },
  'security-audit': { 
    usd: 0.10, 
    tokens: { DRAKIN: 10000, KOBOLDS: 10000 }
  },
  'vault-setup': { 
    usd: 0.05, 
    tokens: { DRAKIN: 5000, KOBOLDS: 5000 }
  },
} as const;

export type ServiceType = keyof typeof SERVICE_PRICING;
export type TokenSymbol = 'USDC' | 'DRAKIN' | 'KOBOLDS';

// USDC amounts in smallest units (6 decimals)
export function getUSDCAmount(service: ServiceType): string {
  const pricing = SERVICE_PRICING[service];
  // Convert to USDC atomic units (6 decimals)
  return (pricing.usd * 1_000_000).toFixed(0);
}

// Token amounts in smallest units (18 decimals for DRAKIN/KOBOLDS)
export function getTokenAmount(service: ServiceType, token: 'DRAKIN' | 'KOBOLDS'): string {
  const pricing = SERVICE_PRICING[service];
  const amount = pricing.tokens[token];
  // Convert to 18 decimal atomic units
  return (amount * 10**18).toString();
}

// Calculate payment amount for display
export function calculateDisplayAmount(
  service: ServiceType,
  tokenSymbol: TokenSymbol
): { amount: number; usdValue: number; discountApplied: number; displayText: string } {
  const pricing = SERVICE_PRICING[service];
  const token = SUPPORTED_TOKENS.find(t => t.symbol === tokenSymbol);
  
  if (!token) {
    throw new Error(`Invalid token: ${tokenSymbol}`);
  }

  if (tokenSymbol === 'USDC') {
    return {
      amount: pricing.usd,
      usdValue: pricing.usd,
      discountApplied: 0,
      displayText: `$${pricing.usd.toFixed(2)}`,
    };
  }

  // For DRAKIN/KOBOLDS, show token amount with 10% discount
  const tokenAmount = pricing.tokens[tokenSymbol];
  const usdValue = pricing.usd * 0.9; // 10% discount

  return {
    amount: tokenAmount,
    usdValue,
    discountApplied: 0.1,
    displayText: `${tokenAmount.toLocaleString()} ${tokenSymbol}`,
  };
}

// Format amount for display
export function formatAmount(amount: number, symbol: string): string {
  if (symbol === 'USDC') {
    return `$${amount.toFixed(2)}`;
  }
  return `${amount.toLocaleString()} ${symbol}`;
}

// OpenFacilitator configuration
export const FACILITATOR_URL = process.env.NEXT_PUBLIC_FACILITATOR_URL || 'https://pay.openfacilitator.io';

// Initialize OpenFacilitator client
export const facilitator = new OpenFacilitator({ url: FACILITATOR_URL });

// Treasury address where payments go
export const TREASURY_ADDRESS = process.env.NEXT_PUBLIC_TREASURY_ADDRESS || '0xc406fFf2Ce8b5dce517d03cd3531960eb2F6110d';

// Network ID for Base Mainnet (CAIP-2)
export const NETWORK_ID = 'eip155:8453';

// Create payment requirements for a specific service and token
export function createPaymentRequirements(
  service: ServiceType,
  tokenSymbol: TokenSymbol
) {
  const token = SUPPORTED_TOKENS.find(t => t.symbol === tokenSymbol)!;
  
  let amount: string;
  if (tokenSymbol === 'USDC') {
    amount = getUSDCAmount(service);
  } else {
    amount = getTokenAmount(service, tokenSymbol);
  }

  const { usdValue, discountApplied } = calculateDisplayAmount(service, tokenSymbol);

  return {
    scheme: 'exact' as const,
    network: NETWORK_ID,
    amount,
    asset: token.address,
    payTo: TREASURY_ADDRESS,
    maxTimeoutSeconds: 300, // 5 minutes
    resource: `https://services.shalohm.co/${service}`,
    description: `${service} service payment`,
    extra: {
      service,
      tokenSymbol,
      usdEquivalent: usdValue,
      discountApplied: discountApplied > 0 ? `${(discountApplied * 100).toFixed(0)}%` : null,
    },
  };
}

// Export token symbols for easy access
export const TOKEN_SYMBOLS: TokenSymbol[] = ['USDC', 'DRAKIN', 'KOBOLDS'];

// Get token config by symbol
export function getTokenConfig(symbol: TokenSymbol): TokenConfig {
  const token = SUPPORTED_TOKENS.find(t => t.symbol === symbol);
  if (!token) throw new Error(`Unknown token: ${symbol}`);
  return token;
}

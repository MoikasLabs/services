// OpenFacilitator Configuration - Multi-token x402 payments
// Uses the real @openfacilitator/sdk for verification, settlement, and refund protection

import {
  OpenFacilitator,
  createPaymentContext,
  withRefundProtection as _withRefundProtection,
  type PaymentContext,
  type PaymentRequirements,
  type PaymentRequirementsV2,
} from '@openfacilitator/sdk';

export { OpenFacilitator, createPaymentContext, type PaymentContext, type PaymentRequirements, type PaymentRequirementsV2 };
export { withRefundProtection } from '@openfacilitator/sdk';

// App-specific types (extend from SDK or define locally)
export type TokenSymbol = 'USDC' | 'DRAKIN' | 'KOBOLDS';
export type ServiceType =
  | 'ai-research'
  | 'analytics'
  | 'consulting'
  | 'security-audit'
  | 'vault-setup';

export const TOKEN_ADDRESSES = {
  USDC: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
  DRAKIN: '0xd8ba99F5bef09561ad9510ec67d9D17A3d2e238F',
  KOBOLDS: '0x8a6d3bb6091ea0dd8b1b87c915041708d11f9d3a',
};

export const SERVICE_PRICING = {
  'ai-research': { usd: 0.01, tokens: { DRAKIN: 1000, KOBOLDS: 1000 } },
  'analytics': { usd: 0.05, tokens: { DRAKIN: 5000, KOBOLDS: 5000 } },
  'consulting': { usd: 0.25, tokens: { DRAKIN: 25000, KOBOLDS: 25000 } },
  'security-audit': { usd: 0.10, tokens: { DRAKIN: 10000, KOBOLDS: 10000 } },
  'vault-setup': { usd: 0.05, tokens: { DRAKIN: 5000, KOBOLDS: 5000 } },
};

export const TREASURY_ADDRESS = '0xc406fFf2Ce8b5dce517d03cd3531960eb2F6110d';
export const FACILITATOR_URL = 'https://pay.openfacilitator.io';
export const NETWORK_ID = 'eip155:8453';

// Initialize facilitator client (singleton)
export const facilitator = new OpenFacilitator({ url: FACILITATOR_URL });

// Token configuration with addresses, colors, and discounts
export const SUPPORTED_TOKENS: Array<{
  symbol: TokenSymbol;
  name: string;
  address: string;
  decimals: number;
  discount: number;
  color: string;
}> = [
  {
    symbol: 'USDC',
    name: 'USD Coin',
    address: TOKEN_ADDRESSES.USDC,
    decimals: 6,
    discount: 0,
    color: '#2775CA',
  },
  {
    symbol: 'DRAKIN',
    name: 'DRAKIN',
    address: TOKEN_ADDRESSES.DRAKIN,
    decimals: 18,
    discount: 0.1,
    color: '#FF6B35',
  },
  {
    symbol: 'KOBOLDS',
    name: 'KOBOLDS',
    address: TOKEN_ADDRESSES.KOBOLDS,
    decimals: 18,
    discount: 0.1,
    color: '#8B5CF6',
  },
];

// Export token config helper (includes address for components)
export function getTokenConfig(symbol: string) {
  const token = SUPPORTED_TOKENS.find((t) => t.symbol === symbol);
  if (!token) {
    return SUPPORTED_TOKENS[0]; // Default to USDC
  }
  return token;
}

// Calculate payment amount with discount
export function calculateDisplayAmount(service: string, token: string) {
  const pricing = SERVICE_PRICING[service as keyof typeof SERVICE_PRICING];
  if (!pricing) return { amount: 0, usdValue: 0, discountApplied: 0, displayText: '$0' };

  if (token === 'USDC') {
    return { amount: pricing.usd, usdValue: pricing.usd, discountApplied: 0, displayText: `$${pricing.usd.toFixed(2)}` };
  }

  const tokenAmount = pricing.tokens[token as keyof typeof pricing.tokens] || 0;
  const usdValue = pricing.usd * 0.9; // 10% discount
  return { amount: tokenAmount, usdValue, discountApplied: 0.1, displayText: `${tokenAmount.toLocaleString()} ${token}` };
}

// Create payment requirements for x402 (v2 format)
export function createPaymentRequirements(service: string, token: string): PaymentRequirementsV2 {
  const pricing = SERVICE_PRICING[service as keyof typeof SERVICE_PRICING];
  const tokenAddress = TOKEN_ADDRESSES[token as keyof typeof TOKEN_ADDRESSES] || TOKEN_ADDRESSES.USDC;

  let amount: string;
  if (token === 'USDC') {
    amount = (pricing.usd * 1_000_000).toFixed(0); // 6 decimals
  } else {
    const tokenAmount = pricing.tokens[token as keyof typeof pricing.tokens] || 0;
    amount = (tokenAmount * 10 ** 18).toString();
  }

  return {
    scheme: 'exact',
    network: 'eip155:8453',
    amount,
    asset: tokenAddress,
    payTo: TREASURY_ADDRESS,
    maxTimeoutSeconds: 300,
  };
}

export const TOKEN_SYMBOLS: TokenSymbol[] = ['USDC', 'DRAKIN', 'KOBOLDS'];

// Extend PaymentContext with service details for our app
export type AppPaymentContext = PaymentContext & {
  service: string;
  token: string;
  query?: string;
};

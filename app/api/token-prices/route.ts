import { NextResponse } from 'next/server';

const GECKO_API = 'https://api.geckoterminal.com/api/v2';

const TOKENS = {
  DRAKIN: {
    address: '0xd8ba99F5bef09561ad9510ec67d9D17A3d2e238F',
    network: 'base',
    decimals: 18,
  },
  KOBOLDS: {
    address: '0x8a6d3bb6091ea0dd8b1b87c915041708d11f9d3a',
    network: 'base',
    decimals: 18,
  },
};

interface TokenPrice {
  symbol: string;
  price_usd: number;
  volume_24h_usd: number;
  updated_at: string;
}

// Simple in-memory cache (5 minute TTL)
const cache = new Map<string, { data: TokenPrice; timestamp: number }>();
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

async function fetchTokenPrice(symbol: string, address: string, network: string): Promise<TokenPrice> {
  // Check cache
  const cached = cache.get(symbol);
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return cached.data;
  }

  try {
    const response = await fetch(
      `${GECKO_API}/networks/${network}/tokens/${address}`,
      { 
        headers: { 
          'Accept': 'application/json',
        },
        next: { revalidate: 300 } // cache 5 min
      }
    );

    if (!response.ok) {
      throw new Error(`GeckoTerminal error: ${response.status}`);
    }

    const json = await response.json();
    const attrs = json.data?.attributes;

    if (!attrs) {
      throw new Error('Invalid response format');
    }

    const price = parseFloat(attrs.price_usd || '0');
    const volume24h = attrs.volume_usd?.h24 || 0;

    const priceData: TokenPrice = {
      symbol,
      price_usd: price,
      volume_24h_usd: parseFloat(volume24h),
      updated_at: new Date().toISOString(),
    };

    // Store in cache
    cache.set(symbol, { data: priceData, timestamp: Date.now() });

    return priceData;
  } catch (error) {
    console.error(`Failed to fetch ${symbol} price:`, error);
    // Return cached data even if expired, or throw
    if (cached) return cached.data;
    throw error;
  }
}

export async function GET() {
  try {
    const [drakin, kobolds] = await Promise.all([
      fetchTokenPrice('DRAKIN', TOKENS.DRAKIN.address, TOKENS.DRAKIN.network),
      fetchTokenPrice('KOBLDS', TOKENS.KOBOLDS.address, TOKENS.KOBOLDS.network),
    ]);

    return NextResponse.json({
      DRAKIN: drakin,
      KOBOLDS: kobolds,
      timestamp: new Date().toISOString(),
      source: 'GeckoTerminal',
    });
  } catch (error) {
    console.error('Token prices fetch failed:', error);
    return NextResponse.json(
      { error: 'Failed to fetch token prices', details: error instanceof Error ? error.message : 'Unknown' },
      { status: 500 }
    );
  }
}

// Calculate token amount for a USD value
export function calculateTokenAmount(usdAmount: number, tokenPrice: number): number {
  if (!tokenPrice || tokenPrice <= 0) return 0;
  // Add 10% buffer for price slippage
  const amount = (usdAmount / tokenPrice) * 1.1;
  return Math.ceil(amount); // Round up to ensure coverage
}

export const dynamic = 'force-dynamic';

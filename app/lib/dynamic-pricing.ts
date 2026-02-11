// Dynamic Token Pricing - Uses live GeckoTerminal prices
// Calculates accurate token amounts for USD-denominated services

import { calculateTokenAmount } from '../api/token-prices/route';

const PRICE_CACHE_TTL = 4 * 60 * 1000; // 4 minutes (under API route's 5 min)

interface TokenPriceCache {
  DRAKIN: { price: number; timestamp: number } | null;
  KOBOLDS: { price: number; timestamp: number } | null;
}

let priceCache: TokenPriceCache = {
  DRAKIN: null,
  KOBOLDS: null,
};

async function fetchLivePrices(): Promise<{ DRAKIN: number; KOBOLDS: number } | null> {
  try {
    const response = await fetch('/api/token-prices');
    if (!response.ok) throw new Error('Price fetch failed');
    
    const data = await response.json();
    
    return {
      DRAKIN: data.DRAKIN?.price_usd || 0,
      KOBOLDS: data.KOBOLDS?.price_usd || 0,
    };
  } catch (error) {
    console.error('Failed to fetch live prices:', error);
    return null;
  }
}

export async function getTokenPrices(): Promise<{ DRAKIN: number; KOBOLDS: number }> {
  const now = Date.now();
  
  // Check if cache is still valid
  const drakinValid = priceCache.DRAKIN && (now - priceCache.DRAKIN.timestamp < PRICE_CACHE_TTL);
  const koboldsValid = priceCache.KOBOLDS && (now - priceCache.KOBOLDS.timestamp < PRICE_CACHE_TTL);
  
  if (drakinValid && koboldsValid) {
    return {
      DRAKIN: priceCache.DRAKIN!.price,
      KOBOLDS: priceCache.KOBOLDS!.price,
    };
  }
  
  // Fetch fresh prices
  const fresh = await fetchLivePrices();
  
  if (fresh && fresh.DRAKIN > 0 && fresh.KOBOLDS > 0) {
    priceCache.DRAKIN = { price: fresh.DRAKIN, timestamp: now };
    priceCache.KOBOLDS = { price: fresh.KOBOLDS, timestamp: now };
    return fresh;
  }
  
  // Fallback to cached even if expired
  if (priceCache.DRAKIN && priceCache.KOBOLDS) {
    console.warn('Using stale price cache');
    return {
      DRAKIN: priceCache.DRAKIN.price,
      KOBOLDS: priceCache.KOBOLDS.price,
    };
  }
  
  // Ultimate fallback (should never happen in production)
  throw new Error('Unable to fetch token prices and no cache available');
}

export function calculateDynamicAmount(
  usdAmount: number,
  token: 'DRAKIN' | 'KOBOLDS',
  tokenPrice: number
): { amount: number; displayText: string; usdValue: number } {
  if (!tokenPrice || tokenPrice <= 0) {
    throw new Error(`Invalid ${token} price: ${tokenPrice}`);
  }
  
  // Calculate raw amount
  const rawAmount = usdAmount / tokenPrice;
  
  // Add 10% buffer for price volatility
  const amountWithBuffer = rawAmount * 1.1;
  
  // Round up and format based on token magnitude
  let amount: number;
  if (amountWithBuffer < 1) {
    // For small amounts (high-value tokens), keep precision
    amount = Math.ceil(amountWithBuffer * 1000000) / 1000000;
  } else if (amountWithBuffer < 1000) {
    amount = Math.ceil(amountWithBuffer * 100) / 100;
  } else {
    amount = Math.ceil(amountWithBuffer);
  }
  
  // Format display
  const formatted = amount < 0.01 
    ? amount.toExponential(2)
    : amount.toLocaleString(undefined, { maximumFractionDigits: 4 });
  
  return {
    amount,
    displayText: `${formatted} ${token} (~$${usdAmount.toFixed(2)})`,
    usdValue: usdAmount,
  };
}

// Pre-calculated amounts for services (updated periodically)
export async function getServicePricing(serviceUsd: number) {
  const prices = await getTokenPrices();
  
  return {
    USDC: { amount: serviceUsd, displayText: `$${serviceUsd.toFixed(2)}` },
    DRAKIN: calculateDynamicAmount(serviceUsd, 'DRAKIN', prices.DRAKIN),
    KOBOLDS: calculateDynamicAmount(serviceUsd, 'KOBOLDS', prices.KOBOLDS),
  };
}

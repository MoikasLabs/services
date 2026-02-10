'use client';

import { useState } from 'react';
import { Check, ChevronDown, BadgePercent } from 'lucide-react';
import { 
  TokenSymbol, 
  SUPPORTED_TOKENS, 
  calculateDisplayAmount,
  ServiceType 
} from '../lib/openfacilitator';

interface TokenSelectorProps {
  selectedToken: TokenSymbol;
  onSelect: (token: TokenSymbol) => void;
  service: ServiceType;
}

export function TokenSelector({ selectedToken, onSelect, service }: TokenSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-3 bg-shell-800 border border-shell-700 rounded-lg hover:border-crab-700 transition-colors"
      >
        <div className="flex items-center gap-3">
          <TokenIcon symbol={selectedToken} />
          <div className="text-left">
            <span className="text-sm font-medium text-white">{selectedToken}</span>
            <span className="text-xs text-gray-500 ml-2">
              {calculateDisplayAmount(service, selectedToken).displayText}
            </span>
          </div>
        </div>
        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-shell-800 border border-shell-700 rounded-lg shadow-xl z-50 overflow-hidden">
          {SUPPORTED_TOKENS.map((token) => {
            const pricing = calculateDisplayAmount(service, token.symbol);
            const isSelected = selectedToken === token.symbol;

            return (
              <button
                key={token.symbol}
                onClick={() => {
                  onSelect(token.symbol);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between p-3 hover:bg-shell-700 transition-colors ${
                  isSelected ? 'bg-crab-950/30' : ''
                }`}
              >
                <div className="flex items-center gap-3">
                  <TokenIcon symbol={token.symbol} />
                  <div className="text-left">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-white">{token.symbol}</span>
                      {token.discount > 0 && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-neon-mint/20 text-neon-mint text-xs rounded-full">
                          <BadgePercent className="w-3 h-3" />
                          SAVE 10%
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-gray-500">
                      {pricing.displayText}
                      {token.discount > 0 && (
                        <span className="text-neon-mint ml-1">
                          (~${pricing.usdValue.toFixed(3)})
                        </span>
                      )}
                    </span>
                  </div>
                </div>
                {isSelected && <Check className="w-4 h-4 text-crab-400" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

function TokenIcon({ symbol }: { symbol: TokenSymbol }) {
  const token = SUPPORTED_TOKENS.find(t => t.symbol === symbol);
  
  if (symbol === 'USDC') {
    return (
      <div className="w-8 h-8 rounded-full bg-[#2775CA] flex items-center justify-center text-white text-xs font-bold">
        U
      </div>
    );
  }
  
  if (symbol === 'DRAKIN') {
    return (
      <div className="w-8 h-8 rounded-full bg-[#FF6B35] flex items-center justify-center text-white text-xs font-bold">
        D
      </div>
    );
  }
  
  if (symbol === 'KOBOLDS') {
    return (
      <div className="w-8 h-8 rounded-full bg-[#8B5CF6] flex items-center justify-center text-white text-xs font-bold">
        K
      </div>
    );
  }
  
  return (
    <div 
      className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
      style={{ backgroundColor: token?.color || '#666' }}
    >
      {symbol[0]}
    </div>
  );
}

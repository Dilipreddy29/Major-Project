import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { MarketIndex } from '../../types/market';
import Badge from '../common/Badge';

interface MarketSummaryCardProps {
  indices: MarketIndex[];
}

export const MarketSummaryCard: React.FC<MarketSummaryCardProps> = ({ indices }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
      {indices.map((idx) => (
        <div
          key={idx.symbol}
          className="bg-surface border border-border rounded-xl p-4 hover:border-border/80 transition-all shadow-sm"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono font-bold text-gray-300">{idx.symbol}</span>
            <Badge variant="neutral" className="text-[10px]">Demo Data</Badge>
          </div>

          <div className="text-lg font-bold text-gray-100 font-mono tracking-tight">
            {idx.value.toLocaleString('en-IN', { maximumFractionDigits: 2 })}
          </div>

          <div className="flex items-center gap-1.5 mt-2 text-xs font-mono">
            {idx.isPositive ? (
              <TrendingUp className="h-3.5 w-3.5 text-emerald-400" />
            ) : (
              <TrendingDown className="h-3.5 w-3.5 text-red-400" />
            )}
            <span className={idx.isPositive ? 'text-emerald-400 font-semibold' : 'text-red-400 font-semibold'}>
              {idx.isPositive ? '+' : ''}{idx.change.toFixed(2)} ({idx.isPositive ? '+' : ''}{idx.changePercent}%)
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MarketSummaryCard;

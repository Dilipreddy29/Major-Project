import React from 'react';
import { Activity, ShieldCheck } from 'lucide-react';
import Card from '../common/Card';
import Badge from '../common/Badge';
import { MarketRegimeInfo } from '../../types/market';

interface MarketRegimeCardProps {
  regimeInfo: MarketRegimeInfo;
}

export const MarketRegimeCard: React.FC<MarketRegimeCardProps> = ({ regimeInfo }) => {
  return (
    <Card
      title="Current Market Regime"
      subtitle="Hidden Markov Model (HMM) Inference Placeholder"
      action={<Badge variant="purple">HMM Engine</Badge>}
    >
      <div className="space-y-4">
        {/* Primary Regime Badge */}
        <div className="flex items-center justify-between bg-background p-4 rounded-lg border border-border">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <div className="text-xs text-gray-400 font-mono uppercase">REGIME STATE</div>
              <div className="text-xl font-extrabold text-blue-400 tracking-tight">
                {regimeInfo.regime}
              </div>
            </div>
          </div>

          <div className="text-right font-mono">
            <div className="text-xs text-gray-400">CONFIDENCE</div>
            <div className="text-lg font-bold text-emerald-400">{regimeInfo.confidence}%</div>
          </div>
        </div>

        {/* Secondary Regime Factors */}
        <div className="grid grid-cols-3 gap-2 text-xs font-mono">
          <div className="bg-background/70 border border-border/60 p-2.5 rounded-lg text-center">
            <div className="text-gray-400">Trend Strength</div>
            <div className="text-gray-200 font-semibold mt-0.5">{regimeInfo.trendStrength}</div>
          </div>
          <div className="bg-background/70 border border-border/60 p-2.5 rounded-lg text-center">
            <div className="text-gray-400">Volatility</div>
            <div className="text-amber-400 font-semibold mt-0.5">{regimeInfo.volatility}</div>
          </div>
          <div className="bg-background/70 border border-border/60 p-2.5 rounded-lg text-center">
            <div className="text-gray-400">Momentum</div>
            <div className="text-emerald-400 font-semibold mt-0.5">{regimeInfo.momentum}</div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[11px] text-gray-400 font-mono pt-1">
          <span className="flex items-center gap-1">
            <Activity className="h-3 w-3 text-blue-400" /> {regimeInfo.lastUpdated}
          </span>
          <span className="text-gray-400">Model: HMM-v1.0</span>
        </div>
      </div>
    </Card>
  );
};

export default MarketRegimeCard;

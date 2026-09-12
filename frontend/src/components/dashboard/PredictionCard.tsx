import React from 'react';
import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';
import Card from '../common/Card';
import Badge from '../common/Badge';
import { StockPrediction } from '../../types/prediction';

interface PredictionCardProps {
  predictions: StockPrediction[];
}

export const PredictionCard: React.FC<PredictionCardProps> = ({ predictions }) => {
  return (
    <Card
      title="Top AI Predictions"
      subtitle="Multi-Horizon Signal Generation (XGBoost)"
      action={<Badge variant="purple">XGBoost-v2.1</Badge>}
    >
      <div className="space-y-3">
        {predictions.map((pred) => (
          <div
            key={pred.id}
            className="bg-background p-3.5 rounded-lg border border-border flex items-center justify-between hover:border-border/80 transition-all font-mono"
          >
            <div className="flex items-center gap-3">
              <div
                className={`h-9 w-9 rounded-lg flex items-center justify-center font-bold ${
                  pred.direction === 'UP'
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                    : pred.direction === 'DOWN'
                    ? 'bg-red-500/10 text-red-400 border border-red-500/30'
                    : 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                }`}
              >
                {pred.direction === 'UP' && <ArrowUpRight className="h-5 w-5" />}
                {pred.direction === 'DOWN' && <ArrowDownRight className="h-5 w-5" />}
                {pred.direction === 'SIDEWAYS' && <Minus className="h-5 w-5" />}
              </div>

              <div>
                <div className="text-sm font-bold text-gray-200">{pred.symbol}</div>
                <div className="text-[11px] text-gray-400 font-sans">{pred.name}</div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-right">
              <div>
                <div className="text-xs text-gray-400">Confidence</div>
                <div className="text-xs font-bold text-emerald-400">{pred.confidence}%</div>
              </div>

              <div className="hidden sm:block">
                <Badge
                  variant={pred.regime === 'BULLISH' ? 'success' : pred.regime === 'BEARISH' ? 'danger' : 'warning'}
                >
                  {pred.regime}
                </Badge>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default PredictionCard;

import React, { useState } from 'react';
import PageHeader from '../../components/common/PageHeader';
import Card from '../../components/common/Card';
import Badge from '../../components/common/Badge';
import { mockPredictions } from '../../data/mockPredictions';
import { Search, Target, ArrowUpRight, ArrowDownRight, Sparkles } from 'lucide-react';

export const EquityPage: React.FC = () => {
  const [selectedSymbol, setSelectedSymbol] = useState(mockPredictions[0].symbol);
  const selectedPred = mockPredictions.find((p) => p.symbol === selectedSymbol) || mockPredictions[0];

  return (
    <div className="space-y-6">
      <PageHeader
        title="Equity Trend Prediction"
        subtitle="Multi-horizon AI trend direction & target price prediction engine."
        action={<Badge variant="purple"><Sparkles className="h-3 w-3 inline mr-1" />XGBoost Ensemble</Badge>}
      />

      {/* Stock Selector & Search Input Mockup */}
      <Card>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3.5 top-3 h-4 w-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search NSE stock symbol (e.g. RELIANCE, TCS, INFY)..."
              value={selectedSymbol}
              onChange={(e) => setSelectedSymbol(e.target.value.toUpperCase())}
              className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-lg text-sm text-gray-200 focus:outline-none focus:border-blue-500 font-mono"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto">
            {mockPredictions.map((p) => (
              <button
                key={p.symbol}
                onClick={() => setSelectedSymbol(p.symbol)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${
                  selectedSymbol === p.symbol
                    ? 'bg-blue-600 text-white'
                    : 'bg-background hover:bg-surface-hover text-gray-400 border border-border'
                }`}
              >
                {p.symbol}
              </button>
            ))}
          </div>
        </div>
      </Card>

      {/* Prediction Output Card & SHAP Explanation */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card
          title={`${selectedPred.symbol} — ${selectedPred.horizon} Prediction`}
          subtitle={selectedPred.name}
          className="lg:col-span-2"
          action={<Badge variant="info">Horizon: {selectedPred.horizon}</Badge>}
        >
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-background border border-border rounded-xl">
              <div className="flex items-center gap-3">
                <div
                  className={`h-12 w-12 rounded-xl flex items-center justify-center font-bold ${
                    selectedPred.direction === 'UP'
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                      : 'bg-red-500/10 text-red-400 border border-red-500/30'
                  }`}
                >
                  {selectedPred.direction === 'UP' ? <ArrowUpRight className="h-7 w-7" /> : <ArrowDownRight className="h-7 w-7" />}
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-mono">PREDICTED DIRECTION</div>
                  <div className="text-2xl font-extrabold text-gray-100 font-mono">
                    {selectedPred.direction === 'UP' ? 'BULLISH (UP)' : 'BEARISH (DOWN)'}
                  </div>
                </div>
              </div>

              <div className="font-mono sm:text-right">
                <div className="text-xs text-gray-400">MODEL CONFIDENCE</div>
                <div className="text-2xl font-extrabold text-emerald-400">{selectedPred.confidence}%</div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
              <div className="bg-background p-3 rounded-lg border border-border">
                <div className="text-gray-400">Current Price</div>
                <div className="text-sm font-bold text-gray-200 mt-1">₹{selectedPred.currentPrice}</div>
              </div>
              <div className="bg-background p-3 rounded-lg border border-border">
                <div className="text-gray-400">Predicted Target</div>
                <div className="text-sm font-bold text-emerald-400 mt-1">₹{selectedPred.targetPrice}</div>
              </div>
              <div className="bg-background p-3 rounded-lg border border-border">
                <div className="text-gray-400">Market Regime</div>
                <div className="text-sm font-bold text-blue-400 mt-1">{selectedPred.regime}</div>
              </div>
              <div className="bg-background p-3 rounded-lg border border-border">
                <div className="text-gray-400">Model Version</div>
                <div className="text-sm font-bold text-purple-400 mt-1">{selectedPred.modelVersion}</div>
              </div>
            </div>
          </div>
        </Card>

        {/* SHAP Feature Attribution Card */}
        <Card
          title="SHAP Feature Importance"
          subtitle="Model Explainability attribution breakdown"
          action={<Badge variant="purple"><Target className="h-3 w-3 inline mr-1" />SHAP Engine</Badge>}
        >
          <div className="space-y-3 font-mono text-xs">
            {selectedPred.shapTopFeatures?.map((feat) => (
              <div key={feat.feature} className="space-y-1">
                <div className="flex justify-between text-gray-300">
                  <span>{feat.feature}</span>
                  <span className="text-purple-400 font-bold">{(feat.impact * 100).toFixed(0)}%</span>
                </div>
                <div className="h-2 w-full bg-background rounded-full overflow-hidden border border-border">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                    style={{ width: `${feat.impact * 100}%` }}
                  />
                </div>
              </div>
            ))}

            <div className="pt-2 text-[11px] text-gray-400 font-sans border-t border-border">
              <strong>Notice:</strong> Machine Learning prediction models and SHAP attribution pipelines will be integrated in a future phase.
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default EquityPage;

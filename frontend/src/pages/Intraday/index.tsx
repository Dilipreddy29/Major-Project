import React, { useState } from 'react';
import PageHeader from '../../components/common/PageHeader';
import Card from '../../components/common/Card';
import Badge from '../../components/common/Badge';
import { Zap, Clock, ShieldAlert } from 'lucide-react';

export const IntradayPage: React.FC = () => {
  const [timeframe, setTimeframe] = useState('5M');

  return (
    <div className="space-y-6">
      <PageHeader
        title="Intraday Prediction Signals"
        subtitle="High-frequency intraday momentum and breakout signal engine."
        action={<Badge variant="warning"><Zap className="h-3 w-3 inline mr-1" />High-Frequency Mode</Badge>}
      />

      {/* Timeframe Selector */}
      <Card>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
            <Clock className="h-4 w-4 text-blue-400" />
            <span>SELECT TIMEFRAME:</span>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs">
            {['1M', '5M', '15M', '1H'].map((tf) => (
              <button
                key={tf}
                onClick={() => setTimeframe(tf)}
                className={`px-3 py-1 rounded-lg border font-semibold transition-all ${
                  timeframe === tf
                    ? 'bg-blue-600 border-blue-500 text-white'
                    : 'bg-background border-border text-gray-400 hover:text-white'
                }`}
              >
                {tf}
              </button>
            ))}
          </div>
        </div>
      </Card>

      {/* Intraday Signals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="RELIANCE Intraday Momentum" subtitle={`${timeframe} Candles`}>
          <div className="space-y-4 font-mono text-xs">
            <div className="flex justify-between p-2.5 bg-background rounded-lg border border-border">
              <span className="text-gray-400">Signal:</span>
              <span className="text-emerald-400 font-bold">BULLISH BREAKOUT</span>
            </div>
            <div className="flex justify-between p-2.5 bg-background rounded-lg border border-border">
              <span className="text-gray-400">Confidence:</span>
              <span className="text-emerald-400 font-bold">84%</span>
            </div>
            <div className="flex justify-between p-2.5 bg-background rounded-lg border border-border">
              <span className="text-gray-400">Risk Level:</span>
              <span className="text-amber-400 font-bold">Moderate (Stop @ 2,960)</span>
            </div>
          </div>
        </Card>

        <Card title="BANK NIFTY Scalp Signal" subtitle={`${timeframe} Candles`}>
          <div className="space-y-4 font-mono text-xs">
            <div className="flex justify-between p-2.5 bg-background rounded-lg border border-border">
              <span className="text-gray-400">Signal:</span>
              <span className="text-red-400 font-bold">SHORT MOMENTUM</span>
            </div>
            <div className="flex justify-between p-2.5 bg-background rounded-lg border border-border">
              <span className="text-gray-400">Confidence:</span>
              <span className="text-emerald-400 font-bold">71%</span>
            </div>
            <div className="flex justify-between p-2.5 bg-background rounded-lg border border-border">
              <span className="text-gray-400">Risk Level:</span>
              <span className="text-red-400 font-bold">High (Stop @ 52,300)</span>
            </div>
          </div>
        </Card>

        <Card title="NIFTY IT Reversal Signal" subtitle={`${timeframe} Candles`}>
          <div className="space-y-4 font-mono text-xs">
            <div className="flex justify-between p-2.5 bg-background rounded-lg border border-border">
              <span className="text-gray-400">Signal:</span>
              <span className="text-emerald-400 font-bold">LONG ACCUMULATION</span>
            </div>
            <div className="flex justify-between p-2.5 bg-background rounded-lg border border-border">
              <span className="text-gray-400">Confidence:</span>
              <span className="text-emerald-400 font-bold">79%</span>
            </div>
            <div className="flex justify-between p-2.5 bg-background rounded-lg border border-border">
              <span className="text-gray-400">Risk Level:</span>
              <span className="text-emerald-400 font-bold">Low (Stop @ 41,900)</span>
            </div>
          </div>
        </Card>
      </div>

      <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl flex items-center gap-3 text-xs text-amber-300 font-mono">
        <ShieldAlert className="h-5 w-5 shrink-0 text-amber-400" />
        <span>Intraday signal generation models and WebSocket live data feeds will be connected in a future task.</span>
      </div>
    </div>
  );
};

export default IntradayPage;

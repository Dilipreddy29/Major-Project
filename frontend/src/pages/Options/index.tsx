import React from 'react';
import PageHeader from '../../components/common/PageHeader';
import Card from '../../components/common/Card';
import Badge from '../../components/common/Badge';
import { Sparkles, PieChart, TrendingUp } from 'lucide-react';

export const OptionsPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Options Analytics & Greeks"
        subtitle="NSE Futures & Options Put-Call Ratio, Open Interest, and Volatility Surface analytics."
        action={<Badge variant="purple"><Sparkles className="h-3 w-3 inline mr-1" />Greeks Calculator</Badge>}
      />

      {/* Options Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono">
        <Card title="NIFTY Put Call Ratio (PCR)" subtitle="Open Interest PCR">
          <div className="text-2xl font-extrabold text-emerald-400 mt-1">1.15</div>
          <div className="text-xs text-gray-400 mt-1">Sentiment: Bullish Bias</div>
        </Card>

        <Card title="Total Call Open Interest" subtitle="Resistance Level">
          <div className="text-2xl font-extrabold text-red-400 mt-1">4.85 M</div>
          <div className="text-xs text-gray-400 mt-1">Max Call OI @ 25,000</div>
        </Card>

        <Card title="Total Put Open Interest" subtitle="Support Level">
          <div className="text-2xl font-extrabold text-emerald-400 mt-1">5.58 M</div>
          <div className="text-xs text-gray-400 mt-1">Max Put OI @ 24,500</div>
        </Card>

        <Card title="India VIX (Volatility)" subtitle="Implied Volatility">
          <div className="text-2xl font-extrabold text-amber-400 mt-1">13.42</div>
          <div className="text-xs text-emerald-400 mt-1">-2.15% Today</div>
        </Card>
      </div>

      {/* Options Chain Analytics Placeholder */}
      <Card
        title="NIFTY 50 Options Chain — Open Interest Distribution"
        subtitle="Call vs Put Open Interest across strike prices"
        action={<Badge variant="info"><PieChart className="h-3 w-3 inline mr-1" />Expiry: Sep 2026</Badge>}
      >
        <div className="space-y-3 font-mono text-xs">
          {[
            { strike: 24500, callOI: 0.8, putOI: 2.1, max: 2.5 },
            { strike: 24700, callOI: 1.2, putOI: 1.8, max: 2.5 },
            { strike: 24850, callOI: 1.9, putOI: 1.4, max: 2.5 },
            { strike: 25000, callOI: 2.5, putOI: 0.6, max: 2.5 },
          ].map((item) => (
            <div key={item.strike} className="p-3 bg-background border border-border rounded-lg space-y-2">
              <div className="flex justify-between font-bold text-gray-200">
                <span>Strike Price: ₹{item.strike}</span>
                <span className="text-blue-400">ATM Range</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="flex justify-between text-red-400 text-[11px] mb-1">
                    <span>Call OI: {item.callOI}M</span>
                  </div>
                  <div className="h-2 w-full bg-surface rounded-full overflow-hidden">
                    <div className="h-full bg-red-500 rounded-full" style={{ width: `${(item.callOI / item.max) * 100}%` }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-emerald-400 text-[11px] mb-1">
                    <span>Put OI: {item.putOI}M</span>
                  </div>
                  <div className="h-2 w-full bg-surface rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${(item.putOI / item.max) * 100}%` }} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default OptionsPage;

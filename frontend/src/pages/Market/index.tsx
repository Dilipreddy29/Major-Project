import React from 'react';
import PageHeader from '../../components/common/PageHeader';
import Card from '../../components/common/Card';
import Badge from '../../components/common/Badge';
import MarketSummaryCard from '../../components/dashboard/MarketSummaryCard';
import { mockMarketIndices, mockSectorPerformance, mockMarketBreadth } from '../../data/mockMarketData';
import { mockMarketRegime } from '../../data/mockRegime';
import { TrendingUp, TrendingDown, Layers, BarChart } from 'lucide-react';

export const MarketPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Market Overview"
        subtitle="Indian Stock Market (NSE) indices, sector performance, and market breadth intelligence."
        action={<Badge variant="info" className="font-mono">NSE Session Active</Badge>}
      />

      {/* Major Indices Grid */}
      <section className="space-y-2">
        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider font-mono">Major Market Indices</h3>
        <MarketSummaryCard indices={mockMarketIndices} />
      </section>

      {/* Sector Performance & Market Breadth */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card
          title="Sector Performance"
          subtitle="Real-time sector returns"
          className="lg:col-span-2"
          action={<Badge variant="neutral"><Layers className="h-3 w-3 inline mr-1" />6 Sectors</Badge>}
        >
          <div className="space-y-3 font-mono">
            {mockSectorPerformance.map((sector) => (
              <div key={sector.sector} className="flex items-center justify-between p-3 bg-background border border-border rounded-lg">
                <span className="text-sm font-semibold text-gray-200">{sector.sector}</span>
                <span className={`text-xs font-bold flex items-center gap-1 ${sector.isPositive ? 'text-emerald-400' : 'text-red-400'}`}>
                  {sector.isPositive ? <TrendingUp className="h-3.5 w-3.5" /> : <TrendingDown className="h-3.5 w-3.5" />}
                  {sector.isPositive ? '+' : ''}{sector.changePercent}%
                </span>
              </div>
            ))}
          </div>
        </Card>

        <Card
          title="Market Breadth"
          subtitle="Advances vs Declines ratio"
          action={<Badge variant="purple"><BarChart className="h-3 w-3 inline mr-1" />A/D Ratio: {mockMarketBreadth.ratio}</Badge>}
        >
          <div className="space-y-4 font-mono">
            <div className="p-3 bg-background border border-border rounded-lg flex justify-between">
              <span className="text-xs text-gray-400">Advances</span>
              <span className="text-sm font-bold text-emerald-400">{mockMarketBreadth.advances}</span>
            </div>
            <div className="p-3 bg-background border border-border rounded-lg flex justify-between">
              <span className="text-xs text-gray-400">Declines</span>
              <span className="text-sm font-bold text-red-400">{mockMarketBreadth.declines}</span>
            </div>
            <div className="p-3 bg-background border border-border rounded-lg flex justify-between">
              <span className="text-xs text-gray-400">Unchanged</span>
              <span className="text-sm font-bold text-amber-400">{mockMarketBreadth.unchanged}</span>
            </div>

            <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg text-xs text-blue-300">
              <strong>Regime Context:</strong> Broad-based market advance supports current <strong>{mockMarketRegime.regime}</strong> market state.
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default MarketPage;

import React from 'react';
import PageHeader from '../../components/common/PageHeader';
import Badge from '../../components/common/Badge';
import MarketSummaryCard from '../../components/dashboard/MarketSummaryCard';
import MarketRegimeCard from '../../components/dashboard/MarketRegimeCard';
import MarketOverviewChart from '../../components/dashboard/MarketOverviewChart';
import PredictionCard from '../../components/dashboard/PredictionCard';
import PortfolioSummaryCard from '../../components/dashboard/PortfolioSummaryCard';
import RecentActivity from '../../components/dashboard/RecentActivity';
import { mockMarketIndices, mockChartData } from '../../data/mockMarketData';
import { mockMarketRegime } from '../../data/mockRegime';
import { mockPredictions } from '../../data/mockPredictions';
import { mockPortfolioSummary } from '../../data/mockPortfolio';
import { mockActivityItems } from '../../data/mockActivity';
import { useAuth } from '../../context/AuthContext';

export const DashboardPage: React.FC = () => {
  const { user, wallet } = useAuth();

  const greetingTime = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <PageHeader
        title={`${greetingTime()}, ${user?.name || 'Trader'} 👋`}
        subtitle="Market intelligence, AI regime analytics, and paper trading portfolio overview."
        action={
          <div className="flex items-center gap-2">
            <Badge variant="info">Phase: Task 3 Static UI</Badge>
            {wallet && (
              <Badge variant="success">
                Wallet: ₹{wallet.balance.toLocaleString('en-IN')}
              </Badge>
            )}
          </div>
        }
      />

      {/* SECTION 1 — MARKET OVERVIEW TICKERS */}
      <section className="space-y-2">
        <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider font-mono">
          Major Indian Market Indices
        </div>
        <MarketSummaryCard indices={mockMarketIndices} />
      </section>

      {/* SECTION 2 & 3 — MARKET REGIME & OVERVIEW CHART */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <MarketRegimeCard regimeInfo={mockMarketRegime} />
        </div>
        <div className="lg:col-span-2">
          <MarketOverviewChart data={mockChartData} />
        </div>
      </section>

      {/* SECTION 4 & 5 — TOP PREDICTIONS & PORTFOLIO SUMMARY */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PredictionCard predictions={mockPredictions.slice(0, 3)} />
        <PortfolioSummaryCard summary={mockPortfolioSummary} />
      </section>

      {/* SECTION 6 — RECENT ACTIVITY LOG */}
      <section>
        <RecentActivity activities={mockActivityItems} />
      </section>
    </div>
  );
};

export default DashboardPage;

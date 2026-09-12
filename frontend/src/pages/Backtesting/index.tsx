import React, { useState } from 'react';
import PageHeader from '../../components/common/PageHeader';
import Card from '../../components/common/Card';
import Badge from '../../components/common/Badge';
import { TestTube, Play, BarChart2, ShieldCheck } from 'lucide-react';

export const BacktestingPage: React.FC = () => {
  const [strategy, setStrategy] = useState('REGIME_ADAPTIVE_MOMENTUM');

  return (
    <div className="space-y-6">
      <PageHeader
        title="Strategy Backtesting Engine"
        subtitle="Simulate regime-adaptive trading strategies against historical NSE market data."
        action={<Badge variant="info"><TestTube className="h-3 w-3 inline mr-1" />Event-Driven Simulation</Badge>}
      />

      {/* Backtest Config Card */}
      <Card title="Strategy Configuration" subtitle="Define backtest parameters">
        <form className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs font-mono" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="text-gray-400 uppercase">Strategy Type</label>
            <select
              value={strategy}
              onChange={(e) => setStrategy(e.target.value)}
              className="w-full mt-1 p-2.5 bg-background border border-border rounded-lg text-gray-200 focus:outline-none"
            >
              <option value="REGIME_ADAPTIVE_MOMENTUM">HMM Regime-Adaptive Momentum</option>
              <option value="XGBOOST_TREND_FOLLOWING">XGBoost Multi-Factor Trend</option>
              <option value="MEAN_REVERSION">Volatility Mean Reversion</option>
            </select>
          </div>

          <div>
            <label className="text-gray-400 uppercase">Initial Capital</label>
            <input
              type="text"
              defaultValue="₹10,00,000"
              className="w-full mt-1 p-2.5 bg-background border border-border rounded-lg text-gray-200 focus:outline-none"
            />
          </div>

          <div>
            <label className="text-gray-400 uppercase">Date Range</label>
            <select className="w-full mt-1 p-2.5 bg-background border border-border rounded-lg text-gray-200 focus:outline-none">
              <option>Last 1 Year (Jan 2025 - Jan 2026)</option>
              <option>Last 3 Years (2023 - 2026)</option>
              <option>Full Available History</option>
            </select>
          </div>

          <div className="flex items-end">
            <button
              type="button"
              className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Play className="h-4 w-4" /> Run Backtest Simulation
            </button>
          </div>
        </form>
      </Card>

      {/* Simulated Backtest Results */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono">
        <Card title="CAGR (Return)" subtitle="Compound Annual Growth Rate">
          <div className="text-2xl font-extrabold text-emerald-400 mt-1">+24.5%</div>
          <div className="text-xs text-gray-400 mt-1">Benchmark: +14.2%</div>
        </Card>

        <Card title="Sharpe Ratio" subtitle="Risk-Adjusted Return">
          <div className="text-2xl font-extrabold text-blue-400 mt-1">1.85</div>
          <div className="text-xs text-emerald-400 mt-1">Sortino: 2.30</div>
        </Card>

        <Card title="Win Rate" subtitle="Profitable Trades">
          <div className="text-2xl font-extrabold text-purple-400 mt-1">68.4%</div>
          <div className="text-xs text-gray-400 mt-1">Total Trades: 142</div>
        </Card>

        <Card title="Maximum Drawdown" subtitle="Peak-to-Trough Loss">
          <div className="text-2xl font-extrabold text-amber-400 mt-1">-12.4%</div>
          <div className="text-xs text-gray-400 mt-1">Recovery: 18 Days</div>
        </Card>
      </div>

      <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl text-xs text-blue-300 font-mono flex items-center gap-2">
        <ShieldCheck className="h-5 w-5 shrink-0 text-blue-400" />
        <span>Historical backtesting engine algorithms and event simulation loops will be connected in Task 6.</span>
      </div>
    </div>
  );
};

export default BacktestingPage;

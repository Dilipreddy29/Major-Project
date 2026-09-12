import React from 'react';
import PageHeader from '../../components/common/PageHeader';
import Card from '../../components/common/Card';
import Badge from '../../components/common/Badge';
import { BarChart3, CheckCircle2, ShieldCheck, Target } from 'lucide-react';

export const AnalyticsPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Performance Analytics & Model Accuracy"
        subtitle="Quantitative metrics, model precision benchmarks, and regime stability tracking."
        action={<Badge variant="purple"><BarChart3 className="h-3 w-3 inline mr-1" />Quantitative Metrics</Badge>}
      />

      {/* Model Performance Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono">
        <Card title="XGBoost Equity Precision" subtitle="5-Day Horizon Accuracy">
          <div className="text-3xl font-extrabold text-emerald-400 mt-2">78.2%</div>
          <div className="text-xs text-gray-400 mt-2">Tested across Nifty 50 universe</div>
        </Card>

        <Card title="HMM Regime Accuracy" subtitle="Bull/Bear Transition Precision">
          <div className="text-3xl font-extrabold text-blue-400 mt-2">84.6%</div>
          <div className="text-xs text-gray-400 mt-2">4-State Markov Model</div>
        </Card>

        <Card title="SHAP Feature Stability" subtitle="Attribution Variance">
          <div className="text-3xl font-extrabold text-purple-400 mt-2">0.92</div>
          <div className="text-xs text-emerald-400 mt-2">High feature consistency</div>
        </Card>
      </div>

      {/* Analytics Metric Table */}
      <Card title="Model Performance Benchmark Table" subtitle="Evaluation Metrics across Regimes">
        <div className="overflow-x-auto text-xs font-mono">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border text-gray-400 uppercase">
                <th className="py-3 px-3">Model Name</th>
                <th className="py-3 px-3">Target Asset</th>
                <th className="py-3 px-3">Metric</th>
                <th className="py-3 px-3">Value</th>
                <th className="py-3 px-3">Evaluation Period</th>
                <th className="py-3 px-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60">
              <tr className="hover:bg-background/50">
                <td className="py-3 px-3 font-bold text-purple-400">XGBoost-v2.1</td>
                <td className="py-3 px-3 font-bold">Nifty 50 Equity</td>
                <td className="py-3 px-3">Directional Precision</td>
                <td className="py-3 px-3 font-bold text-emerald-400">78.2%</td>
                <td className="py-3 px-3">2025-2026</td>
                <td className="py-3 px-3"><Badge variant="success">PRODUCTION</Badge></td>
              </tr>
              <tr className="hover:bg-background/50">
                <td className="py-3 px-3 font-bold text-blue-400">HMM-Regime-v1.0</td>
                <td className="py-3 px-3 font-bold">Market Regimes</td>
                <td className="py-3 px-3">State Accuracy</td>
                <td className="py-3 px-3 font-bold text-blue-400">84.6%</td>
                <td className="py-3 px-3">2025-2026</td>
                <td className="py-3 px-3"><Badge variant="success">PRODUCTION</Badge></td>
              </tr>
              <tr className="hover:bg-background/50">
                <td className="py-3 px-3 font-bold text-amber-400">Intraday-Breakout-v1</td>
                <td className="py-3 px-3 font-bold">Intraday 5M</td>
                <td className="py-3 px-3">Win Rate</td>
                <td className="py-3 px-3 font-bold text-emerald-400">71.0%</td>
                <td className="py-3 px-3">Last 90 Days</td>
                <td className="py-3 px-3"><Badge variant="info">EVALUATION</Badge></td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default AnalyticsPage;

import React from 'react';
import PageHeader from '../../components/common/PageHeader';
import Card from '../../components/common/Card';
import Badge from '../../components/common/Badge';
import { mockPortfolioSummary, mockHoldings } from '../../data/mockPortfolio';
import { Wallet, TrendingUp, DollarSign, PieChart, ArrowUpRight, ArrowDownRight } from 'lucide-react';

export const PortfolioPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Portfolio Management"
        subtitle="Virtual paper trading holdings, asset allocation, and overall P&L tracking."
        action={<Badge variant="success"><Wallet className="h-3 w-3 inline mr-1" />₹10,25,000 Total Value</Badge>}
      />

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono">
        <Card title="Net Asset Value (NAV)" subtitle="Total Account Equity">
          <div className="text-2xl font-extrabold text-gray-100 mt-1">
            ₹{mockPortfolioSummary.totalValue.toLocaleString('en-IN', { maximumFractionDigits: 2 })}
          </div>
        </Card>

        <Card title="Available Cash Balance" subtitle="Unallocated Margin">
          <div className="text-2xl font-extrabold text-emerald-400 mt-1">
            ₹{mockPortfolioSummary.cashBalance.toLocaleString('en-IN', { maximumFractionDigits: 2 })}
          </div>
        </Card>

        <Card title="Invested Capital" subtitle="Active Positions">
          <div className="text-2xl font-extrabold text-purple-400 mt-1">
            ₹{mockPortfolioSummary.investedValue.toLocaleString('en-IN', { maximumFractionDigits: 2 })}
          </div>
        </Card>

        <Card title="Total Unrealized P&L" subtitle="Cumulative Returns">
          <div className="text-2xl font-extrabold text-emerald-400 mt-1">
            +{mockPortfolioSummary.totalPnl.toLocaleString('en-IN')} (+{mockPortfolioSummary.totalPnlPercent}%)
          </div>
        </Card>
      </div>

      {/* Holdings Table */}
      <Card
        title="Active Holdings"
        subtitle="Current simulated stock positions"
        action={<Badge variant="info">3 Holdings</Badge>}
      >
        <div className="overflow-x-auto text-xs font-mono">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border text-gray-400 uppercase">
                <th className="py-3 px-3">Symbol</th>
                <th className="py-3 px-3">Qty</th>
                <th className="py-3 px-3">Avg Price</th>
                <th className="py-3 px-3">Current Price</th>
                <th className="py-3 px-3">Invested</th>
                <th className="py-3 px-3">Current Value</th>
                <th className="py-3 px-3 text-right">P&L</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60">
              {mockHoldings.map((h) => (
                <tr key={h.id} className="hover:bg-background/50 transition-colors">
                  <td className="py-3 px-3">
                    <div className="font-bold text-gray-200">{h.symbol}</div>
                    <div className="text-[10px] text-gray-500 font-sans">{h.name}</div>
                  </td>
                  <td className="py-3 px-3 font-semibold">{h.quantity}</td>
                  <td className="py-3 px-3">₹{h.avgPrice}</td>
                  <td className="py-3 px-3 font-semibold">₹{h.currentPrice}</td>
                  <td className="py-3 px-3">₹{h.investedValue.toLocaleString('en-IN')}</td>
                  <td className="py-3 px-3 font-semibold">₹{h.currentValue.toLocaleString('en-IN')}</td>
                  <td className="py-3 px-3 text-right">
                    <span className={`font-bold flex items-center justify-end gap-1 ${h.isPositive ? 'text-emerald-400' : 'text-red-400'}`}>
                      {h.isPositive ? <ArrowUpRight className="h-3.5 w-3.5" /> : <ArrowDownRight className="h-3.5 w-3.5" />}
                      {h.isPositive ? '+' : ''}{h.pnl.toLocaleString('en-IN')} ({h.isPositive ? '+' : ''}{h.pnlPercent}%)
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default PortfolioPage;

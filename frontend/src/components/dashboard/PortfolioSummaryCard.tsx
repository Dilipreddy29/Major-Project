import React from 'react';
import { Wallet, TrendingUp, DollarSign, PieChart } from 'lucide-react';
import Card from '../common/Card';
import Badge from '../common/Badge';
import { PortfolioSummary } from '../../types/portfolio';

interface PortfolioSummaryCardProps {
  summary: PortfolioSummary;
}

export const PortfolioSummaryCard: React.FC<PortfolioSummaryCardProps> = ({ summary }) => {
  return (
    <Card
      title="Portfolio Summary"
      subtitle="Virtual Paper Trading Account Overview"
      action={<Badge variant="success">Paper Trading Active</Badge>}
    >
      <div className="grid grid-cols-2 gap-3 font-mono">
        <div className="bg-background p-3.5 rounded-lg border border-border">
          <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-1">
            <Wallet className="h-3.5 w-3.5 text-blue-400" />
            <span>PORTFOLIO VALUE</span>
          </div>
          <div className="text-lg font-bold text-gray-100">
            ₹{summary.totalValue.toLocaleString('en-IN', { maximumFractionDigits: 2 })}
          </div>
        </div>

        <div className="bg-background p-3.5 rounded-lg border border-border">
          <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-1">
            <DollarSign className="h-3.5 w-3.5 text-emerald-400" />
            <span>AVAILABLE CASH</span>
          </div>
          <div className="text-lg font-bold text-emerald-400">
            ₹{summary.cashBalance.toLocaleString('en-IN', { maximumFractionDigits: 2 })}
          </div>
        </div>

        <div className="bg-background p-3.5 rounded-lg border border-border">
          <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-1">
            <PieChart className="h-3.5 w-3.5 text-purple-400" />
            <span>INVESTED AMOUNT</span>
          </div>
          <div className="text-base font-bold text-gray-200">
            ₹{summary.investedValue.toLocaleString('en-IN', { maximumFractionDigits: 2 })}
          </div>
        </div>

        <div className="bg-background p-3.5 rounded-lg border border-border">
          <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-1">
            <TrendingUp className="h-3.5 w-3.5 text-emerald-400" />
            <span>TOTAL UNREALIZED P&L</span>
          </div>
          <div className="text-base font-bold text-emerald-400">
            +{summary.totalPnl.toLocaleString('en-IN')} (+{summary.totalPnlPercent}%)
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PortfolioSummaryCard;

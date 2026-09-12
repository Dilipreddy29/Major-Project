import React from 'react';
import PageHeader from '../../components/common/PageHeader';
import Card from '../../components/common/Card';
import Badge from '../../components/common/Badge';
import { Briefcase, Wallet, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const TradingPage: React.FC = () => {
  const { wallet } = useAuth();

  return (
    <div className="space-y-6">
      <PageHeader
        title="Paper Trading Terminal"
        subtitle="Simulated order placement, virtual brokerage execution, and execution emulator."
        action={<Badge variant="success"><Briefcase className="h-3 w-3 inline mr-1" />Paper Trading Enabled</Badge>}
      />

      {/* Account Balance Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono">
        <Card title="Available Virtual Margin" subtitle="Virtual Paper Funds">
          <div className="text-2xl font-extrabold text-emerald-400 mt-1">
            ₹{wallet?.balance.toLocaleString('en-IN') || '10,00,000'}
          </div>
          <div className="text-xs text-gray-400 mt-1">Simulated Brokerage: 0.03%</div>
        </Card>

        <Card title="Open Positions Value" subtitle="Active Equity Holdings">
          <div className="text-2xl font-extrabold text-blue-400 mt-1">₹2,25,000.00</div>
          <div className="text-xs text-emerald-400 mt-1">+₹25,000.00 P&L</div>
        </Card>

        <Card title="Order Execution Engine" subtitle="Execution Status">
          <div className="flex items-center gap-2 text-base font-bold text-gray-200 mt-2">
            <CheckCircle2 className="h-5 w-5 text-emerald-400" />
            <span>Simulator Active</span>
          </div>
          <div className="text-xs text-gray-400 mt-1">Latency: 15ms (Simulated)</div>
        </Card>
      </div>

      {/* Order Entry Form & Open Orders Table */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 font-mono">
        {/* Order Form Mockup */}
        <Card title="Place Order (Simulated)" subtitle="Market & Limit Orders" className="lg:col-span-1">
          <form className="space-y-4 text-xs" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="text-gray-400 uppercase">Instrument Type</label>
              <select className="w-full mt-1 p-2.5 bg-background border border-border rounded-lg text-gray-200 focus:outline-none">
                <option>EQUITY (NSE)</option>
                <option>OPTIONS (NIFTY)</option>
              </select>
            </div>

            <div>
              <label className="text-gray-400 uppercase">Symbol</label>
              <input
                type="text"
                defaultValue="RELIANCE"
                className="w-full mt-1 p-2.5 bg-background border border-border rounded-lg text-gray-200 focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-gray-400 uppercase">Quantity</label>
                <input
                  type="number"
                  defaultValue="10"
                  className="w-full mt-1 p-2.5 bg-background border border-border rounded-lg text-gray-200 focus:outline-none"
                />
              </div>
              <div>
                <label className="text-gray-400 uppercase">Order Type</label>
                <select className="w-full mt-1 p-2.5 bg-background border border-border rounded-lg text-gray-200 focus:outline-none">
                  <option>MARKET</option>
                  <option>LIMIT</option>
                  <option>STOP LOSS</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2">
              <button
                type="button"
                className="py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg transition-colors"
              >
                BUY
              </button>
              <button
                type="button"
                className="py-2.5 bg-red-600 hover:bg-red-500 text-white font-bold rounded-lg transition-colors"
              >
                SELL
              </button>
            </div>

            <div className="text-[11px] text-gray-500 font-sans pt-1">
              * Paper trading execution logic and database order matching will be connected in Task 4.
            </div>
          </form>
        </Card>

        {/* Open Orders Table */}
        <Card title="Active Paper Orders" subtitle="Simulated order queue" className="lg:col-span-2">
          <div className="overflow-x-auto text-xs font-mono">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border text-gray-400 uppercase">
                  <th className="py-2.5 px-3">Order ID</th>
                  <th className="py-2.5 px-3">Symbol</th>
                  <th className="py-2.5 px-3">Side</th>
                  <th className="py-2.5 px-3">Qty</th>
                  <th className="py-2.5 px-3">Price</th>
                  <th className="py-2.5 px-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                <tr className="hover:bg-background/50">
                  <td className="py-2.5 px-3 font-semibold text-blue-400">ORD-1001</td>
                  <td className="py-2.5 px-3 font-bold">RELIANCE</td>
                  <td className="py-2.5 px-3 text-emerald-400 font-bold">BUY</td>
                  <td className="py-2.5 px-3">10</td>
                  <td className="py-2.5 px-3">₹2,980.50</td>
                  <td className="py-2.5 px-3"><Badge variant="success">EXECUTED</Badge></td>
                </tr>
                <tr className="hover:bg-background/50">
                  <td className="py-2.5 px-3 font-semibold text-blue-400">ORD-1002</td>
                  <td className="py-2.5 px-3 font-bold">INFY</td>
                  <td className="py-2.5 px-3 text-emerald-400 font-bold">BUY</td>
                  <td className="py-2.5 px-3">50</td>
                  <td className="py-2.5 px-3">₹1,720.00</td>
                  <td className="py-2.5 px-3"><Badge variant="success">EXECUTED</Badge></td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default TradingPage;

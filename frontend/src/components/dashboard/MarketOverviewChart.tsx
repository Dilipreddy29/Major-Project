import React from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import Card from '../common/Card';
import Badge from '../common/Badge';
import { ChartDataPoint } from '../../types/market';

interface MarketOverviewChartProps {
  data: ChartDataPoint[];
}

export const MarketOverviewChart: React.FC<MarketOverviewChartProps> = ({ data }) => {
  return (
    <Card
      title="NIFTY 50 — Market Trend"
      subtitle="Historical price action & regime correlation"
      action={<Badge variant="info">Recharts Active</Badge>}
    >
      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorNiftyChart" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.35}/>
                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#2A303F" vertical={false} />
            <XAxis dataKey="date" stroke="#6B7280" fontSize={11} tickLine={false} />
            <YAxis domain={['dataMin - 100', 'dataMax + 100']} stroke="#6B7280" fontSize={11} tickLine={false} />
            <Tooltip
              contentStyle={{ backgroundColor: '#151921', borderColor: '#2A303F', borderRadius: '0.5rem', color: '#fff', fontSize: '12px' }}
            />
            <Area type="monotone" dataKey="nifty" name="NIFTY 50" stroke="#3B82F6" strokeWidth={2.5} fillOpacity={1} fill="url(#colorNiftyChart)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default MarketOverviewChart;

import React from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const mockData = [
  { time: '09:15', Nifty50: 24800, Regime: 'Bullish' },
  { time: '10:30', Nifty50: 24860, Regime: 'Bullish' },
  { time: '11:45', Nifty50: 24820, Regime: 'Sideways' },
  { time: '13:00', Nifty50: 24910, Regime: 'Bullish' },
  { time: '14:15', Nifty50: 24980, Regime: 'Bullish' },
  { time: '15:30', Nifty50: 25025, Regime: 'Bullish' },
];

export const PlaceholderChart: React.FC<{ title?: string }> = ({ title = 'NIFTY 50 Sample Intraday Simulation' }) => {
  return (
    <div className="bg-surface border border-border rounded-xl p-5 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-gray-200">{title}</h3>
        <span className="text-xs bg-green-500/10 text-green-400 px-2 py-0.5 rounded border border-green-500/20 font-mono">
          Recharts Active
        </span>
      </div>
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={mockData}>
            <defs>
              <linearGradient id="colorNifty" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#2A303F" />
            <XAxis dataKey="time" stroke="#6B7280" fontSize={12} />
            <YAxis domain={['dataMin - 50', 'dataMax + 50']} stroke="#6B7280" fontSize={12} />
            <Tooltip
              contentStyle={{ backgroundColor: '#151921', borderColor: '#2A303F', borderRadius: '0.5rem', color: '#fff' }}
            />
            <Area type="monotone" dataKey="Nifty50" stroke="#3B82F6" strokeWidth={2} fillOpacity={1} fill="url(#colorNifty)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PlaceholderChart;

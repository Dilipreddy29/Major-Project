import React from 'react';

export const OverviewCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="bg-surface border border-border p-4 rounded-xl">
        <div className="text-xs text-gray-400 font-mono">CURRENT REGIME</div>
        <div className="text-lg font-bold text-blue-400 mt-1">Bullish Momentum</div>
        <div className="text-xs text-gray-500 mt-1">HMM Model Placeholder</div>
      </div>
      <div className="bg-surface border border-border p-4 rounded-xl">
        <div className="text-xs text-gray-400 font-mono">PORTFOLIO VALUE</div>
        <div className="text-lg font-bold text-gray-100 mt-1">₹10,00,000</div>
        <div className="text-xs text-green-400 mt-1">+1.54% Today</div>
      </div>
      <div className="bg-surface border border-border p-4 rounded-xl">
        <div className="text-xs text-gray-400 font-mono">EQUITY PREDICTION</div>
        <div className="text-lg font-bold text-green-400 mt-1">BULLISH (5-Day)</div>
        <div className="text-xs text-gray-500 mt-1">XGBoost Model Placeholder</div>
      </div>
      <div className="bg-surface border border-border p-4 rounded-xl">
        <div className="text-xs text-gray-400 font-mono">ACTIVE POSITIONS</div>
        <div className="text-lg font-bold text-purple-400 mt-1">3 Trades</div>
        <div className="text-xs text-gray-500 mt-1">Paper Trading Active</div>
      </div>
    </div>
  );
};

export default OverviewCards;

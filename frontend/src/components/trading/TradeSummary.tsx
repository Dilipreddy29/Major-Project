import React from 'react';

export const TradeSummary: React.FC = () => {
  return (
    <div className="bg-surface border border-border p-5 rounded-xl">
      <h3 className="text-sm font-semibold text-gray-200 mb-3">Paper Trading Module Status</h3>
      <div className="space-y-2 text-xs font-mono text-gray-400">
        <div>Initial Paper Balance: <span className="text-gray-200">₹10,00,000</span></div>
        <div>Virtual Brokerage Fee: <span className="text-gray-200">0.03% (Simulated)</span></div>
        <div>Order Types Supported: <span className="text-gray-200">MARKET, LIMIT, STOP_LOSS</span></div>
      </div>
    </div>
  );
};

export default TradeSummary;

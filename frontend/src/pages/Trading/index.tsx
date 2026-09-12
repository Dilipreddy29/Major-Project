import React, { useEffect, useState } from 'react';
import TradeSummary from '../../components/trading/TradeSummary';
import { fetchModuleStatus } from '../../services/apiService';

export const TradingPage: React.FC = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetchModuleStatus('trading').then(setData).catch(console.error);
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-100">Paper Trading Engine</h2>
        <p className="text-sm text-gray-400">Simulated Order Execution & Market Impact Emulator</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TradeSummary />

        <div className="bg-surface border border-border p-5 rounded-xl space-y-3">
          <h3 className="text-sm font-semibold text-gray-200">Trading API Router</h3>
          <pre className="bg-background p-4 rounded-lg text-xs font-mono text-purple-400 border border-border">
            {JSON.stringify(data || { message: "Loading trading API..." }, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default TradingPage;

import React, { useEffect, useState } from 'react';
import { fetchModuleStatus } from '../../services/apiService';

export const BacktestingPage: React.FC = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetchModuleStatus('backtesting').then(setData).catch(console.error);
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-100">Backtesting Engine</h2>
        <p className="text-sm text-gray-400">Historical Strategy Simulation across Market Regimes</p>
      </div>

      <div className="bg-surface border border-border p-6 rounded-xl space-y-4">
        <h3 className="text-lg font-semibold text-gray-200">Backtesting Service Status</h3>
        <pre className="bg-background p-4 rounded-lg text-xs font-mono text-indigo-400 border border-border">
          {JSON.stringify(data || { message: "Loading backtesting response..." }, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default BacktestingPage;

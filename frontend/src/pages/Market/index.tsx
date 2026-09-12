import React, { useEffect, useState } from 'react';
import { fetchModuleStatus } from '../../services/apiService';
import { ModuleStatusResponse } from '../../types';

export const MarketPage: React.FC = () => {
  const [data, setData] = useState<ModuleStatusResponse | null>(null);

  useEffect(() => {
    fetchModuleStatus('market').then(setData).catch(console.error);
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-100">Market Data Module</h2>
        <p className="text-sm text-gray-400">NSE Historical Data Ingestion & Live Market Feeds</p>
      </div>

      <div className="bg-surface border border-border p-6 rounded-xl space-y-4">
        <h3 className="text-lg font-semibold text-gray-200">API Status</h3>
        <pre className="bg-background p-4 rounded-lg text-xs font-mono text-green-400 border border-border">
          {JSON.stringify(data || { message: "Loading market backend response..." }, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default MarketPage;

import React, { useEffect, useState } from 'react';
import { fetchModuleStatus } from '../../services/apiService';

export const PortfolioPage: React.FC = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetchModuleStatus('portfolio').then(setData).catch(console.error);
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-100">Portfolio Management</h2>
        <p className="text-sm text-gray-400">Holdings, Cash Allocation, and Real-Time NAV Tracking</p>
      </div>

      <div className="bg-surface border border-border p-6 rounded-xl space-y-4">
        <h3 className="text-lg font-semibold text-gray-200">Portfolio Service Status</h3>
        <pre className="bg-background p-4 rounded-lg text-xs font-mono text-yellow-400 border border-border">
          {JSON.stringify(data || { message: "Loading portfolio response..." }, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default PortfolioPage;

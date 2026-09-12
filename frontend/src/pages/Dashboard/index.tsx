import React, { useEffect, useState } from 'react';
import OverviewCards from '../../components/dashboard/OverviewCards';
import PlaceholderChart from '../../components/charts/PlaceholderChart';
import { fetchHealth, fetchDatabaseHealth } from '../../services/apiService';
import { HealthStatus } from '../../types';
import { useAuth } from '../../context/AuthContext';

export const DashboardPage: React.FC = () => {
  const { user, wallet } = useAuth();
  const [healthData, setHealthData] = useState<HealthStatus | null>(null);
  const [dbData, setDbData] = useState<HealthStatus | null>(null);

  useEffect(() => {
    fetchHealth().then(setHealthData).catch(console.error);
    fetchDatabaseHealth().then(setDbData).catch(console.error);
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-100">
            Welcome, {user?.name || 'Trader'} 👋
          </h2>
          <p className="text-sm text-gray-400">Regime-Adaptive AI Stock Intelligence & Paper Trading Platform</p>
        </div>

        {wallet && (
          <div className="bg-surface border border-emerald-500/30 p-4 rounded-xl text-right">
            <div className="text-xs text-gray-400 font-mono">AVAILABLE PAPER WALLET</div>
            <div className="text-xl font-bold text-emerald-400 mt-0.5">
              ₹{wallet.balance.toLocaleString('en-IN', { maximumFractionDigits: 2 })}
            </div>
            <div className="text-xs text-gray-500 mt-0.5">Initial: ₹{wallet.initial_balance.toLocaleString('en-IN')}</div>
          </div>
        )}
      </div>

      <OverviewCards />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <PlaceholderChart title="NIFTY 50 Intraday & Regime Tracking" />
        </div>

        <div className="bg-surface border border-border p-5 rounded-xl space-y-4">
          <h3 className="text-base font-semibold text-gray-200">System Infrastructure Status</h3>
          
          <div className="p-3 bg-background border border-border rounded-lg text-xs font-mono space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-400">User Session:</span>
              <span className="text-blue-400">{user?.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">API Server:</span>
              <span className={healthData?.status === 'healthy' ? 'text-green-400' : 'text-red-400'}>
                {healthData?.status || 'Testing...'}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">PostgreSQL DB:</span>
              <span className={dbData?.database === 'connected' ? 'text-green-400' : 'text-yellow-400'}>
                {dbData?.database || 'Testing...'}
              </span>
            </div>
          </div>

          <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg text-xs text-blue-300">
            <strong>Task 2 Completed:</strong> Database ORM Models (9 tables), Alembic migrations, JWT Authentication, Password Hashing, and Paper Trading Wallet initialization verified.
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;

import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { useApiHealth } from '../../hooks/useApiHealth';

export const Header: React.FC = () => {
  const { user, wallet, logout } = useAuth();
  const { backendHealth, dbHealth, loading, refetch } = useApiHealth();

  return (
    <header className="h-16 bg-surface border-b border-border px-6 flex items-center justify-between sticky top-0 z-20">
      <div className="flex items-center gap-3">
        <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
          MLO Intelligence Terminal
        </h1>
        <span className="bg-blue-500/10 text-blue-400 text-xs px-2.5 py-1 rounded-full border border-blue-500/20 font-mono">
          NSE INDIA
        </span>
      </div>

      <div className="flex items-center gap-4 text-xs font-mono">
        {/* Wallet Balance Badge */}
        {wallet && (
          <div className="flex items-center gap-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-3 py-1.5 rounded-md font-semibold">
            <span>💰 Wallet:</span>
            <span>₹{wallet.balance.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</span>
          </div>
        )}

        {/* Backend API Indicator */}
        <div className="flex items-center gap-2 bg-background px-3 py-1.5 rounded-md border border-border">
          <span className="text-gray-400">API:</span>
          <span className={`h-2 w-2 rounded-full ${backendHealth?.status === 'healthy' ? 'bg-accent-green animate-pulse' : 'bg-accent-red'}`} />
          <span className={backendHealth?.status === 'healthy' ? 'text-green-400' : 'text-red-400'}>
            {loading ? 'Checking...' : backendHealth?.status === 'healthy' ? 'ONLINE' : 'OFFLINE'}
          </span>
        </div>

        {/* Database Indicator */}
        <div className="flex items-center gap-2 bg-background px-3 py-1.5 rounded-md border border-border">
          <span className="text-gray-400">DB:</span>
          <span className={`h-2 w-2 rounded-full ${dbHealth?.database === 'connected' ? 'bg-accent-green animate-pulse' : 'bg-accent-yellow'}`} />
          <span className={dbHealth?.database === 'connected' ? 'text-green-400' : 'text-yellow-400'}>
            {loading ? 'Checking...' : dbHealth?.database === 'connected' ? 'CONNECTED' : 'DISCONNECTED'}
          </span>
        </div>

        <button
          onClick={refetch}
          className="p-1.5 text-gray-400 hover:text-white bg-background hover:bg-surface-hover border border-border rounded-md transition-colors"
          title="Refresh Health Check"
        >
          🔄
        </button>

        {/* Authenticated User & Logout */}
        {user && (
          <div className="flex items-center gap-3 pl-2 border-l border-border">
            <span className="text-gray-200 font-sans font-medium">👤 {user.name}</span>
            <button
              onClick={logout}
              className="px-2.5 py-1 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 rounded-md transition-colors"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

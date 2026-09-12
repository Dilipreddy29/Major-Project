import React from 'react';
import { Menu, Wallet, Activity, Database, LogOut } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useApiHealth } from '../../hooks/useApiHealth';

interface NavbarProps {
  onOpenMobileMenu: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenMobileMenu }) => {
  const { user, wallet, logout } = useAuth();
  const { backendHealth, dbHealth, loading, refetch } = useApiHealth();

  return (
    <header className="h-16 bg-surface border-b border-border px-4 sm:px-6 flex items-center justify-between sticky top-0 z-30 shadow-sm">
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenMobileMenu}
          className="lg:hidden p-2 text-gray-400 hover:text-white rounded-lg hover:bg-surface-hover"
          aria-label="Open navigation menu"
        >
          <Menu className="h-5 w-5" />
        </button>

        <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-gray-400">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>NSE INDIA LIVE FEED (DEMO)</span>
        </div>
      </div>

      <div className="flex items-center gap-3 sm:gap-4 text-xs font-mono">
        {/* Virtual Paper Wallet Badge */}
        {wallet && (
          <div className="flex items-center gap-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-3 py-1.5 rounded-lg font-semibold">
            <Wallet className="h-3.5 w-3.5" />
            <span>₹{wallet.balance.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</span>
          </div>
        )}

        {/* Backend API Health Pill */}
        <div className="hidden md:flex items-center gap-2 bg-background px-3 py-1.5 rounded-lg border border-border">
          <Activity className="h-3.5 w-3.5 text-gray-400" />
          <span className={backendHealth?.status === 'healthy' ? 'text-emerald-400 font-semibold' : 'text-red-400'}>
            {loading ? '...' : backendHealth?.status === 'healthy' ? 'API ONLINE' : 'API OFFLINE'}
          </span>
        </div>

        {/* PostgreSQL Database Health Pill */}
        <div className="hidden lg:flex items-center gap-2 bg-background px-3 py-1.5 rounded-lg border border-border">
          <Database className="h-3.5 w-3.5 text-gray-400" />
          <span className={dbHealth?.database === 'connected' ? 'text-emerald-400 font-semibold' : 'text-amber-400'}>
            {loading ? '...' : dbHealth?.database === 'connected' ? 'DB CONNECTED' : 'DB OFFLINE'}
          </span>
        </div>

        {/* Refresh Status */}
        <button
          onClick={refetch}
          className="p-2 text-gray-400 hover:text-white bg-background hover:bg-surface-hover border border-border rounded-lg transition-colors"
          title="Refresh Backend Health"
        >
          🔄
        </button>

        {/* Authenticated User & Quick Logout */}
        {user && (
          <div className="flex items-center gap-2 pl-2 border-l border-border/60">
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white font-bold text-xs shadow-md">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <span className="hidden sm:inline font-sans font-semibold text-gray-200">
              {user.name.split(' ')[0]}
            </span>
            <button
              onClick={logout}
              className="p-2 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
              title="Sign Out"
            >
              <LogOut className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

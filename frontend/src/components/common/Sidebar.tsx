import React from 'react';
import { NavLink } from 'react-router-dom';

interface NavItem {
  name: string;
  path: string;
  icon: string;
}

const navItems: NavItem[] = [
  { name: 'Dashboard', path: '/', icon: '📊' },
  { name: 'Market Data', path: '/market', icon: '📈' },
  { name: 'Equity Prediction', path: '/equity', icon: '🎯' },
  { name: 'Intraday Signals', path: '/intraday', icon: '⚡' },
  { name: 'Options Analytics', path: '/options', icon: '🔮' },
  { name: 'Paper Trading', path: '/trading', icon: '💼' },
  { name: 'Portfolio', path: '/portfolio', icon: '💰' },
  { name: 'Backtesting Engine', path: '/backtesting', icon: '🧪' },
  { name: 'Analytics & Metrics', path: '/analytics', icon: '📉' },
];

export const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-surface border-r border-border min-h-[calc(100vh-4rem)] flex flex-col justify-between p-4">
      <div className="space-y-1">
        <div className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider font-mono">
          Modules Navigation
        </div>
        <nav className="space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-blue-600/15 text-blue-400 border border-blue-500/30'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-surface-hover'
                }`
              }
            >
              <span className="text-base">{item.icon}</span>
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="p-3 bg-background border border-border rounded-lg text-xs text-gray-400 font-mono">
        <div className="text-gray-300 font-semibold mb-1">Architecture State</div>
        <div>ML Integration: <span className="text-yellow-400">Placeholder</span></div>
        <div>DB Models: <span className="text-yellow-400">Pending</span></div>
      </div>
    </aside>
  );
};

export default Sidebar;

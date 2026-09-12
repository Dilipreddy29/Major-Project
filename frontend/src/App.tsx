import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/common/ProtectedRoute';
import AppLayout from './components/layout/AppLayout';
import LoginPage from './pages/Login/LoginPage';
import SignupPage from './pages/Signup/SignupPage';
import DashboardPage from './pages/Dashboard';
import MarketPage from './pages/Market';
import EquityPage from './pages/Equity';
import IntradayPage from './pages/Intraday';
import OptionsPage from './pages/Options';
import TradingPage from './pages/Trading';
import PortfolioPage from './pages/Portfolio';
import BacktestingPage from './pages/Backtesting';
import AnalyticsPage from './pages/Analytics';

export const App: React.FC = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Auth Routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />

          {/* Protected Application Shell */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<DashboardPage />} />
            <Route path="market" element={<MarketPage />} />
            <Route path="equity" element={<EquityPage />} />
            <Route path="intraday" element={<IntradayPage />} />
            <Route path="options" element={<OptionsPage />} />
            <Route path="trading" element={<TradingPage />} />
            <Route path="portfolio" element={<PortfolioPage />} />
            <Route path="backtesting" element={<BacktestingPage />} />
            <Route path="analytics" element={<AnalyticsPage />} />
          </Route>

          {/* Catch-all Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;

import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserInfo, WalletInfo } from '../types';
import { loginApi, signupApi, getCurrentUserApi } from '../services/authService';

interface AuthContextType {
  user: UserInfo | null;
  wallet: WalletInfo | null;
  token: string | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserInfo | null>(null);
  const [wallet, setWallet] = useState<WalletInfo | null>(null);
  const [token, setToken] = useState<string | null>(localStorage.getItem('mlo_token'));
  const [loading, setLoading] = useState<boolean>(true);

  // Restore Session on Startup if Token Exists
  useEffect(() => {
    const restoreSession = async () => {
      const storedToken = localStorage.getItem('mlo_token');
      if (storedToken) {
        try {
          const userData = await getCurrentUserApi();
          setUser(userData);
          setWallet(userData.wallet || null);
          setToken(storedToken);
        } catch {
          // Token invalid or expired
          localStorage.removeItem('mlo_token');
          setToken(null);
          setUser(null);
          setWallet(null);
        }
      }
      setLoading(false);
    };

    restoreSession();
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      const tokenData = await loginApi(email, password);
      localStorage.setItem('mlo_token', tokenData.access_token);
      setToken(tokenData.access_token);

      const userData = await getCurrentUserApi();
      setUser(userData);
      setWallet(userData.wallet || null);
    } finally {
      setLoading(false);
    }
  };

  const signup = async (name: string, email: string, password: string) => {
    setLoading(true);
    try {
      await signupApi(name, email, password);
      // Automatically log in after successful signup
      await login(email, password);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('mlo_token');
    setToken(null);
    setUser(null);
    setWallet(null);
  };

  return (
    <AuthContext.Provider value={{ user, wallet, token, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

import { useState, useEffect } from 'react';
import { fetchHealth, fetchDatabaseHealth } from '../services/apiService';
import { HealthStatus } from '../types';

export const useApiHealth = () => {
  const [backendHealth, setBackendHealth] = useState<HealthStatus | null>(null);
  const [dbHealth, setDbHealth] = useState<HealthStatus | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const checkHealth = async () => {
    setLoading(true);
    try {
      const bHealth = await fetchHealth();
      setBackendHealth(bHealth);
    } catch {
      setBackendHealth({ status: 'error', message: 'Backend unreachable' });
    }

    try {
      const dHealth = await fetchDatabaseHealth();
      setDbHealth(dHealth);
    } catch {
      setDbHealth({ status: 'error', database: 'disconnected', message: 'Database connection check failed' });
    }
    setLoading(false);
  };

  useEffect(() => {
    checkHealth();
  }, []);

  return { backendHealth, dbHealth, loading, refetch: checkHealth };
};

import apiClient from '../api/apiClient';
import { HealthStatus, ModuleStatusResponse } from '../types';

export const fetchHealth = async (): Promise<HealthStatus> => {
  const response = await apiClient.get<HealthStatus>('/api/health');
  return response.data;
};

export const fetchDatabaseHealth = async (): Promise<HealthStatus> => {
  try {
    const response = await apiClient.get<HealthStatus>('/api/health/database');
    return response.data;
  } catch (error: any) {
    if (error.response?.data) {
      return error.response.data;
    }
    return {
      status: 'error',
      database: 'disconnected',
      message: 'Backend API unreachable or server is offline.',
    };
  }
};

export const fetchModuleStatus = async (moduleName: string): Promise<ModuleStatusResponse> => {
  const response = await apiClient.get<ModuleStatusResponse>(`/api/${moduleName}`);
  return response.data;
};

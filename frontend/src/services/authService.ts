import apiClient from '../api/apiClient';
import { UserInfo, TokenResponse } from '../types';

export const signupApi = async (name: string, email: string, password: string): Promise<UserInfo> => {
  const response = await apiClient.post<UserInfo>('/api/auth/signup', { name, email, password });
  return response.data;
};

export const loginApi = async (email: string, password: string): Promise<TokenResponse> => {
  const response = await apiClient.post<TokenResponse>('/api/auth/login', { email, password });
  return response.data;
};

export const getCurrentUserApi = async (): Promise<UserInfo> => {
  const response = await apiClient.get<UserInfo>('/api/auth/me');
  return response.data;
};

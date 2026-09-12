export interface WalletInfo {
  id: number;
  balance: number;
  initial_balance: number;
}

export interface UserInfo {
  id: number;
  name: string;
  email: string;
  created_at: string;
  wallet?: WalletInfo;
}

export interface TokenResponse {
  access_token: string;
  token_type: string;
}

export interface HealthStatus {
  status: string;
  service?: string;
  version?: string;
  database?: string;
  details?: string;
  message?: string;
  error_details?: string;
}

export interface ModuleStatusResponse {
  status: string;
  message: string;
  [key: string]: any;
}

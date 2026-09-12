export interface ActivityItem {
  id: string;
  type: 'TRADE' | 'PREDICTION' | 'REGIME_CHANGE' | 'SYSTEM';
  title: string;
  description: string;
  timestamp: string;
  status?: 'COMPLETED' | 'PENDING' | 'ALERT';
  badgeColor?: 'green' | 'red' | 'blue' | 'purple' | 'yellow';
}

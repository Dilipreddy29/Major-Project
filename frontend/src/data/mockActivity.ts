import { ActivityItem } from '../types/activity';

export const mockActivityItems: ActivityItem[] = [
  {
    id: 'act-1',
    type: 'TRADE',
    title: 'Paper Trade Executed: BUY RELIANCE',
    description: 'Bought 10 Shares @ ₹2,980.50 per share (Market Order)',
    timestamp: '10 mins ago',
    status: 'COMPLETED',
    badgeColor: 'green',
  },
  {
    id: 'act-2',
    type: 'PREDICTION',
    title: 'AI Prediction Model Triggered',
    description: 'Generated 5D Bullish signal for RELIANCE (82% Confidence)',
    timestamp: '45 mins ago',
    status: 'COMPLETED',
    badgeColor: 'purple',
  },
  {
    id: 'act-3',
    type: 'REGIME_CHANGE',
    title: 'Market Regime Shift Detected',
    description: 'NIFTY 50 Regime updated to BULLISH (78% HMM Confidence)',
    timestamp: '2 hours ago',
    status: 'ALERT',
    badgeColor: 'blue',
  },
  {
    id: 'act-4',
    type: 'SYSTEM',
    title: 'PostgreSQL Database Synchronized',
    description: 'Alembic migration tables and user wallet state verified',
    timestamp: '4 hours ago',
    status: 'COMPLETED',
    badgeColor: 'yellow',
  },
];

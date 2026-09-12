export interface StockPrediction {
  id: string;
  symbol: string;
  name: string;
  category: 'EQUITY' | 'INTRADAY' | 'OPTIONS';
  direction: 'UP' | 'DOWN' | 'SIDEWAYS';
  targetPrice?: number;
  currentPrice: number;
  confidence: number;
  horizon: '1D' | '5D' | '20D';
  regime: string;
  modelVersion: string;
  shapTopFeatures?: { feature: string; impact: number }[];
}

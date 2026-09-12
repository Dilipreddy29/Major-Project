export interface MarketIndex {
  symbol: string;
  name: string;
  value: number;
  change: number;
  changePercent: number;
  isPositive: boolean;
}

export interface SectorPerformance {
  sector: string;
  changePercent: number;
  isPositive: boolean;
}

export interface MarketBreadth {
  advances: number;
  declines: number;
  unchanged: number;
  ratio: number;
}

export interface MarketRegimeInfo {
  regime: 'BULLISH' | 'BEARISH' | 'SIDEWAYS' | 'HIGH_VOLATILITY';
  confidence: number;
  trendStrength: 'Strong' | 'Moderate' | 'Weak';
  volatility: 'Low' | 'Moderate' | 'High';
  momentum: 'Positive' | 'Neutral' | 'Negative';
  lastUpdated: string;
}

export interface ChartDataPoint {
  date: string;
  nifty: number;
  banknifty: number;
  sensex: number;
}

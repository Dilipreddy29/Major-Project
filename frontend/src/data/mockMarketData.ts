import { MarketIndex, SectorPerformance, MarketBreadth, ChartDataPoint } from '../types/market';

export const mockMarketIndices: MarketIndex[] = [
  {
    symbol: 'NIFTY 50',
    name: 'Nifty 50 Index',
    value: 24850.25,
    change: 208.40,
    changePercent: 0.85,
    isPositive: true,
  },
  {
    symbol: 'BANK NIFTY',
    name: 'Nifty Bank Index',
    value: 52100.40,
    change: -168.15,
    changePercent: -0.32,
    isPositive: false,
  },
  {
    symbol: 'SENSEX',
    name: 'BSE Sensex Index',
    value: 81250.70,
    change: 518.20,
    changePercent: 0.64,
    isPositive: true,
  },
  {
    symbol: 'NIFTY IT',
    name: 'Nifty IT Index',
    value: 42150.80,
    change: 620.50,
    changePercent: 1.49,
    isPositive: true,
  },
  {
    symbol: 'NIFTY PHARMA',
    name: 'Nifty Pharma Index',
    value: 22480.30,
    change: -45.10,
    changePercent: -0.20,
    isPositive: false,
  },
];

export const mockSectorPerformance: SectorPerformance[] = [
  { sector: 'IT & Software', changePercent: 1.49, isPositive: true },
  { sector: 'Automobile', changePercent: 1.12, isPositive: true },
  { sector: 'Metals & Mining', changePercent: 0.88, isPositive: true },
  { sector: 'FMCG', changePercent: 0.45, isPositive: true },
  { sector: 'Financial Services', changePercent: -0.32, isPositive: false },
  { sector: 'Real Estate', changePercent: -0.78, isPositive: false },
];

export const mockMarketBreadth: MarketBreadth = {
  advances: 1420,
  declines: 850,
  unchanged: 110,
  ratio: 1.67,
};

export const mockChartData: ChartDataPoint[] = [
  { date: 'Sep 01', nifty: 24450, banknifty: 51800, sensex: 79900 },
  { date: 'Sep 02', nifty: 24520, banknifty: 51950, sensex: 80150 },
  { date: 'Sep 03', nifty: 24480, banknifty: 51720, sensex: 80020 },
  { date: 'Sep 04', nifty: 24610, banknifty: 52100, sensex: 80450 },
  { date: 'Sep 05', nifty: 24690, banknifty: 52300, sensex: 80700 },
  { date: 'Sep 08', nifty: 24730, banknifty: 52200, sensex: 80850 },
  { date: 'Sep 09', nifty: 24680, banknifty: 51980, sensex: 80600 },
  { date: 'Sep 10', nifty: 24780, banknifty: 52150, sensex: 80950 },
  { date: 'Sep 11', nifty: 24810, banknifty: 52250, sensex: 81100 },
  { date: 'Sep 12', nifty: 24850.25, banknifty: 52100.40, sensex: 81250.70 },
];

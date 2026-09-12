import { PortfolioSummary, Holding } from '../types/portfolio';

export const mockPortfolioSummary: PortfolioSummary = {
  totalValue: 1025000.00,
  cashBalance: 800000.00,
  investedValue: 200000.00,
  totalPnl: 25000.00,
  totalPnlPercent: 2.5,
  isPositive: true,
  dayPnl: 4500.00,
  dayPnlPercent: 0.44,
};

export const mockHoldings: Holding[] = [
  {
    id: 'hold-1',
    symbol: 'RELIANCE',
    name: 'Reliance Industries Ltd.',
    quantity: 40,
    avgPrice: 2850.00,
    currentPrice: 2980.50,
    investedValue: 114000.00,
    currentValue: 119220.00,
    pnl: 5220.00,
    pnlPercent: 4.58,
    isPositive: true,
  },
  {
    id: 'hold-2',
    symbol: 'INFY',
    name: 'Infosys Limited',
    quantity: 50,
    avgPrice: 1720.00,
    currentPrice: 1890.25,
    investedValue: 86000.00,
    currentValue: 94512.50,
    pnl: 8512.50,
    pnlPercent: 9.90,
    isPositive: true,
  },
  {
    id: 'hold-3',
    symbol: 'TCS',
    name: 'Tata Consultancy Services',
    quantity: 10,
    avgPrice: 4280.00,
    currentPrice: 4210.00,
    investedValue: 42800.00,
    currentValue: 42100.00,
    pnl: -700.00,
    pnlPercent: -1.64,
    isPositive: false,
  },
];

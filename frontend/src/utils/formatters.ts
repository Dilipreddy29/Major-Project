export const formatCurrency = (amount: number, currency = 'INR'): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency,
    maximumFractionDigits: 2,
  }).format(amount);
};

export const formatPercentage = (value: number): string => {
  const formatted = (value * 100).toFixed(2);
  return `${value >= 0 ? '+' : ''}${formatted}%`;
};

import React from 'react';

export const OptionsPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-100">Options Analytics & Greeks</h2>
        <p className="text-sm text-gray-400">Options Volatility Surface & Strategy Evaluation Engine</p>
      </div>

      <div className="bg-surface border border-border p-6 rounded-xl space-y-3">
        <h3 className="text-lg font-semibold text-gray-200">Module Status</h3>
        <p className="text-sm text-gray-400">
          Options analytics placeholder initialized. Ready for Black-Scholes / Implied Volatility calculation models.
        </p>
      </div>
    </div>
  );
};

export default OptionsPage;

import React, { useEffect, useState } from 'react';
import PredictionCard from '../../components/prediction/PredictionCard';
import { fetchModuleStatus } from '../../services/apiService';

export const EquityPage: React.FC = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetchModuleStatus('prediction').then(setData).catch(console.error);
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-100">Equity Trend Prediction</h2>
        <p className="text-sm text-gray-400">Multi-Horizon Equity Direction & Return Prediction Engine</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PredictionCard
          title="XGBoost Ensemble Equity Model"
          model="XGBoost / LightGBM"
          description="Predicts 1-day, 5-day, and 20-day price trends across Nifty 50 stocks."
        />
        <PredictionCard
          title="SHAP Attribution Engine"
          model="SHAP"
          description="Provides feature importance breakdowns for every equity prediction signal."
        />
      </div>

      <div className="bg-surface border border-border p-5 rounded-xl">
        <h3 className="text-sm font-semibold text-gray-200 mb-2">Backend Router Status</h3>
        <pre className="bg-background p-4 rounded-lg text-xs font-mono text-blue-400 border border-border">
          {JSON.stringify(data || { message: "Loading prediction API..." }, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default EquityPage;

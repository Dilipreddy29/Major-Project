import React from 'react';

interface Props {
  title: string;
  model: string;
  description: string;
}

export const PredictionCard: React.FC<Props> = ({ title, model, description }) => {
  return (
    <div className="bg-surface border border-border p-5 rounded-xl">
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-base font-semibold text-gray-200">{title}</h4>
        <span className="text-xs bg-purple-500/10 text-purple-400 px-2 py-0.5 rounded border border-purple-500/20 font-mono">
          {model}
        </span>
      </div>
      <p className="text-sm text-gray-400 mb-4">{description}</p>
      <div className="p-3 bg-background border border-border rounded text-xs text-gray-400 font-mono">
        Status: Endpoint ready for ML integration
      </div>
    </div>
  );
};

export default PredictionCard;

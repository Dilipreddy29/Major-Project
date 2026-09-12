import React from 'react';
import { AlertCircle } from 'lucide-react';

export const ErrorMessage: React.FC<{ title?: string; message: string }> = ({ title = 'Error', message }) => {
  return (
    <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 flex items-start gap-3 text-red-400">
      <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
      <div>
        <h4 className="text-sm font-semibold">{title}</h4>
        <p className="text-xs mt-1 text-red-300 font-mono">{message}</p>
      </div>
    </div>
  );
};

export default ErrorMessage;

import React from 'react';
import { Loader2 } from 'lucide-react';

export const Loading: React.FC<{ message?: string }> = ({ message = 'Loading intelligence data...' }) => {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-gray-400 font-mono text-sm">
      <Loader2 className="h-8 w-8 animate-spin text-blue-500 mb-3" />
      <span>{message}</span>
    </div>
  );
};

export default Loading;

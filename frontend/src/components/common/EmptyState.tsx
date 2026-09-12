import React from 'react';
import { Database } from 'lucide-react';

interface EmptyStateProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title = 'No Data Available',
  description = 'Data for this module is ready for future integration.',
  icon = <Database className="h-10 w-10 text-gray-500 mb-3" />
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-surface/50 border border-border border-dashed rounded-xl text-center">
      {icon}
      <h4 className="text-sm font-semibold text-gray-300">{title}</h4>
      <p className="text-xs text-gray-500 mt-1 max-w-sm">{description}</p>
    </div>
  );
};

export default EmptyState;

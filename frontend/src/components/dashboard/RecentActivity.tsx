import React from 'react';
import Card from '../common/Card';
import Badge from '../common/Badge';
import { ActivityItem } from '../../types/activity';

interface RecentActivityProps {
  activities: ActivityItem[];
}

export const RecentActivity: React.FC<RecentActivityProps> = ({ activities }) => {
  const mapBadgeVariant = (color?: string) => {
    switch (color) {
      case 'green':
        return 'success';
      case 'red':
        return 'danger';
      case 'yellow':
        return 'warning';
      case 'blue':
        return 'info';
      case 'purple':
        return 'purple';
      default:
        return 'neutral';
    }
  };

  return (
    <Card
      title="Recent System Activity"
      subtitle="Audit log of trades, signals & regime shifts"
      action={<Badge variant="neutral">Audit Log</Badge>}
    >
      <div className="space-y-3">
        {activities.map((act) => (
          <div
            key={act.id}
            className="p-3 bg-background border border-border rounded-lg flex items-start justify-between gap-3 font-mono text-xs"
          >
            <div className="space-y-1">
              <div className="font-semibold text-gray-200">{act.title}</div>
              <div className="text-[11px] text-gray-400 font-sans">{act.description}</div>
            </div>

            <div className="text-right shrink-0 space-y-1">
              <Badge variant={mapBadgeVariant(act.badgeColor)}>{act.type}</Badge>
              <div className="text-[10px] text-gray-500">{act.timestamp}</div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default RecentActivity;

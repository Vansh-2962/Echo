import { cn } from '@/lib/utils';

const getStatusColor = (status: number) => {
  if (status < 300) return 'text-status-2xx bg-status-2xx/10 border-status-2xx/20';
  if (status < 400) return 'text-status-3xx bg-status-3xx/10 border-status-3xx/20';
  if (status < 500) return 'text-status-4xx bg-status-4xx/10 border-status-4xx/20';
  return 'text-status-5xx bg-status-5xx/10 border-status-5xx/20';
};

export const StatusBadge = ({ status, statusText }: { status: number; statusText: string }) => (
  <span className={cn('px-2 py-1 rounded-md text-xs font-mono font-semibold border animate-pulse-once', getStatusColor(status))}>
    {status} {statusText}
  </span>
);

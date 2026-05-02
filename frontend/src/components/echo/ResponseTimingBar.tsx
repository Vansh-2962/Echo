import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";

interface Props {
  timing: {
    dns: number;
    tcp: number;
    ttfb: number;
    download: number;
    total: number;
  };
}

const segments = [
  {
    key: "dns" as const,
    label: "DNS Lookup",
    color: "bg-rose-400",
    border: "border-rose-400/30",
  },
  {
    key: "tcp" as const,
    label: "TCP Handshake",
    color: "bg-yellow-400",
    border: "border-yellow-400/30",
  },
  {
    key: "ttfb" as const,
    label: "Time to First Byte",
    color: "bg-orange-400",
    border: "border-orange-400/30",
  },
  {
    key: "download" as const,
    label: "Content Download",
    color: "bg-lime-400",
    border: "border-lime-400/30",
  },
];

export const ResponseTimingBar = ({ timing }: Props) => {
  const total = timing.total;

  const normalized = {
    dns: timing.dns,
    tcp: timing.tcp,
    ttfb: Math.max(timing.ttfb - (timing.dns + timing.tcp), 0),
    download: timing.download,
  };

  // Calculate cumulative offsets for waterfall
  const rows = segments.map((seg, i) => {
    const offset = segments
      .slice(0, i)
      .reduce((sum, s) => sum + normalized[s.key], 0);
    return {
      ...seg,
      offset,
      duration: normalized[seg.key],
      offsetPct: (offset / total) * 100,
      widthPct: (normalized[seg.key] / total) * 100,
    };
  });

  return (
    <div className="space-y-1">
      {/* Header */}
      <div className="grid grid-cols-[140px_1fr_70px] gap-2 text-[10px] uppercase tracking-wider text-muted-foreground px-1 pb-1 border-b border-border/50">
        <span>Phase</span>
        <span>Waterfall</span>
        <span className="text-right">Duration</span>
      </div>

      {/* Waterfall rows */}
      {rows.map((row, i) => (
        <motion.div
          key={row.key}
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.08, duration: 0.3 }}
          className="grid grid-cols-[140px_1fr_70px] gap-2 items-center group"
        >
          {/* Label */}
          <div className="flex items-center gap-2 px-1">
            <div className={`w-2 h-2 rounded-full ${row.color} shrink-0`} />
            <span className="text-xs text-muted-foreground truncate">
              {row.label}
            </span>
          </div>

          {/* Bar track */}
          <div className="relative h-6 rounded bg-muted/30">
            <Tooltip>
              <TooltipTrigger asChild>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    delay: 0.15 + i * 0.1,
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                  className={`absolute top-1 bottom-1 rounded-sm ${row.color} cursor-default origin-left`}
                  style={{
                    left: `${row.offsetPct}%`,
                    width: `${row.widthPct}%`,
                    minWidth: "2px",
                  }}
                />
              </TooltipTrigger>
              <TooltipContent side="top" className="text-xs font-mono">
                {row.label}: {row.duration}ms ({row.widthPct.toFixed(1)}%)
              </TooltipContent>
            </Tooltip>
          </div>

          {/* Duration */}
          <span className="text-xs font-mono text-foreground text-right tabular-nums">
            {row.duration}ms
          </span>
        </motion.div>
      ))}

      {/* Total */}
      <div className="grid grid-cols-[140px_1fr_70px] gap-2 pt-1.5 mt-1 border-t border-border/50 px-1">
        <span className="text-xs text-muted-foreground font-medium">Total</span>
        <div />
        <span className="text-xs font-mono text-foreground text-right font-semibold tabular-nums">
          {total}ms
        </span>
      </div>
    </div>
  );
};

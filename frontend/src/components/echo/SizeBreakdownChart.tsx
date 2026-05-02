import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Props {
  sizeBreakdown: {
    headersSize: number;
    bodySize: number;
  };
}

const segments = [
  {
    key: "headersSize" as const,
    label: "Headers",
    color: "text-rose-400",
    stroke: "#fb7185",
  },
  {
    key: "bodySize" as const,
    label: "Body",
    color: "text-yellow-400",
    stroke: "#facc15",
  },
];

export const SizeBreakdownChart = ({ sizeBreakdown }: Props) => {
  const data = segments.map((seg) => ({
    ...seg,
    size: sizeBreakdown[seg.key],
  }));

  const total = data.reduce((sum, d) => sum + d.size, 0);
  if (total === 0) {
    return (
      <div className="flex items-center justify-center py-12 text-sm text-muted-foreground">
        No size data available
      </div>
    );
  }

  // Donut chart math
  const radius = 70;
  const strokeWidth = 15;
  const center = 90;
  const circumference = 2 * Math.PI * radius;

  let cumulative = 0;
  const arcs = data.map((d) => {
    const pct = d.size / total;
    const dashLength = pct * circumference;
    const dashOffset = -cumulative * circumference;
    cumulative += pct;
    return { ...d, pct, dashLength, dashOffset };
  });

  return (
    <div className="flex flex-col sm:flex-row items-center gap-8 py-4 px-4">
      {/* Donut */}
      <div className="relative w-[180px] h-[180px] shrink-0">
        <svg viewBox="0 0 180 180" className="w-full h-full -rotate-90">
          {/* Background track */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            strokeWidth={strokeWidth}
            className="stroke-muted/30"
          />
          {/* Segments */}
          {arcs.map((arc, i) => (
            <Tooltip key={arc.key}>
              <TooltipTrigger asChild>
                <motion.circle
                  cx={center}
                  cy={center}
                  r={radius}
                  fill="none"
                  stroke={arc.stroke}
                  strokeWidth={strokeWidth}
                  strokeLinecap="butt"
                  strokeDasharray={`${arc.dashLength} ${circumference - arc.dashLength}`}
                  strokeDashoffset={arc.dashOffset}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.2, duration: 0.5 }}
                  className="cursor-default"
                />
              </TooltipTrigger>
              <TooltipContent side="top" className="text-xs font-mono">
                {arc.label}: {arc.size}KB ({(arc.pct * 100).toFixed(1)}%)
              </TooltipContent>
            </Tooltip>
          ))}
        </svg>
        {/* Center label */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-lg font-semibold font-mono text-foreground">
            {total.toFixed(2)}
          </span>
          <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
            KB Total
          </span>
        </div>
      </div>

      {/* Legend + details */}
      <div className="space-y-3 flex-1 min-w-0">
        {arcs.map((arc, i) => (
          <motion.div
            key={arc.key}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 + i * 0.1, duration: 0.3 }}
            className="flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-2.5">
              <div
                className="w-3 h-3 rounded-full shrink-0"
                style={{ backgroundColor: arc.stroke }}
              />
              <span className="text-sm text-foreground">{arc.label}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-muted-foreground tabular-nums">
                {(arc.pct * 100).toFixed(1)}%
              </span>
              <span className="text-sm font-mono font-medium text-foreground tabular-nums">
                {arc.size}KB
              </span>
            </div>
          </motion.div>
        ))}

        {/* Divider + total */}
        <div className="border-t border-border/50 pt-2 flex items-center justify-between">
          <span className="text-xs text-muted-foreground font-medium">
            Total
          </span>
          <span className="text-sm font-mono font-semibold text-foreground tabular-nums">
            {total.toFixed(2)}KB
          </span>
        </div>
      </div>
    </div>
  );
};

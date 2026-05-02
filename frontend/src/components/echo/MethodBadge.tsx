import { cn } from "@/lib/utils";
import type { HttpMethod } from "@/store/use-request-store";

const methods: Record<HttpMethod, string> = {
  GET: "text-emerald-300 bg-emerald-300/10 border-emerald-300/20",
  POST: "text-orange-300 bg-orange-300/10 border-orange-300/20",
  PUT: "text-fuchsia-300 bg-fuchsia-300/10 border-fuchsia-300/20",
  DELETE: "text-rose-300 bg-rose-300/10 border-rose-300/20",
  PATCH: "text-purple-300 bg-purple-300/10 border-purple-300/20",
  HEAD: "text-white bg-white/10 border-white/20",
  OPTIONS: "text-pink-500 bg-pink-500/10 border-pink-500/20",
};

export const MethodBadge = ({
  method,
  className,
}: {
  method: HttpMethod;
  className?: string;
}) => (
  <span
    className={cn(
      "px-1.5 py-0.5 rounded text-[10px] font-bold font-mono border tracking-wider uppercase",
      methods[method],
      className,
    )}
  >
    {method}
  </span>
);

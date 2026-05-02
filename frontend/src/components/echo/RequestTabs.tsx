import { Plus, X } from "lucide-react";
import { motion } from "framer-motion";
import { MethodBadge } from "./MethodBadge";
import { useRequestStore } from "@/store/use-request-store";
import { cn } from "@/lib/utils";

export const RequestTabs = () => {
  const { tabs, activeTabId, setActiveTab, addTab, closeTab } =
    useRequestStore();

  return (
    <div className="flex items-center border-b border-border bg-surface overflow-x-auto">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={cn(
            "group relative  flex items-center gap-2 px-3 py-2 text-xs border-r border-border transition-colors min-w-0 max-w-[200px]",
            tab.id === activeTabId
              ? "bg-background text-foreground"
              : "text-muted-foreground hover:text-foreground hover:bg-background/50",
          )}
        >
          {tab.id === activeTabId && (
            <motion.div
              layoutId="active-tab-indicator"
              className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"
              transition={{ type: "spring", bounce: 0, duration: 0.3 }}
            />
          )}
          <MethodBadge method={tab.method} />
          <span className="truncate font-mono text-[11px]">
            {tab.name || tab.url || "New Request"}
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeTab(tab.id);
            }}
            className="ml-1 opacity-0 group-hover:opacity-100 hover:text-destructive transition-opacity flex-shrink-0"
          >
            <X className="h-3 w-3" />
          </button>
        </button>
      ))}
      <button
        onClick={addTab}
        className="p-2 text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
};

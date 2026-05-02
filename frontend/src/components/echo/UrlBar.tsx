import { Send, Save, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRequestStore, type HttpMethod } from "@/store/use-request-store";
import { useState } from "react";
import { SaveRequestModal } from "./SaveRequestModal";
import { useCollection } from "@/hooks/useCollection";

const methods: HttpMethod[] = [
  "GET",
  "POST",
  "PUT",
  "DELETE",
  "PATCH",
  "HEAD",
  "OPTIONS",
];

const methodColors: Record<HttpMethod, string> = {
  GET: "text-emerald-300",
  POST: "text-orange-300",
  PUT: "text-fuchsia-300",
  DELETE: "text-rose-300",
  PATCH: "text-sky-300",
  HEAD: "text-white",
  OPTIONS: "text-pink-300",
};

export const UrlBar = () => {
  const { tabs, activeTabId, updateTab, setIsLoading } = useRequestStore();
  const tab = tabs.find((t) => t.id === activeTabId);

  const { sendRequestMutation } = useCollection();

  const [saveOpen, setSaveOpen] = useState(false);

  if (!tab) return null;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
      sendRequestMutation.mutate(tab.id);
    }
  };

  const send = (tabId: string) => {
    setIsLoading(true);
    sendRequestMutation.mutate(tabId);
  };

  return (
    <>
      <div className="flex items-center gap-0 border border-border rounded-md bg-surface overflow-hidden">
        <Select
          value={tab.method}
          onValueChange={(v) => updateTab(tab.id, { method: v as HttpMethod })}
        >
          <SelectTrigger
            className={`w-[120px] border-0 border-r border-border rounded-none font-mono font-bold text-sm ${methodColors[tab.method]}`}
          >
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {methods.map((m) => (
              <SelectItem
                key={m}
                value={m}
                className={`font-mono font-bold ${methodColors[m]} `}
              >
                {m}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <input
          value={tab.url}
          onChange={(e) => updateTab(tab.id, { url: e.target.value })}
          onKeyDown={handleKeyDown}
          placeholder="https://api.example.com/v1/endpoint"
          className="flex-1 bg-transparent px-3 py-2.5 font-mono text-sm outline-none placeholder:text-muted-foreground/30"
        />

        <Button
          variant="ghost"
          size="icon"
          className="rounded-none border-l border-border text-muted-foreground hover:text-foreground h-10"
          onClick={() => setSaveOpen(true)}
        >
          <Save className="h-4 w-4" />
        </Button>

        <Button
          onClick={() => send(tab.id)}
          disabled={sendRequestMutation.isPending}
          variant="shiny"
          className="rounded-none rounded-r-md h-10 px-5 font-semibold text-sm"
        >
          <Send className="h-3.5 w-3.5" />
          Send
        </Button>
      </div>

      <SaveRequestModal
        open={saveOpen}
        onOpenChange={setSaveOpen}
        tabId={tab.id}
      />
    </>
  );
};

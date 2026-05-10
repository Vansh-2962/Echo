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
import { Separator } from "../ui/separator";

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
  const [contextMenu, setContextMenu] = useState<{
    x: number;
    y: number;
    selectedText: string;
  } | null>(null);

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

  const handleContextMenu = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    const input = e.currentTarget;

    const start = input.selectionStart ?? 0;
    const end = input.selectionEnd ?? 0;

    if (start != end) {
      e.preventDefault();
      const selectedText = input.value.substring(start, end);
      setContextMenu({
        x: e.clientX,
        y: e.clientY,
        selectedText,
      });
    }
  };

  const handleSetVariable = (selectedText: string) => {
    const variableName = selectedText.trim().replace(/\s+/g, "_");
    const variableTemplate = `{{${variableName}}}`;

    if(contextMenu?.selectedText.includes("{{") && contextMenu?.selectedText.includes("}}")) {
      setContextMenu(null);
      return;
    }

    if (tab.url.includes(variableTemplate)) {
      setContextMenu(null);
      return;
    }

    const newUrl = tab.url.replace(selectedText, variableTemplate);

    updateTab(tab.id, { url: newUrl });
    setContextMenu(null);
  };

  const handleBlur = () => {
    setContextMenu(null);
  };

  const handleCopySelectedText = () => {
    navigator.clipboard.writeText(contextMenu?.selectedText || "");
    setContextMenu(null);
  };

  const handleCutSelectedText = () => {
    if (!contextMenu) return;
    navigator.clipboard.writeText(contextMenu.selectedText);
    const newUrl = tab.url.replace(contextMenu.selectedText, "");
    updateTab(tab.id, { url: newUrl });
    setContextMenu(null);
  };

  const handleEncodeURIComponent = () => {
    if (!contextMenu) return;
    const encoded = encodeURIComponent(contextMenu.selectedText);
    const newUrl = tab.url.replace(contextMenu.selectedText, encoded);
    updateTab(tab.id, { url: newUrl });
    setContextMenu(null);
  };

  const handleDecodeURIComponent = () => {
    if (!contextMenu) return;
    const decoded = decodeURIComponent(contextMenu.selectedText);
    const newUrl = tab.url.replace(contextMenu.selectedText, decoded);
    updateTab(tab.id, { url: newUrl });
    setContextMenu(null);
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
          onContextMenu={handleContextMenu}
          onChange={(e) => updateTab(tab.id, { url: e.target.value })}
          onKeyDown={handleKeyDown}
          // onBlur={handleBlur}
          placeholder="https://api.example.com/v1/endpoint"
          className={`flex-1 bg-transparent px-3 py-2.5 font-mono text-sm outline-none placeholder:text-muted-foreground/30  `}
        />
        {contextMenu && (
          <div
            style={{
              position: "fixed",
              top: contextMenu.y,
              left: contextMenu.x,
            }}
            className="z-50 rounded-md border bg-background p-2 shadow-md flex flex-col "
          >
            <button
              className="text-sm hover:bg-muted px-3 py-1 rounded text-left"
              onClick={() => handleSetVariable(contextMenu.selectedText)}
            >
              Set as variable
            </button>
            <Separator className="my-1" />
            <button
              className="text-sm hover:bg-muted px-3 py-1 rounded text-left"
              onClick={handleCutSelectedText}
            >
              Cut
            </button>
            <button
              className="text-sm hover:bg-muted px-3 py-1 rounded text-left"
              onClick={handleCopySelectedText}
            >
              Copy
            </button>
            <button
              className="text-sm hover:bg-muted px-3 py-1 rounded text-left"
              onClick={handleEncodeURIComponent}
            >
              EncodeURIComponent
            </button>
            <button
              className="text-sm hover:bg-muted px-3 py-1 rounded text-left"
              onClick={handleDecodeURIComponent}
            >
              DecodeURIComponent
            </button>
          </div>
        )}

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

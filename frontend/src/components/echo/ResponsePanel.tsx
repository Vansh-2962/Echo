import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Copy, Download, Clock, HardDrive } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "./StatusBadge";
import { JsonViewer } from "./JsonViewer";
import { ResponseTimingBar } from "./ResponseTimingBar";
import { useRequestStore, type ResponseData } from "@/store/use-request-store";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import { SizeBreakdownChart } from "./SizeBreakdownChart";
import { toast } from "sonner";

const responseTabs = [
  "body",
  "headers",
  "cookies",
  "timeline",
  "breakdown",
] as const;

export const ResponsePanel = () => {
  const [activeTab, setActiveTab] =
    useState<(typeof responseTabs)[number]>("body");
  const [bodyView, setBodyView] = useState<"pretty" | "raw" | "preview">(
    "pretty",
  );
  const { tabs, activeTabId, isLoading, setIsLoading } = useRequestStore();
  const tab = tabs.find((t) => t.id === activeTabId);

  if (!tab) return null;

  const apiResponse = tab.response;

  useEffect(() => {
    if (apiResponse) setIsLoading(false);
  }, [apiResponse]);

  const parseCookies = (setCookieHeader: string | string[]) => {
    if (!setCookieHeader) return [];

    const cookies = Array.isArray(setCookieHeader)
      ? setCookieHeader
      : [setCookieHeader];

    return cookies.map((cookieStr) => {
      const parts = cookieStr.split(";").map((p) => p.trim());

      // name=value
      const [nameValue, ...attrs] = parts;
      const [name, value] = nameValue.split("=");

      let domain = "";
      let path = "";
      let expiry = "";

      attrs.forEach((attr) => {
        const [key, val] = attr.split("=");

        switch (key.toLowerCase()) {
          case "domain":
            domain = val || "";
            break;
          case "path":
            path = val || "";
            break;
          case "expires":
            expiry = val || "";
            break;
          case "max-age":
            // convert max-age → expiry timestamp
            expiry = new Date(Date.now() + Number(val) * 1000).toUTCString();
            break;
        }
      });

      return {
        name: name || "",
        value: value || "",
        domain,
        path,
        expiry,
      };
    });
  };

  if (isLoading) {
    return (
      <div className="border border-border rounded-md bg-surface p-4 space-y-3">
        <div className="flex gap-3">
          <Skeleton className="h-7 w-20 bg-muted" />
          <Skeleton className="h-7 w-16 bg-muted" />
          <Skeleton className="h-7 w-16 bg-muted" />
        </div>
        <Skeleton className="h-4 w-full bg-muted" />
        <Skeleton className="h-4 w-3/4 bg-muted" />
        <Skeleton className="h-4 w-1/2 bg-muted" />
        <Skeleton className="h-32 w-full bg-muted" />
      </div>
    );
  }

  if (!tab.response) {
    return (
      <div className="border border-border rounded-md bg-surface flex items-center justify-center py-16">
        <div className="text-center text-muted-foreground">
          <p className="text-sm">
            Hit{" "}
            <kbd className="px-1.5 py-0.5 bg-muted rounded text-xs font-mono">
              Send
            </kbd>{" "}
            to get a response
          </p>
          <p className="text-xs mt-1">
            or press{" "}
            <kbd className="px-1.5 py-0.5 bg-muted rounded text-[10px] font-mono">
              ⌘ Enter
            </kbd>
          </p>
        </div>
      </div>
    );
  }

  const cookies = parseCookies(apiResponse?.response?.headers?.["set-cookie"]);

  const sizeBreakdown = {
    headersSize:
      Number(
        apiResponse?.response?.size?.breakdown?.headersSize ||
          apiResponse?.response?.breakdown?.headersSize,
      ) || 0,
    bodySize:
      Number(
        apiResponse?.response?.size?.breakdown?.bodySize ||
          apiResponse?.response?.breakdown?.bodySize,
      ) || 0,
  };

  const copyBody = () => {
    const body = apiResponse?.response?.body;

    if (!body) return;
    const textToCopy =
      typeof body === "string"
        ? body
        : typeof body === "object"
          ? JSON.stringify(body, null, 2)
          : String(body);

    navigator.clipboard.writeText(textToCopy);
    toast.success("Copied to clipboard");
  };

  const downloadJSON = () => {
    const body = apiResponse?.response?.body;
    if (!body) return;
    const dataStr =
      typeof body === "string"
        ? body
        : typeof body === "object"
          ? JSON.stringify(body, null, 2)
          : String(body);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "response.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", bounce: 0, duration: 0.35 }}
      className="border border-border rounded-md bg-surface overflow-hidden"
    >
      {/* Status bar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-border">
        <div className="flex items-center gap-3">
          <StatusBadge
            status={
              apiResponse?.response?.status || apiResponse?.response?.statusCode
            }
            statusText={apiResponse?.response?.statusText}
          />
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" />
            <span className="font-mono">
              {apiResponse?.response?.time?.total ||
                apiResponse?.response?.responseTime}
              ms
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <HardDrive className="h-3 w-3" />
            <span className="font-mono">
              {apiResponse?.response?.size?.formatted ||
                apiResponse?.response?.size}
              KB
            </span>
          </div>
        </div>
        <div className="flex gap-1">
          <Button
            onClick={copyBody}
            variant="ghost"
            size="icon"
            className="h-7 w-7 text-muted-foreground"
          >
            <Copy className="h-3.5 w-3.5" />
          </Button>
          <Button
            variant="ghost"
            onClick={downloadJSON}
            size="icon"
            className="h-7 w-7 text-muted-foreground"
          >
            <Download className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>

      {/* Response tabs */}
      <div className="flex border-b border-border">
        {responseTabs.map((rt) => (
          <button
            key={rt}
            onClick={() => setActiveTab(rt)}
            className={cn(
              "relative px-4 py-2 text-xs uppercase tracking-wider transition-colors",
              rt === activeTab
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {rt}
            {rt === activeTab && (
              <motion.div
                layoutId="response-tab-indicator"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"
                transition={{ type: "spring", bounce: 0, duration: 0.25 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="min-h-[200px]">
        {activeTab === "body" && (
          <div>
            <div className="flex gap-1 px-4 py-2 border-b border-border/50">
              {(["pretty", "raw", "preview"] as const).map((v) => (
                <button
                  key={v}
                  onClick={() => setBodyView(v)}
                  className={cn(
                    "px-2.5 py-1 rounded text-[10px] uppercase tracking-wider transition-colors",
                    v === bodyView
                      ? "bg-muted text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {v}
                </button>
              ))}
            </div>
            {bodyView === "pretty" && (
              <JsonViewer content={apiResponse?.response?.body} />
            )}
            {bodyView === "raw" && (
              <pre className="p-4 text-xs font-mono overflow-auto max-h-[400px] text-muted-foreground">
                {(() => {
                  const body = apiResponse?.response?.body;

                  if (body === null || body === undefined) {
                    return "No response body";
                  }

                  if (typeof body === "string") {
                    return body;
                  }

                  if (typeof body === "object") {
                    return JSON.stringify(body, null, 2);
                  }

                  // fallback (number, boolean, etc.)
                  return String(body);
                })()}
              </pre>
            )}
            {bodyView === "preview" && (
              <div className="p-4 text-sm text-muted-foreground">
                HTML preview not available for JSON responses.
              </div>
            )}
          </div>
        )}

        {activeTab === "headers" && (
          <div className="text-sm border border-border/40 rounded-lg overflow-hidden">
            <div className="grid grid-cols-3 bg-muted/40 text-xs font-semibold">
              <div className="px-4 py-2 border-r border-border/30">Key</div>
              <div className="px-4 py-2 col-span-2">Value</div>
            </div>

            {Object.entries(apiResponse?.response?.headers || {}).map(
              ([key, value], i) => (
                <div
                  key={i}
                  className="grid grid-cols-3 border-t border-border/30 hover:bg-muted/30 transition"
                >
                  <div className="px-4 py-2 font-mono text-xs text-sky-400 border-r border-border/30 break-all">
                    {key}
                  </div>
                  <div className="px-4 py-2 font-mono text-xs col-span-2 break-all">
                    {String(value)}
                  </div>
                </div>
              ),
            )}
          </div>
        )}

        {activeTab === "cookies" && (
          <div className="text-sm overflow-x-auto">
            <div className="grid grid-cols-5 text-[10px] uppercase tracking-wider text-muted-foreground border-b border-border">
              {["name", "value", "domain", "path", "expires"].map((h) => (
                <div key={h} className="px-4 py-2">
                  {h}
                </div>
              ))}
            </div>
            {cookies.map((c, i) => (
              <div
                key={i}
                className="grid grid-cols-5 border-b border-border/30"
              >
                {[c.name, c.value, c.domain, c.path, c.expiry].map((v, j) => (
                  <div key={j} className="px-4 py-2 text-xs font-mono truncate">
                    {v}
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

        {activeTab === "timeline" && (
          <div className="p-4">
            <ResponseTimingBar
              timing={
                apiResponse?.response?.time || apiResponse?.response?.timeline
              }
            />
          </div>
        )}

        {activeTab === "breakdown" && (
          <SizeBreakdownChart sizeBreakdown={sizeBreakdown} />
        )}
      </div>
    </motion.div>
  );
};

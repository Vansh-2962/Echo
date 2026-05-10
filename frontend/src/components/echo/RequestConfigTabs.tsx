import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { KeyValueTable } from "./KeyValueTable";
import { AuthPanel } from "./AuthPanel";
import { useRequestStore } from "@/store/use-request-store";
import { Kbd } from "@/components/ui/kbd";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Editor from "@monaco-editor/react";

const configTabs = ["params", "headers", "body", "auth", "scripts"] as const;

export const RequestConfigTabs = () => {
  const [showZoomHint, setShowZoomHint] = useState(true);
  const [activeConfigTab, setActiveConfigTab] =
    useState<(typeof configTabs)[number]>("params");
  const [scriptTab, setScriptTab] = useState<"pre" | "post">("pre");
  const {
    tabs,
    activeTabId,
    updateTab,
    fontSize,
    fontFamily,
    lineNumber,
    minimap,
  } = useRequestStore();
  const tab = tabs.find((t) => t.id === activeTabId);
  if (!tab) return null;

  const editorRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowZoomHint(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleFormat = () => {
    editorRef.current?.getAction("editor.action.formatDocument").run();
  };

  return (
    <div className="border border-border rounded-md bg-surface overflow-hidden">
      <div className="flex border-b border-border items-center justify-between">
        <div>
          {configTabs.map((ct) => (
            <button
              key={ct}
              onClick={() => setActiveConfigTab(ct)}
              className={cn(
                "relative px-4 py-2 text-xs uppercase tracking-wider transition-colors",
                ct === activeConfigTab
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {ct}
              {ct === activeConfigTab && (
                <motion.div
                  layoutId="config-tab-indicator"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"
                  transition={{ type: "spring", bounce: 0.4, duration: 0.25 }}
                />
              )}
            </button>
          ))}
        </div>
        <button
          onClick={handleFormat}
          className="text-sm mr-5 text-blue-500 font-semibold cursor-pointer hover:bg-blue-500/10 px-2 py-1 rounded-lg"
        >
          Beautify
        </button>
      </div>

      <div className="min-h-[200px]">
        {activeConfigTab === "params" && (
          <KeyValueTable
            pairs={tab.params}
            onChange={(params) => updateTab(tab.id, { params })}
          />
        )}

        {activeConfigTab === "headers" && (
          <KeyValueTable
            pairs={tab.headers}
            onChange={(headers) => updateTab(tab.id, { headers })}
          />
        )}

        {activeConfigTab === "body" && (
          <div>
            <div className="flex items-center gap-2 p-3 border-b border-border/50">
              <Select
                value={tab.bodyType}
                onValueChange={(v) =>
                  updateTab(tab.id, { bodyType: v as typeof tab.bodyType })
                }
              >
                <SelectTrigger className="w-48 h-8 text-xs bg-background border-border">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">none</SelectItem>
                  <SelectItem value="json">raw (JSON)</SelectItem>
                  <SelectItem value="form-data">form-data</SelectItem>
                  <SelectItem value="x-www-form-urlencoded">
                    x-www-form-urlencoded
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            {tab.bodyType === "none" && (
              <p className="p-4 text-sm text-muted-foreground">
                This request does not have a body.
              </p>
            )}
            {tab.bodyType === "json" && (
              <div>
                {showZoomHint && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-10 rounded-lg transition-opacity animate-fade-in">
                    <div className="flex flex-col items-center gap-3 text-center text-white">
                      {/* Mouse Icon */}
                      <video
                        width={60}
                        src="/Mouse-Scroll-Icon.webm"
                        autoPlay
                        loop
                        muted
                        playsInline
                      ></video>

                      {/* Text */}
                      <p className="text-sm font-medium flex items-center gap-1">
                        Hold <Kbd>Ctrl</Kbd> + <Kbd>Scroll</Kbd> to Zoom
                      </p>
                      <button
                        onClick={() => setShowZoomHint(false)}
                        className="text-xs my-4 border px-2 py-1 rounded-lg hover:bg-white/20 transition-colors"
                      >
                        OK
                      </button>
                    </div>
                  </div>
                )}
                <Editor
                  className="monaco-editor"
                  height="300px"
                  defaultLanguage="json"
                  theme="vs-dark"
                  value={tab.bodyContent}
                  options={{
                    minimap: { enabled: minimap },
                    fontSize: fontSize ?? 16,
                    fontFamily: fontFamily,
                    automaticLayout: true,
                    lineNumbers: lineNumber ? "on" : "off",
                    mouseWheelZoom: true,
                  }}
                  onChange={(value) =>
                    updateTab(tab.id, { bodyContent: value || "" })
                  }
                  onMount={(editor) => {
                    editorRef.current = editor;
                  }}
                />
              </div>
            )}
            {(tab.bodyType === "form-data" ||
              tab.bodyType === "x-www-form-urlencoded") && (
              <KeyValueTable
                pairs={tab.bodyFormData}
                onChange={(bodyFormData) => updateTab(tab.id, { bodyFormData })}
                showDescription={false}
              />
            )}
          </div>
        )}

        {activeConfigTab === "auth" && (
          <AuthPanel
            authType={tab.authType}
            authConfig={tab.authConfig}
            onTypeChange={(authType) => updateTab(tab.id, { authType })}
            onConfigChange={(authConfig) => updateTab(tab.id, { authConfig })}
          />
        )}

        {activeConfigTab === "scripts" && (
          <div>
            <div className="flex border-b border-border/50">
              {(["pre", "post"] as const).map((st) => (
                <button
                  key={st}
                  onClick={() => setScriptTab(st)}
                  className={cn(
                    "px-4 py-2 text-xs transition-colors",
                    st === scriptTab
                      ? "text-foreground bg-background"
                      : "text-muted-foreground",
                  )}
                >
                  {st === "pre" ? "Pre-request" : "Post-response"}
                </button>
              ))}
            </div>
            <textarea
              value={
                scriptTab === "pre"
                  ? tab.preRequestScript
                  : tab.postResponseScript
              }
              readOnly
              className="w-full h-[200px] bg-transparent p-4 font-mono text-xs outline-none resize-none text-muted-foreground"
            />
          </div>
        )}
      </div>
    </div>
  );
};

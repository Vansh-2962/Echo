import { useEffect, useRef, useState } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-json";
import "prismjs/themes/prism-okaidia.css";

import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export const JsonViewer = ({ content }: { content: any }) => {
  const [copied, setCopied] = useState(false);
  const codeRef = useRef<HTMLElement>(null);

  const formatted =
    typeof content === "string" ? content : JSON.stringify(content, null, 2);

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [formatted]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(formatted);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-2 right-2 h-7 w-7"
        onClick={copyToClipboard}
      >
        {copied ? (
          <Check className="h-3.5 w-3.5" />
        ) : (
          <Copy className="h-3.5 w-3.5" />
        )}
      </Button>

      <pre className="p-4 text-xs overflow-auto max-h-[400px] rounded-lg ">
        <code ref={codeRef} className="language-json">
          {formatted}
        </code>
      </pre>
    </div>
  );
};

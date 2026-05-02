import Editor, { useMonaco } from "@monaco-editor/react";
import { useEffect } from "react";

export default function MyEditor() {
  const monaco = useMonaco();

  useEffect(() => {
    if (monaco) {
      monaco.editor.defineTheme("myTheme", {
        base: "vs-dark",
        inherit: true,
        rules: [],
        colors: {
          "editor.background": "#1e1e1e", // 👈 change this
        },
      });
    }
  }, [monaco]);

  return <Editor height="300px" defaultLanguage="json" theme="myTheme" />;
}

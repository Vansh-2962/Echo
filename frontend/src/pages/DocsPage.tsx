import { useState } from "react";
import { motion } from "framer-motion";
import {
  Zap,
  Send,
  FolderOpen,
  Clock,
  Shield,
  Globe,
  Terminal,
  Settings,
  ArrowRight,
  BookOpen,
  Code2,
  Layers,
  ChevronRight,
  Search,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

const sections = [
  { id: "getting-started", label: "Getting Started", icon: Zap },
  { id: "request-builder", label: "Request Builder", icon: Send },
  { id: "collections", label: "Collections", icon: FolderOpen },
  { id: "environments", label: "Environments", icon: Globe },
  { id: "authentication", label: "Authentication", icon: Shield },
  { id: "history", label: "History", icon: Clock },
  { id: "scripts", label: "Scripts", icon: Terminal },
  { id: "settings", label: "Settings", icon: Settings },
];

const CodeBlock = ({
  code,
  language = "json",
}: {
  code: string;
  language?: string;
}) => (
  <div className="rounded-lg border border-border bg-card overflow-hidden my-4">
    <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-muted/30">
      <span className="text-xs text-muted-foreground font-mono">
        {language}
      </span>
    </div>
    <pre className="p-4 text-sm font-mono text-muted-foreground overflow-x-auto leading-relaxed">
      <code>{code}</code>
    </pre>
  </div>
);

const DocsPage = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("getting-started");
  const [search, setSearch] = useState("");

  const filteredSections = sections.filter((s) =>
    s.label.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-14">
          <div className="flex items-center gap-6">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2.5 hover:opacity-80 transition-opacity"
            >
              <div className="h-7 w-7 rounded-lg bg-primary/10 flex items-center justify-center">
                <Zap className="h-3.5 w-3.5 text-primary" />
              </div>
              <span className="font-semibold text-sm">Echo</span>
            </button>
            <div className="hidden md:flex items-center gap-1 text-sm text-muted-foreground">
              <ChevronRight className="h-3.5 w-3.5" />
              <BookOpen className="h-3.5 w-3.5 mr-1" />
              <span className="font-medium text-foreground">Documentation</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button variant="ghost" size="sm" onClick={() => navigate("/app")}>
              Open App
            </Button>
          </div>
        </div>
      </nav>

      <div className="flex pt-14">
        {/* Sidebar */}
        <aside className="hidden md:block w-64 fixed top-14 bottom-0 border-r border-border bg-card/30 overflow-y-auto">
          <div className="p-4">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search docs..."
                className="h-9 pl-9 bg-background border-border text-sm"
              />
            </div>
            <nav className="space-y-1">
              {filteredSections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => {
                    setActiveSection(s.id);
                    document
                      .getElementById(s.id)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={cn(
                    "w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors",
                    activeSection === s.id
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent",
                  )}
                >
                  <s.icon className="h-4 w-4 shrink-0" />
                  {s.label}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 md:ml-64 max-w-3xl px-6 md:px-12 py-12">
          {/* Hero */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card text-xs text-muted-foreground mb-6">
              <BookOpen className="h-3 w-3" />
              v1.0 Documentation
            </div>
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Echo Documentation
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Learn how to use Echo to build, test, and debug your APIs with a
              modern, developer-first workflow.
            </p>
          </motion.div>

          {/* Getting Started */}
          <section id="getting-started" className="mb-16 scroll-mt-20">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-bold">Getting Started</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Echo is a modern, lightweight API testing client. Get started in
              seconds — no account required for local use.
            </p>
            <div className="grid sm:grid-cols-3 gap-3 mb-6">
              {[
                {
                  step: "1",
                  title: "Open Echo",
                  desc: "Launch the app from the landing page",
                },
                {
                  step: "2",
                  title: "Enter URL",
                  desc: "Type your API endpoint in the URL bar",
                },
                {
                  step: "3",
                  title: "Send Request",
                  desc: "Click Send and inspect the response",
                },
              ].map((s) => (
                <div
                  key={s.step}
                  className="rounded-lg border border-border bg-card p-4"
                >
                  <div className="h-7 w-7 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center mb-3">
                    {s.step}
                  </div>
                  <h4 className="font-semibold text-sm mb-1">{s.title}</h4>
                  <p className="text-xs text-muted-foreground">{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Request Builder */}
          <section id="request-builder" className="mb-16 scroll-mt-20">
            <div className="flex items-center gap-2 mb-4">
              <Send className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-bold">Request Builder</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The request builder is the core of Echo. It supports all standard
              HTTP methods and provides tabs for configuring every aspect of
              your request.
            </p>
            <h3 className="text-lg font-semibold mb-2">Supported Methods</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                { method: "GET", color: "bg-method-get/10 text-method-get" },
                { method: "POST", color: "bg-method-post/10 text-method-post" },
                { method: "PUT", color: "bg-method-put/10 text-method-put" },
                {
                  method: "DELETE",
                  color: "bg-method-delete/10 text-method-delete",
                },
                {
                  method: "PATCH",
                  color: "bg-method-patch/10 text-method-patch",
                },
                { method: "HEAD", color: "bg-muted text-muted-foreground" },
                { method: "OPTIONS", color: "bg-muted text-muted-foreground" },
              ].map((m) => (
                <span
                  key={m.method}
                  className={cn(
                    "px-3 py-1 rounded-md text-xs font-bold font-mono",
                    m.color,
                  )}
                >
                  {m.method}
                </span>
              ))}
            </div>

            <h3 className="text-lg font-semibold mb-2">URL Bar</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              The URL bar supports environment variable interpolation using the{" "}
              <code className="font-mono text-primary bg-primary/10 px-1.5 py-0.5 rounded text-xs">
                {"{{variable}}"}
              </code>{" "}
              syntax. Variables are resolved from the currently active
              environment.
            </p>

            <h3 className="text-lg font-semibold mb-2">Request Tabs</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-2">
              Below the URL bar, five tabs let you configure:
            </p>
            <ul className="space-y-1.5 text-sm text-muted-foreground mb-4">
              {[
                ["Params", "Query parameters that sync with the URL string"],
                ["Headers", "Custom HTTP headers as key-value pairs"],
                [
                  "Body",
                  "Request body — JSON, form-data, or x-www-form-urlencoded",
                ],
                [
                  "Auth",
                  "Authentication configuration (Bearer, Basic, API Key)",
                ],
                ["Scripts", "Pre-request and post-response JavaScript hooks"],
              ].map(([title, desc]) => (
                <li key={title} className="flex gap-2">
                  <ChevronRight className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-foreground">{title}</strong> —{" "}
                    {desc}
                  </span>
                </li>
              ))}
            </ul>

            <CodeBlock
              language="example"
              code={`GET https://api.example.com/v1/users?page=1&limit=20
Headers:
  Authorization: Bearer {{token}}
  Content-Type: application/json`}
            />
          </section>

          {/* Collections */}
          <section id="collections" className="mb-16 scroll-mt-20">
            <div className="flex items-center gap-2 mb-4">
              <FolderOpen className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-bold">Collections</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Collections let you organize related API requests into groups.
              Each collection can contain unlimited requests and is identified
              by a name and color.
            </p>
            <h3 className="text-lg font-semibold mb-2">Features</h3>
            <ul className="space-y-1.5 text-sm text-muted-foreground mb-4">
              {[
                "Create, rename, and delete collections",
                "Drag and reorder requests within a collection",
                "Duplicate requests across collections",
                "Color-coded collection indicators",
              ].map((item, i) => (
                <li key={i} className="flex gap-2">
                  <ChevronRight className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Environments */}
          <section id="environments" className="mb-16 scroll-mt-20">
            <div className="flex items-center gap-2 mb-4">
              <Globe className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-bold">Environments</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Environments allow you to define variables that can be reused
              across requests. Switch between Development, Staging, and
              Production with a single click.
            </p>
            <CodeBlock
              language="json"
              code={`{
  "name": "Development",
  "variables": [
    { "key": "base_url", "value": "http://localhost:3000" },
    { "key": "token", "value": "dev_abc123", "secret": true }
  ]
}`}
            />
            <p className="text-sm text-muted-foreground">
              Secret variables are masked in the UI and never exported in plain
              text.
            </p>
          </section>

          {/* Authentication */}
          <section id="authentication" className="mb-16 scroll-mt-20">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-bold">Authentication</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Echo supports multiple authentication methods that automatically
              inject credentials into your requests.
            </p>
            <div className="grid sm:grid-cols-2 gap-3 mb-4">
              {[
                {
                  title: "Bearer Token",
                  desc: "Adds an Authorization header with your token",
                },
                {
                  title: "Basic Auth",
                  desc: "Base64-encodes username:password credentials",
                },
                {
                  title: "API Key",
                  desc: "Sends a custom key in headers or query params",
                },
                {
                  title: "No Auth",
                  desc: "Send requests without authentication",
                },
              ].map((a) => (
                <div
                  key={a.title}
                  className="rounded-lg border border-border bg-card p-4"
                >
                  <h4 className="font-semibold text-sm mb-1">{a.title}</h4>
                  <p className="text-xs text-muted-foreground">{a.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* History */}
          <section id="history" className="mb-16 scroll-mt-20">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-bold">History</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Every request you send is automatically recorded in your history.
              Click any entry to restore it into the request builder. History is
              stored locally and can be cleared at any time.
            </p>
          </section>

          {/* Scripts */}
          <section id="scripts" className="mb-16 scroll-mt-20">
            <div className="flex items-center gap-2 mb-4">
              <Terminal className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-bold">Scripts</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Echo supports pre-request and post-response scripts written in
              JavaScript. Use them to set variables, validate responses, or
              chain requests.
            </p>
            <CodeBlock
              language="javascript"
              code={`// Pre-request script
const timestamp = Date.now();
echo.setVariable("timestamp", timestamp);

// Post-response script
const data = echo.response.json();
echo.test("Status is 200", () => {
  echo.expect(echo.response.status).toBe(200);
});`}
            />
            <p className="text-sm text-muted-foreground italic">
              Script execution engine coming soon.
            </p>
          </section>

          {/* Settings */}
          <section id="settings" className="mb-16 scroll-mt-20">
            <div className="flex items-center gap-2 mb-4">
              <Settings className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-bold">Settings</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Configure Echo to fit your workflow. Available settings include:
            </p>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              {[
                [
                  "General",
                  "Request timeout, follow redirects, SSL verification",
                ],
                [
                  "Appearance",
                  "Theme (Light/Dark/System), font size, editor theme",
                ],
                ["Proxy", "Custom proxy configuration for requests"],
                ["Shortcuts", "Keyboard shortcuts customization"],
              ].map(([title, desc]) => (
                <li key={title} className="flex gap-2">
                  <ChevronRight className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-foreground">{title}</strong> —{" "}
                    {desc}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* CTA */}
          <div className="rounded-xl border border-border bg-card p-8 text-center">
            <Layers className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Ready to get started?</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Jump into Echo and start testing your APIs.
            </p>
            <Button variant="shiny" onClick={() => navigate("/app")}>
              Open Echo
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DocsPage;

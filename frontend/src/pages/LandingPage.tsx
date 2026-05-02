import { motion } from "framer-motion";
import {
  Zap,
  Send,
  FolderOpen,
  Clock,
  Shield,
  Globe,
  ArrowRight,
  Terminal,
  Layers,
  Lock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useNavigate } from "react-router-dom";
import { authClient } from "@/lib/auth-client";

const features = [
  {
    icon: Send,
    title: "Request Builder",
    description:
      "Craft HTTP requests with an intuitive interface. Support for all methods, headers, params, and body types.",
  },
  {
    icon: FolderOpen,
    title: "Collections",
    description:
      "Organize requests into collections. Group, rename, reorder, and manage your API workflows.",
  },
  {
    icon: Clock,
    title: "History",
    description:
      "Every request is logged. Quickly restore and re-run past API calls with one click.",
  },
  {
    icon: Shield,
    title: "Auth Support",
    description:
      "Bearer tokens, Basic Auth, API keys — switch between auth methods seamlessly.",
  },
  {
    icon: Globe,
    title: "Environments",
    description:
      "Manage variables across Development, Staging, and Production with secret masking.",
  },
  {
    icon: Terminal,
    title: "Scripts",
    description:
      "Pre-request and post-response scripting to automate your testing workflows.",
  },
];

const LandingPage = () => {
  const navigate = useNavigate();
  const { data } = authClient.useSession();
  const isAuthenticated = data?.session && data?.user;

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 h-16">
          <div className="flex items-center gap-2.5">
            <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icon-tabler-bolt text-primary "
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11" />
              </svg>
            </div>
            <span className="font-semibold text-lg tracking-tight">Echo</span>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() =>
                isAuthenticated ? navigate("/docs") : navigate("/login")
              }
            >
              Documentation
            </Button>
            <Button
              variant="shiny"
              size="sm"
              onClick={() =>
                isAuthenticated ? navigate("/app") : navigate("/login")
              }
            >
              <Zap className="h-3.5 w-3.5" />
              Launch App
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 relative">
        {/* Glow effect */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface text-xs text-muted-foreground mb-8">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Developer-first API testing
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Test APIs with
            <br />
            <span className="text-primary">precision & speed</span>
          </motion.h1>

          <motion.p
            className="text-lg text-muted-foreground max-w-xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A modern, lightweight API client built for developers who value
            clean interfaces and fast workflows. No bloat, no distractions.
          </motion.p>

          <motion.div
            className="flex items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button
              variant="shiny"
              size="lg"
              className="text-base px-8"
              onClick={() =>
                isAuthenticated ? navigate("/app") : navigate("/login")
              }
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="text-base px-8">
              View Demo
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Mock UI Preview */}
      <section className="px-6 pb-24">
        <motion.div
          className="max-w-5xl mx-auto rounded-xl border border-border overflow-hidden shadow-2xl shadow-primary/5 bg-surface"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {/* Mock titlebar */}
          <div className="h-10 bg-card border-b border-border flex items-center px-4 gap-2">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-destructive/60" />
              <div className="h-3 w-3 rounded-full bg-status-4xx/60" />
              <div className="h-3 w-3 rounded-full bg-method-get/60" />
            </div>
            <div className="flex-1 text-center">
              <span className="text-xs text-muted-foreground font-mono">
                Echo — API Client
              </span>
            </div>
          </div>
          {/* Mock content */}
          <div className="p-6 space-y-4">
            <div className="flex gap-3 items-center">
              <div className="px-3 py-1.5 rounded-md bg-method-get/10 text-method-get text-xs font-bold font-mono">
                GET
              </div>
              <div className="flex-1 h-10 rounded-md bg-background border border-border flex items-center px-4">
                <span className="text-sm font-mono text-muted-foreground">
                  https://api.example.com/v1/users
                </span>
              </div>
              <Button variant="shiny" size="sm">
                Send
              </Button>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {["Params", "Headers", "Body", "Auth"].map((tab) => (
                <div
                  key={tab}
                  className={`text-center py-2 rounded-md text-xs font-medium ${tab === "Headers" ? "bg-primary/10 text-primary" : "text-muted-foreground"}`}
                >
                  {tab}
                </div>
              ))}
            </div>
            <div className="rounded-md bg-background border border-border p-4 font-mono text-xs text-muted-foreground leading-relaxed">
              <span className="text-primary">{"{"}</span>
              <br />
              &nbsp;&nbsp;<span className="text-method-post">"users"</span>: [
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="text-primary">{"{"}</span>{" "}
              <span className="text-method-post">"id"</span>:{" "}
              <span className="text-method-put">1</span>,{" "}
              <span className="text-method-post">"name"</span>:{" "}
              <span className="text-method-get">"Alice"</span>{" "}
              <span className="text-primary">{"}"}</span>
              <br />
              &nbsp;&nbsp;]
              <br />
              <span className="text-primary">{"}"}</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Everything you need
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              A complete toolkit for API development and testing, designed to
              keep you in flow.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                className="group p-6 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl border border-border bg-card p-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "7", label: "HTTP Methods" },
                { value: "∞", label: "Collections" },
                { value: "<1s", label: "Response Time" },
                { value: "100%", label: "Open Source" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="text-3xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-6 pb-24" id="pricing">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Start free, upgrade when you need more power.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Free Plan */}
            <motion.div
              className="rounded-xl border border-border bg-card p-8 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-1">Free</h3>
                <p className="text-sm text-muted-foreground">
                  Get started with the basics
                </p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-muted-foreground text-sm ml-1">
                  /month
                </span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "1 Collection",
                  "3 Requests only",
                  "Request history (7 days)",
                  "Basic auth support",
                  "Community support",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-sm text-muted-foreground"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground/50 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => navigate("/app")}
              >
                Get Started Free
              </Button>
            </motion.div>

            {/* Pro Plan */}
            <motion.div
              className="rounded-xl border-2 border-primary bg-card p-8 flex flex-col relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="absolute top-4 right-4">
                <span className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                  Popular
                </span>
              </div>
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-1">Pro</h3>
                <p className="text-sm text-muted-foreground">
                  For serious API developers
                </p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold">$20</span>
                <span className="text-muted-foreground text-sm ml-1">
                  /month
                </span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "Unlimited Collections",
                  "Unlimited Requests",
                  "Full request history",
                  "All auth methods",
                  "Environments & variables",
                  "Pre/post request scripts",
                  "Priority support",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-sm text-foreground"
                  >
                    <Zap className="h-3.5 w-3.5 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button
                onClick={() => navigate("/checkout")}
                variant="shiny"
                className="w-full"
              >
                Upgrade to Pro
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Layers className="h-10 w-10 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Ready to streamline your API workflow?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Start building, testing, and debugging your APIs with a tool that
              respects your time.
            </p>
            <Button
              variant="shiny"
              size="lg"
              className="text-base px-10"
              onClick={() =>
                isAuthenticated ? navigate("/app") : navigate("/login")
              }
            >
              <Zap className="h-4 w-4" />
              Launch Echo
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Echo</span>
          </div>
          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <span>Documentation</span>
            <span>GitHub</span>
            <span>Changelog</span>
          </div>
          <p className="text-xs text-muted-foreground">
            © 2026 Echo. Built for developers.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

import { useState } from "react";
import { motion } from "framer-motion";
import { Zap, Github, Mail, LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useNavigate } from "react-router-dom";
import { authClient } from "@/lib/auth-client";

const LoginPage = () => {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { data } = authClient.useSession();

  const handleSignInViaGoogle = async () => {
    setIsLoading(true);
    const data = await authClient.signIn.social({
      provider: "google",
      callbackURL: `${import.meta.env.VITE_BACKEND_URL}/api/auth/callback/google?redirectTo=${import.meta.env.VITE_FRONTEND_URL}/app`,
    });
    setIsLoading(false);
  };

  const handleSignInViaGithub = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
      callbackURL: `${import.meta.env.VITE_BACKEND_URL}/api/auth/callback/github?redirectTo=${import.meta.env.VITE_FRONTEND_URL}/app`,
    });
  };

  if (data?.session && data?.user) {
    navigate("/app");
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary/8 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-[200px]" />
      </div>

      {/* Floating grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Left branding panel - hidden on mobile */}
      <div className="hidden lg:flex lg:w-1/2 relative items-center justify-center p-12">
        <div className="relative z-10 max-w-md">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-10">
              <div className="h-12 w-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <span className="text-2xl font-bold tracking-tight">Echo</span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight leading-tight mb-4">
              Build & test APIs
              <br />
              <span className="text-primary">at lightning speed</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              The modern API client that developers love. Organize requests,
              manage environments, and debug with ease.
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-2">
              {[
                "Collections",
                "Environments",
                "History",
                "Auth Support",
                "Scripts",
              ].map((f, i) => (
                <motion.span
                  key={f}
                  className="px-3 py-1.5 rounded-full border border-border bg-card/50 text-xs text-muted-foreground"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.08 }}
                >
                  {f}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Decorative code block */}
          <motion.div
            className="absolute -bottom-8 -right-8 w-64 rounded-xl border border-border bg-card/60 backdrop-blur-sm p-4 font-mono text-xs text-muted-foreground shadow-2xl"
            initial={{ opacity: 0, y: 20, rotate: 3 }}
            animate={{ opacity: 1, y: 0, rotate: 3 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <div className="flex items-center gap-1.5 mb-3">
              <div className="h-2 w-2 rounded-full bg-destructive/60" />
              <div className="h-2 w-2 rounded-full bg-[hsl(var(--status-4xx))]/60" />
              <div className="h-2 w-2 rounded-full bg-method-get/60" />
            </div>
            <div>
              <span className="text-method-get">GET</span> /api/v1/users
            </div>
            <div className="text-primary mt-1">
              → 200 OK <span className="text-muted-foreground/50">42ms</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right form panel */}
      <div className="flex-1 flex items-center justify-center p-6 relative z-10">
        {/* Top bar */}
        <div className="absolute top-4 right-4 flex items-center gap-2">
          <ThemeToggle />
          <Button variant="ghost" size="sm" onClick={() => navigate("/")}>
            Back to home
          </Button>
        </div>

        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Mobile logo */}
          <div className="flex items-center gap-2.5 mb-8 lg:hidden">
            <div className="h-9 w-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
              <Zap className="h-4 w-4 text-primary" />
            </div>
            <span className="font-bold text-lg">Echo</span>
          </div>

          <h2 className="text-2xl font-bold tracking-tight mb-2">
            {isSignUp ? "Create your account" : "Welcome to Echo"}
          </h2>
          <p className="text-muted-foreground mb-8">
            {isSignUp
              ? "Start testing APIs in seconds"
              : "Sign in to continue to Echo"}
          </p>

          {/* Social buttons */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <Button
              onClick={handleSignInViaGithub}
              variant="outline"
              className="h-11 gap-2 text-sm"
            >
              <Github className="h-4 w-4" />
              GitHub
            </Button>
            <Button
              onClick={handleSignInViaGoogle}
              variant="outline"
              disabled={isLoading}
              className="h-11 gap-2 text-sm"
            >
              {isLoading ? (
                <>
                  <LoaderCircle className="h-4 w-4 animate-spin" />
                </>
              ) : (
                <>
                  <Mail className="h-4 w-4" />
                  Google
                </>
              )}
            </Button>
          </div>

          <p className="text-center text-xs text-muted-foreground/60 mt-8">
            By continuing, you agree to Echo's Terms of Service and Privacy
            Policy.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;

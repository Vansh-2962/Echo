import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, LogOut, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";
import { useTheme } from "next-themes";

const sections = [
  "profile",
  "general",
  "appearance",
  "proxy",
  "shortcuts",
] as const;

const SettingsPage = () => {
  const { theme, setTheme } = useTheme();
  const [activeSection, setActiveSection] =
    useState<(typeof sections)[number]>("profile");
  const navigate = useNavigate();
  const { data } = authClient.useSession();

  const handleLogout = () => {
    authClient.signOut();
  };

  return (
    <div className="h-screen flex flex-col bg-background overflow-hidden">
      <header className="h-12 flex items-center gap-3 px-4 border-b border-border bg-surface flex-shrink-0">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={() => navigate("/app")}
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <span className="text-sm font-semibold">Settings</span>
      </header>
      <div className="flex flex-1 overflow-hidden">
        <nav className="w-48 border-r border-border p-3 space-y-0.5 flex-shrink-0">
          {sections.map((s) => (
            <button
              key={s}
              onClick={() => setActiveSection(s)}
              className={cn(
                "w-full text-left px-3 py-2 rounded text-xs capitalize transition-colors",
                s === activeSection
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground hover:bg-muted/50",
              )}
            >
              {s}
            </button>
          ))}
        </nav>
        <main className="flex-1 overflow-y-auto p-6">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.15 }}
            className="max-w-lg space-y-6"
          >
            {activeSection === "profile" && (
              <>
                <h2 className="text-sm font-semibold mb-4">Profile</h2>
                <div className="space-y-6">
                  {/* Avatar */}
                  <div className="flex items-center gap-4">
                    <div className="relative group">
                      <Avatar className="h-16 w-16 border-2 border-border">
                        <AvatarImage src={data.user?.image} />
                        <AvatarFallback className="bg-primary/10 text-primary text-lg font-semibold">
                          {data.user?.name
                            ?.split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <button className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                        <Camera className="h-4 w-4 text-white" />
                      </button>
                    </div>
                    <div>
                      <p className="text-sm font-medium">{data.user?.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {data.user?.email}
                      </p>
                    </div>
                  </div>

                  <Separator />

                  {/* Profile Fields */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-xs uppercase tracking-wider text-muted-foreground">
                        first name
                      </Label>
                      <Input
                        defaultValue={data.user?.name?.split(" ")[0]}
                        disabled
                        className="bg-surface border-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-xs uppercase tracking-wider text-muted-foreground">
                        last name
                      </Label>
                      <Input
                        defaultValue={data.user?.name
                          ?.split(" ")
                          .map((_, i, arr) => i !== 0 && arr[i])
                          .filter(Boolean)
                          .join(" ")}
                        disabled
                        className="bg-surface border-border"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-xs uppercase tracking-wider text-muted-foreground">
                      email
                    </Label>
                    <Input
                      defaultValue={data.user?.email}
                      disabled
                      className="bg-surface border-border"
                      type="email"
                    />
                  </div>

                  <Separator />

                  {/* Logout */}
                  <div className="flex items-center justify-between p-4 rounded-lg border border-destructive/20 bg-destructive/5">
                    <div>
                      <p className="text-sm font-medium">Sign out</p>
                      <p className="text-xs text-muted-foreground">
                        End your current session
                      </p>
                    </div>
                    <Button
                      variant="destructive"
                      size="sm"
                      className="gap-2"
                      onClick={handleLogout}
                    >
                      <LogOut className="h-3.5 w-3.5" />
                      Logout
                    </Button>
                  </div>
                </div>
              </>
            )}
            {activeSection === "general" && (
              <>
                <h2 className="text-sm font-semibold mb-4">General</h2>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-xs uppercase tracking-wider text-muted-foreground">
                      request timeout (ms)
                    </Label>
                    <Input
                      defaultValue="30000"
                      className="bg-surface border-border font-mono w-40"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label className="text-xs">Follow redirects</Label>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label className="text-xs">
                      SSL certificate verification
                    </Label>
                    <Switch defaultChecked />
                  </div>
                </div>
              </>
            )}
            {activeSection === "appearance" && (
              <>
                <h2 className="text-sm font-semibold mb-4">Appearance</h2>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-xs uppercase tracking-wider text-muted-foreground">
                      theme
                    </Label>
                    <Select
                      value={theme || "dark"}
                      onValueChange={(value) =>
                        setTheme(value as "dark" | "light" | "system")
                      }
                    >
                      <SelectTrigger className="w-48 bg-surface border-border">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs uppercase tracking-wider text-muted-foreground">
                      font size
                    </Label>
                    <Select defaultValue="14">
                      <SelectTrigger className="w-48 bg-surface border-border">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="12">12px</SelectItem>
                        <SelectItem value="14">14px</SelectItem>
                        <SelectItem value="16">16px</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs uppercase tracking-wider text-muted-foreground">
                      editor theme
                    </Label>
                    <Select defaultValue="one-dark">
                      <SelectTrigger className="w-48 bg-surface border-border">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="one-dark">One Dark</SelectItem>
                        <SelectItem value="dracula">Dracula</SelectItem>
                        <SelectItem value="github-dark">GitHub Dark</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </>
            )}
            {activeSection === "proxy" && (
              <>
                <h2 className="text-sm font-semibold mb-4">Proxy</h2>
                <div className="border border-border rounded-md p-8 text-center">
                  <p className="text-sm text-muted-foreground">
                    Proxy configuration coming soon.
                  </p>
                </div>
              </>
            )}
            {activeSection === "shortcuts" && (
              <>
                <h2 className="text-sm font-semibold mb-4">
                  Keyboard Shortcuts
                </h2>
                <div className="border border-border rounded-md p-8 text-center">
                  <p className="text-sm text-muted-foreground">
                    Keyboard shortcuts configuration coming soon.
                  </p>
                </div>
              </>
            )}
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default SettingsPage;

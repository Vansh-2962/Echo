import {
  PanelLeftClose,
  PanelLeft,
  Settings,
  Zap,
  Globe,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRequestStore } from "@/store/use-request-store";
import { useState } from "react";
import { EnvironmentModal } from "./EnvironmentModal";
import { useNavigate, useLocation } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import { authClient } from "@/lib/auth-client";
import { calculateCredits } from "@/utils/credits";

export const Navbar = () => {
  const {
    sidebarOpen,
    setSidebarOpen,
    environments,
    activeEnvironmentId,
    setActiveEnvironment,
  } = useRequestStore();

  const { data } = authClient.useSession();
  const [envModalOpen, setEnvModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const credits = calculateCredits("FREE");
  

  return (
    <>
      <header className="h-12 flex items-center justify-between px-3 border-b border-border bg-surface flex-shrink-0">
        <div className="flex items-center gap-3 ">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-muted-foreground"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? (
              <PanelLeftClose className="h-4 w-4" />
            ) : (
              <PanelLeft className="h-4 w-4" />
            )}
          </Button>

          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-bolt text-primary "
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11" />
            </svg>
            <span className="font-semibold text-sm tracking-tight">Echo</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <p className="border flex items-center text-sm gap-2 border-primary/50 text-primary rounded-full px-5 py-1">
            <Zap size={14} /> {credits} credits
          </p>

          <Button
            variant="ghost"
            size="sm"
            className="h-8 text-xs text-muted-foreground gap-1.5"
            onClick={() => setEnvModalOpen(true)}
          >
            <Globe className="h-3.5 w-3.5" />
            <Select
              value={activeEnvironmentId || "none"}
              onValueChange={(v) =>
                setActiveEnvironment(v === "none" ? null : v)
              }
            >
              <SelectTrigger className="h-7 border-0 bg-transparent text-xs w-auto gap-1 p-0 px-1">
                <SelectValue placeholder="No Environment" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">No Environment</SelectItem>
                {environments.map((e) => (
                  <SelectItem key={e.id} value={e.id}>
                    {e.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Button>

          <ThemeToggle />

          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-muted-foreground"
            onClick={() =>
              navigate(location.pathname === "/settings" ? "/app" : "/settings")
            }
          >
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </header>
      <EnvironmentModal open={envModalOpen} onOpenChange={setEnvModalOpen} />
    </>
  );
};

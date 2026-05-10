import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";

export function ThemeToggle({ settings }: { settings?: boolean }) {
  const { theme, setTheme } = useTheme();

  return (
    <>
      {settings ? (
        <div className="flex items-center gap-3 w-48 ">
          <Button
            variant="outline"
            disabled={theme === "light"}
            className="text-muted-foreground w-1/2"
            onClick={() => setTheme("light")}
          >
            Light
          </Button>
          <Button
            variant="outline"
            disabled={theme === "dark"}
            className="text-muted-foreground w-1/2"
            onClick={() => setTheme("dark")}
          >
            Dark
          </Button>
        </div>
      ) : (
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-muted-foreground"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      )}
    </>
  );
}

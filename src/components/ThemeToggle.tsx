import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="w-9 h-9">
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-9 h-9 transition-all duration-500 hover:rotate-180 hover:scale-110"
    >
      {theme === "dark" ? (
        <Sun className="h-[1.2rem] w-[1.2rem] text-foreground/80 hover:text-primary transition-all duration-500 animate-in spin-in-180" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] text-foreground/80 hover:text-primary transition-all duration-500 animate-in spin-in-180" />
      )}
      <span className="sr-only">Przełącz motyw</span>
    </Button>
  );
}

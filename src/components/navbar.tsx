"use client";
import { useTheme } from "next-themes";
import { Moon, Sun, Database, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { href: "projects", label: "Projects" },
  { href: "dashboard", label: "Dashboard" },
  { href: "skills", label: "Skills" },
  { href: "experience", label: "Experience" },
  { href: "contact", label: "Contact" }
];

function scrollTo(id: string, onDone?: () => void) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  onDone?.();
}

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled || menuOpen
          ? "border-b border-border/60 bg-background/95 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button
          onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); setMenuOpen(false); }}
          className="flex items-center gap-2 font-bold text-primary"
        >
          <Database className="h-5 w-5" />
          <span>Levin.dev</span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => scrollTo(l.href)}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </button>
            </li>
          ))}
          <li>
            <Link href="/etl-demo" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              ETL Demo
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-2">
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          )}
          {/* Mobile hamburger */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-border/60 bg-background/95 px-6 pb-6 md:hidden">
          <ul className="flex flex-col gap-4 pt-4">
            {links.map((l) => (
              <li key={l.href}>
                <button
                  onClick={() => scrollTo(l.href, () => setMenuOpen(false))}
                  className="w-full text-left text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </button>
              </li>
            ))}
            <li>
              <Link
                href="/etl-demo"
                onClick={() => setMenuOpen(false)}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                ETL Demo
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

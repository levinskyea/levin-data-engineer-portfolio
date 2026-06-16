"use client";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useActiveSection, type SectionId } from "@/hooks/use-active-section";
import { useScrollContext } from "@/context/scroll-context";
import { cn } from "@/lib/utils";

const NAV_LINKS: { id: SectionId; label: string }[] = [
  { id: "dashboard", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "etl-demo", label: "ETL Demo" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" }
];

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { activeSection, scrollToSection, scrollToTop } = useActiveSection();
  const { requestScroll } = useScrollContext();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Derive active id from pathname or IntersectionObserver
  const activeSectionId: SectionId | null =
    pathname === "/"
      ? activeSection
      : (pathname.replace("/", "") as SectionId) || null;

  function handleNavClick(id: SectionId, closeMenu?: () => void) {
    closeMenu?.();
    setMenuOpen(false);
    if (pathname === "/") {
      // Already on home — just scroll
      scrollToSection(id);
    } else {
      // On another page — request scroll then navigate home
      requestScroll(id);
      router.push("/");
    }
  }

  function handleLogoClick() {
    setMenuOpen(false);
    if (pathname === "/") {
      scrollToTop();
    } else {
      router.push("/");
    }
  }

  function isActive(id: SectionId) {
    return activeSectionId === id;
  }

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled || menuOpen
          ? "border-b border-border/60 bg-background/95 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button
          onClick={handleLogoClick}
          className="flex items-center gap-2 font-bold text-primary"
        >
          <span>levinskyea.</span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => handleNavClick(l.id)}
                className={cn(
                  "text-sm transition-colors hover:text-foreground",
                  isActive(l.id)
                    ? "font-bold text-foreground"
                    : "text-muted-foreground",
                )}
              >
                {l.label}
              </button>
            </li>
          ))}
          <li>
            <Link
              href="/etl-demo"
              className={cn(
                "text-sm transition-colors hover:text-foreground",
                pathname === "/etl-demo"
                  ? "font-bold text-foreground"
                  : "text-muted-foreground",
              )}
            >
              ETL Demo
            </Link>
          </li>
          <li>
            <Link
              href="/etl-demo"
              className={cn(
                "text-sm transition-colors hover:text-foreground",
                pathname === "/etl-demo"
                  ? "font-bold text-foreground"
                  : "text-muted-foreground",
              )}
            >
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
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>
          )}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-border/60 bg-background/95 px-6 pb-6 md:hidden">
          <ul className="flex flex-col gap-4 pt-4">
            {NAV_LINKS.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => handleNavClick(l.id, () => setMenuOpen(false))}
                  className={cn(
                    "w-full text-left text-sm transition-colors hover:text-foreground",
                    isActive(l.id)
                      ? "font-bold text-foreground"
                      : "text-muted-foreground",
                  )}
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

"use client";
import { useEffect, useRef, useState, useCallback } from "react";

export type SectionId = "projects" | "dashboard" | "skills" | "experience" | "contact";

export const SECTIONS: SectionId[] = [
  "projects",
  "dashboard",
  "skills",
  "experience",
  "contact"
];

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<SectionId | null>(null);
  const isProgrammatic = useRef(false);
  const fallbackTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Releases the programmatic lock — uses scrollend if available, falls back to timer
  const releaseLock = useCallback(() => {
    if (fallbackTimer.current) clearTimeout(fallbackTimer.current);

    const supportsScrollEnd = "onscrollend" in window;

    if (supportsScrollEnd) {
      const handler = () => {
        isProgrammatic.current = false;
        window.removeEventListener("scrollend", handler);
      };
      window.addEventListener("scrollend", handler, { once: true });
      // Safety fallback in case scrollend never fires
      fallbackTimer.current = setTimeout(() => {
        isProgrammatic.current = false;
        window.removeEventListener("scrollend", handler);
      }, 2000);
    } else {
      // Fallback for browsers without scrollend (Safari < 16)
      fallbackTimer.current = setTimeout(() => {
        isProgrammatic.current = false;
      }, 2000);
    }
  }, []);

  const scrollToSection = useCallback((id: SectionId, closeMenu?: () => void) => {
    const el = document.getElementById(id);
    if (!el) return;

    isProgrammatic.current = true;
    el.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
    window.history.pushState({ section: id }, "", `/${id}`);
    closeMenu?.();
    releaseLock();
  }, [releaseLock]);

  const scrollToTop = useCallback((closeMenu?: () => void) => {
    isProgrammatic.current = true;
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveSection(null);
    window.history.pushState({ section: null }, "", "/");
    closeMenu?.();
    releaseLock();
  }, [releaseLock]);

  // IntersectionObserver — sync URL on manual scroll
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (isProgrammatic.current) return;
          if (entry.isIntersecting) {
            setActiveSection(id);
            window.history.replaceState({ section: id }, "", `/${id}`);
          }
        },
        { threshold: 0.35 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    // Reset to "/" when hero is visible
    const heroEl = document.getElementById("hero");
    if (heroEl) {
      const heroObs = new IntersectionObserver(
        ([entry]) => {
          if (isProgrammatic.current) return;
          if (entry.isIntersecting) {
            setActiveSection(null);
            window.history.replaceState({ section: null }, "", "/");
          }
        },
        { threshold: 0.5 }
      );
      heroObs.observe(heroEl);
      observers.push(heroObs);
    }

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Handle browser back / forward
  useEffect(() => {
    function onPopState(e: PopStateEvent) {
      const id = e.state?.section as SectionId | null;
      isProgrammatic.current = true;

      if (id) {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setActiveSection(id);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setActiveSection(null);
      }
      releaseLock();
    }

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, [releaseLock]);

  return { activeSection, scrollToSection, scrollToTop };
}

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
  const scrollTarget = useRef<SectionId | null>(null);
  const fallbackTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const releaseLock = useCallback(() => {
    if (fallbackTimer.current) clearTimeout(fallbackTimer.current);

    const supportsScrollEnd = "onscrollend" in window;

    if (supportsScrollEnd) {
      const handler = () => {
        isProgrammatic.current = false;
        scrollTarget.current = null;
        window.removeEventListener("scrollend", handler);
      };
      window.addEventListener("scrollend", handler, { once: true });
      fallbackTimer.current = setTimeout(() => {
        isProgrammatic.current = false;
        scrollTarget.current = null;
        window.removeEventListener("scrollend", handler);
      }, 2500);
    } else {
      fallbackTimer.current = setTimeout(() => {
        isProgrammatic.current = false;
        scrollTarget.current = null;
      }, 2500);
    }
  }, []);

  const scrollToSection = useCallback((id: SectionId, closeMenu?: () => void) => {
    const el = document.getElementById(id);
    if (!el) return;

    // Cancel any in-flight scroll lock first
    if (fallbackTimer.current) clearTimeout(fallbackTimer.current);
    isProgrammatic.current = true;
    scrollTarget.current = id;

    el.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
    window.history.pushState({ section: id }, "", `/${id}`);
    closeMenu?.();
    releaseLock();
  }, [releaseLock]);

  const scrollToTop = useCallback((closeMenu?: () => void) => {
    if (fallbackTimer.current) clearTimeout(fallbackTimer.current);
    isProgrammatic.current = true;
    scrollTarget.current = null;

    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveSection(null);
    window.history.pushState({ section: null }, "", "/");
    closeMenu?.();
    releaseLock();
  }, [releaseLock]);

  // IntersectionObserver — sync URL on manual scroll only
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          // During programmatic scroll, only allow the intended target through
          if (isProgrammatic.current && scrollTarget.current !== id) return;
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
      if (fallbackTimer.current) clearTimeout(fallbackTimer.current);
      isProgrammatic.current = true;
      scrollTarget.current = id;

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

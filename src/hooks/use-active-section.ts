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
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scrollToSection = useCallback((id: SectionId, closeMenu?: () => void) => {
    const el = document.getElementById(id);
    if (!el) return;

    // Block observer from overriding URL during programmatic scroll
    isProgrammatic.current = true;
    if (timer.current) clearTimeout(timer.current);

    el.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
    window.history.pushState({ section: id }, "", `/${id}`);
    closeMenu?.();

    // Re-enable observer after smooth scroll settles (~800ms)
    timer.current = setTimeout(() => {
      isProgrammatic.current = false;
    }, 800);
  }, []);

  const scrollToTop = useCallback((closeMenu?: () => void) => {
    isProgrammatic.current = true;
    if (timer.current) clearTimeout(timer.current);

    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveSection(null);
    window.history.pushState({ section: null }, "", "/");
    closeMenu?.();

    timer.current = setTimeout(() => {
      isProgrammatic.current = false;
    }, 800);
  }, []);

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
      if (timer.current) clearTimeout(timer.current);

      if (id) {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setActiveSection(id);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setActiveSection(null);
      }

      timer.current = setTimeout(() => {
        isProgrammatic.current = false;
      }, 800);
    }

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  return { activeSection, scrollToSection, scrollToTop };
}

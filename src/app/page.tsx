"use client";
import { useEffect } from "react";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Dashboard } from "@/components/dashboard";
import { Skills } from "@/components/skills";
import { Experience } from "@/components/experience";
import { Contact } from "@/components/contact";
import { SECTIONS, type SectionId } from "@/hooks/use-active-section";
import { useScrollContext } from "@/context/scroll-context";

export default function Home() {
  const { pendingSection, clearPending } = useScrollContext();

  // Scroll to section requested by navbar (cross-route navigation)
  useEffect(() => {
    if (!pendingSection) return;
    const el = document.getElementById(pendingSection);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      clearPending();
    }
  }, [pendingSection, clearPending]);

  // On direct URL visit (e.g. /skills), scroll to matching section
  useEffect(() => {
    const path = window.location.pathname.replace("/", "") as SectionId;
    if (SECTIONS.includes(path)) {
      const t = setTimeout(() => {
        document.getElementById(path)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
      return () => clearTimeout(t);
    }
  }, []);

  return (
    <>
      <Hero />
      <Projects />
      <Dashboard />
      <Skills />
      <Experience />
      <Contact />
    </>
  );
}

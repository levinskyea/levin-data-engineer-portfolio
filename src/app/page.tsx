"use client";
import { useEffect } from "react";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { EtlDemo } from "@/components/etl-demo";
import { Dashboard } from "@/components/dashboard";
import { Skills } from "@/components/skills";
import { Experience } from "@/components/experience";
import { Contact } from "@/components/contact";
import { SECTIONS, type SectionId } from "@/hooks/use-active-section";
import { useScrollContext } from "@/context/scroll-context";

export default function Home() {
  const { pendingSection, clearPending } = useScrollContext();

  useEffect(() => {
    if (!pendingSection) return;
    const el = document.getElementById(pendingSection);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      clearPending();
    }
  }, [pendingSection, clearPending]);

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
      <Experience />
      <Skills />
      <Dashboard />
      <EtlDemo />
      <Contact />
    </>
  );
}

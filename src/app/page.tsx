"use client";
import { useEffect } from "react";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Dashboard } from "@/components/dashboard";
import { Skills } from "@/components/skills";
import { Experience } from "@/components/experience";
import { Contact } from "@/components/contact";
import { SECTIONS, type SectionId } from "@/hooks/use-active-section";

export default function Home() {
  // On direct URL visit (e.g. /skills), scroll to the matching section
  useEffect(() => {
    const path = window.location.pathname.replace("/", "") as SectionId;
    if (SECTIONS.includes(path)) {
      // Small delay to let the page render first
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

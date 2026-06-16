import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Dashboard } from "@/components/dashboard";
import { Skills } from "@/components/skills";
import { Experience } from "@/components/experience";
import { Contact } from "@/components/contact";

export default function Home() {
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

"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Download, Github, Linkedin } from "lucide-react";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center">
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "64px 64px"
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Badge variant="secondary" className="mb-6 text-xs tracking-widest uppercase">
            Open to Data Engineering roles
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
        >
          Levin Skye{" "}
          <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Aligway
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-4 text-xl font-medium text-muted-foreground"
        >
          IT Support Engineer → Data Engineer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-8 text-base text-muted-foreground max-w-2xl mx-auto"
        >
          I build data pipelines, monitoring systems, and SQL-powered analytics tools.
          Experienced with PostgreSQL, Oracle, OpenSearch, and Grafana — turning raw operational
          data into actionable insight.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <Button size="lg" onClick={() => scrollTo("projects")}>
            View Projects
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="/resume.pdf" download aria-label="Download resume PDF">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </a>
          </Button>
          <Button size="icon" variant="ghost" asChild>
            <a href="https://github.com/levinskyea" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
              <Github className="h-4 w-4" />
            </a>
          </Button>
          <Button size="icon" variant="ghost" asChild>
            <a href="https://linkedin.com/in/levinskyealigway" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
              <Linkedin className="h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="absolute bottom-8"
      >
        <button onClick={() => scrollTo("projects")} aria-label="Scroll to projects">
          <ArrowDown className="h-5 w-5 animate-bounce text-muted-foreground" />
        </button>
      </motion.div>
    </section>
  );
}

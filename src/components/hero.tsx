"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Download, Github, Linkedin } from "lucide-react";

function YoutubeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center"
    >
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "64px 64px",
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
          <Badge
            variant="secondary"
            className="mb-6 text-xs tracking-widest uppercase"
          >
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
          Aspiring Data Engineer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mb-2 text-sm text-muted-foreground"
        >
          📍 Cebu, Philippines
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-8 text-base text-muted-foreground max-w-2xl mx-auto"
        >
          IT Support Engineer with hands-on experience in SQL, data troubleshooting, reporting, and system integrations.{" "}
          <br />
          Currently building Data Engineering solutions using Python, PostgreSQL, ETL workflows, and cloud technologies.{" "}
          <br />
          📍 Cebu, Philippines
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
            <a
              href="https://github.com/levinskyea"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
            >
              <Github className="h-4 w-4" />
            </a>
          </Button>
          <Button size="icon" variant="ghost" asChild>
            <a
              href="https://linkedin.com/in/levinskyealigway"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </Button>
          <Button size="icon" variant="ghost" asChild>
            <a
              href="https://youtube.com/@levinskyea"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube channel"
            >
              <YoutubeIcon />
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
        <button
          onClick={() => scrollTo("projects")}
          aria-label="Scroll to projects"
        >
          <ArrowDown className="h-5 w-5 animate-bounce text-muted-foreground" />
        </button>
      </motion.div>
    </section>
  );
}

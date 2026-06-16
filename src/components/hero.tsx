"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Download, Github, Linkedin } from "lucide-react";
import { Typewriter } from "@/components/typewriter";

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
      {/* Grid background — reduced opacity */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Blurred glow blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-32 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full opacity-20 blur-[120px] dark:opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.5), transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 right-1/4 h-[300px] w-[300px] rounded-full opacity-10 blur-[100px] dark:opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(34,211,238,0.4), transparent 70%)",
          }}
        />
      </div>

      {/* Radial gradient behind text */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 45%, rgba(59,130,246,0.12), transparent 60%)",
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
          <Typewriter
            text="Levin Skye Aligway"
            speed={80}
            className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent"
          />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-4 text-xl font-medium text-muted-foreground"
        >
          I build data-drive systems and scalable applications.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mb-8 text-sm text-muted-foreground/70"
        >
          📍 Cebu, Philippines
        </motion.p>

        {/* <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-8 text-base text-muted-foreground max-w-2xl mx-auto"
        >
          <br />
          IT Support Engineer with hands-on experience in SQL, data
          troubleshooting, reporting, and system integrations. Currently
          building Data Engineering solutions using Python, PostgreSQL, ETL
          workflows, and cloud technologies.{" "}
        </motion.p> */}

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <Button size="lg" variant="outline" asChild>
            <a
              href="/Levin Skye_Aligway_Resume_v2.pdf"
              download
              aria-label="Download resume PDF"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </a>
          </Button>
          <Button size="lg" onClick={() => scrollTo("projects")}>
            View Projects
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mt-6 flex items-center justify-center gap-3"
        >
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

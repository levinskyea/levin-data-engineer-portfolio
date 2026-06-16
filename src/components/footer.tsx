import { Github, Linkedin, Mail } from "lucide-react";

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-center gap-5">
            <a
              href="mailto:levinskyebenatiro@gmail.com"
              aria-label="Email"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/levinskyea"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com/in/levinskyealigway"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://youtube.com/@levinskyea"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <YoutubeIcon />
            </a>
          </div>

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Levin Skye Aligway. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

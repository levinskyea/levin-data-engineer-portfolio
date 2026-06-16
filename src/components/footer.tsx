export function Footer() {
  return (
    <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
      <p>
        Built with Next.js, Tailwind CSS & shadcn/ui ·{" "}
        <a
          href="https://github.com/levinaligway"
          target="_blank"
          rel="noopener noreferrer"
          className="underline-offset-4 hover:text-foreground hover:underline"
        >
          Source on GitHub
        </a>
      </p>
      <p className="mt-1">© {new Date().getFullYear()} Levin Skye Aligway</p>
    </footer>
  );
}

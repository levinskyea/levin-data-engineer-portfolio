"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label, Textarea } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/fade-in";
import { Send, Mail, Github, Linkedin } from "lucide-react";

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // In production, connect to a form service (Formspree, Resend, etc.)
    setSent(true);
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <FadeIn>
        <h2 className="mb-2 text-3xl font-bold">Get in Touch</h2>
        <p className="mb-12 text-muted-foreground">
          Interested in working together? Send me a message.
        </p>
      </FadeIn>

      <div className="grid gap-10 lg:grid-cols-2">
        <FadeIn delay={0.1}>
          <Card>
            <CardContent className="pt-6">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="mb-4 text-4xl">✅</div>
                  <h3 className="mb-2 text-lg font-semibold">Message sent!</h3>
                  <p className="text-sm text-muted-foreground">
                    Thanks for reaching out. I&apos;ll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" placeholder="Your name" required />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="you@example.com" required />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="What would you like to discuss?"
                      rows={5}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </FadeIn>

        <FadeIn delay={0.2} className="flex flex-col justify-center space-y-6">
          <div>
            <h3 className="mb-4 text-lg font-semibold">Connect with me</h3>
            <div className="space-y-3">
              <a
                href="mailto:levinskyebenatiro@gmail.com"
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4 text-primary" />
                levinskyebenatiro@gmail.com
              </a>
              <a
                href="https://github.com/levinskyea"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github className="h-4 w-4 text-primary" />
                github.com/levinskyea
              </a>
              <a
                href="https://linkedin.com/in/levinskyealigway"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Linkedin className="h-4 w-4 text-primary" />
                linkedin.com/in/levinskyealigway
              </a>
              <a
                href="https://youtube.com/@levinskyea"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <YoutubeIcon />
                youtube.com/@levinskyea
              </a>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-muted/40 p-4 text-sm text-muted-foreground">
            💡 Currently open to <span className="text-foreground font-medium">Data Engineer</span> roles — remote or hybrid.
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

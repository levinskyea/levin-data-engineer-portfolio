import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "@/lib/data";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: `${project.title} — ${project.subtitle}`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Levin Skye Aligway`,
      description: project.description
    }
  };
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <div className="mx-auto max-w-3xl px-6 pb-24 pt-32">
      <Link
        href="/#projects"
        className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to projects
      </Link>

      <h1 className="mb-1 text-4xl font-bold">{project.title}</h1>
      <p className="mb-6 text-lg text-muted-foreground">{project.subtitle}</p>

      <div className="mb-8 flex flex-wrap gap-2">
        {project.tools.map((tool) => (
          <Badge key={tool} variant="secondary">{tool}</Badge>
        ))}
      </div>

      <div className="mb-10">
        <Button variant="outline" size="sm" asChild>
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            View on GitHub
          </a>
        </Button>
      </div>

      <div className="space-y-10">
        <section>
          <h2 className="mb-3 text-xl font-semibold">Overview</h2>
          <p className="leading-relaxed text-muted-foreground">{project.longDescription}</p>
        </section>

        <div className="grid gap-6 sm:grid-cols-2">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">⚠️ Problem</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{project.problem}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">✅ Solution</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{project.solution}</p>
            </CardContent>
          </Card>
        </div>

        <section>
          <h2 className="mb-4 text-xl font-semibold">Data Flow</h2>
          <Card className="bg-muted/30">
            <CardContent className="pt-6">
              <ol className="space-y-3">
                {project.dataFlow.map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                      {i + 1}
                    </span>
                    <span className="font-mono text-sm text-muted-foreground">{step}</span>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold">Tools & Technologies</h2>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-md border border-border bg-muted/50 px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
              >
                {tool}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

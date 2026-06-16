import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/fade-in";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <FadeIn>
        <h2 className="mb-2 text-3xl font-bold">Projects</h2>
        <p className="mb-12 text-muted-foreground">
          Data engineering tools built in production environments.
        </p>
      </FadeIn>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <FadeIn key={project.slug} delay={i * 0.1}>
            <Link href={`/projects/${project.slug}`} className="group block">
              <Card className="h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10 hover:border-primary/30">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <CardDescription className="mt-1">{project.subtitle}</CardDescription>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <Badge key={tool} variant="secondary" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.3} className="mt-8 text-center">
        <Button variant="outline" asChild>
          <a href="https://github.com/levinaligway" target="_blank" rel="noopener noreferrer">
            View all on GitHub
          </a>
        </Button>
      </FadeIn>
    </section>
  );
}

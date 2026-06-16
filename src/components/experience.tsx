import { FadeIn } from "@/components/fade-in";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    role: "IT Support Engineer",
    company: "Kuehne+Nagel",
    period: "2022 – Present",
    highlights: [
      "Built and maintained SALMON — an automated incident management tool using OpenSearch + PostgreSQL, reducing MTTR by ~40%.",
      "Developed SCALLOP for cron-based ETL orchestration with Oracle DB, covering 20+ scheduled jobs with full audit logging.",
      "Authored complex SQL reports (PostgreSQL, Oracle) consumed by operations and management stakeholders.",
      "Managed Grafana dashboards for real-time system health visibility across 50+ monitored services.",
      "Led data troubleshooting sessions for production incidents, performing root-cause analysis via log queries."
    ],
    tags: ["SQL", "PostgreSQL", "Oracle", "OpenSearch", "Grafana", "Python"]
  },
  {
    role: "Systems Support Analyst",
    company: "Previous Company",
    period: "2020 – 2022",
    highlights: [
      "Maintained SQL databases and generated weekly performance reports for 3 production environments.",
      "Automated repetitive data extraction tasks using Python scripts, saving ~6 hours/week.",
      "Participated in incident bridge calls; documented resolution steps in ServiceNow."
    ],
    tags: ["SQL", "Python", "ServiceNow", "Reporting"]
  }
];

export function Experience() {
  return (
    <section id="experience" className="bg-muted/30 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <FadeIn>
          <h2 className="mb-2 text-3xl font-bold">Experience</h2>
          <p className="mb-12 text-muted-foreground">
            Where I've applied data engineering and SQL skills in production.
          </p>
        </FadeIn>

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="relative border-l-2 border-border pl-6">
                <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-primary bg-background" />
                <div className="mb-1 flex flex-wrap items-baseline gap-3">
                  <h3 className="text-lg font-semibold">{exp.role}</h3>
                  <span className="text-muted-foreground">@ {exp.company}</span>
                  <span className="ml-auto text-sm text-muted-foreground">{exp.period}</span>
                </div>
                <ul className="mb-4 space-y-1.5">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="text-sm text-muted-foreground before:mr-2 before:content-['→']">
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

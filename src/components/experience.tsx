import { FadeIn } from "@/components/fade-in";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    role: "IT Support Engineer",
    company: "Kuehne + Nagel Global Services Inc.",
    period: "September 2023 – Present",
    highlights: [
      "Investigated and resolved data-related incidents using PostgreSQL and Oracle SQL, ensuring data accuracy and integrity across systems (e.g., SALOG, BPA).",
      "Generated custom reports and data extracts based on user requirements, supporting operational and business decision-making.",
      "Performed root cause analysis on data discrepancies and pipeline issues, collaborating with cross-functional teams to improve data reliability and system performance."
    ],
    tags: ["PostgreSQL", "Oracle SQL", "Data Analysis", "Incident Management", "Reporting"]
  },
  {
    role: "Junior JavaScript Engineer",
    company: "CoInspect Philippines Inc.",
    period: "July 2022 – July 2023",
    highlights: [
      "Developed and integrated data-driven features using JavaScript, TypeScript, ReactJS, and Next.js, working with structured data from backend services.",
      "Utilized SQL (PostgreSQL/Oracle) for querying and managing application data, supporting backend functionality and optimization.",
      "Collaborated with Agile teams to design and implement data flow and API integrations, ensuring efficient data exchange between systems."
    ],
    tags: ["JavaScript", "TypeScript", "React", "Next.js", "PostgreSQL", "Oracle", "REST APIs"]
  },
  {
    role: "Software QA Specialist Intern",
    company: "CoInspect Philippines Inc.",
    period: "July 2021 – December 2021",
    highlights: [
      "Conducted data validation and API testing using Postman and SQL queries to ensure consistency and accuracy of application data.",
      "Identified and documented defects related to data processing and integration, improving data quality and system stability.",
      "Supported testing of workflows involving data pipelines and system integrations, ensuring outputs aligned with business requirements."
    ],
    tags: ["SQL", "Postman", "API Testing", "Data Validation", "QA"]
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
                <div className="mb-1 flex flex-col gap-0.5 sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-3">
                  <h3 className="text-lg font-semibold">{exp.role}</h3>
                  <span className="text-muted-foreground">@ {exp.company}</span>
                  <span className="text-sm text-muted-foreground sm:ml-auto">{exp.period}</span>
                </div>
                <ul className="mb-4 space-y-1.5">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="text-sm text-muted-foreground list-disc ml-4">
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

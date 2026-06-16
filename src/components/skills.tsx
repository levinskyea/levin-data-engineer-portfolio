import { FadeIn } from "@/components/fade-in";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skillGroups = [
  {
    title: "Data & Databases",
    icon: "🗄️",
    skills: ["PostgreSQL", "Oracle SQL", "Data Querying", "Data Validation", "Data Analysis"]
  },
  {
    title: "Data Processing & Integration",
    icon: "🔄",
    skills: ["API Integration", "Data Transformation", "Data Flow Design"]
  },
  {
    title: "Reporting & Monitoring",
    icon: "📊",
    skills: ["Report Generation", "OpenSearch", "Grafana"]
  },
  {
    title: "Programming & Scripting",
    icon: "💻",
    skills: ["Python", "JavaScript", "TypeScript", "Java", "Flask"]
  },
  {
    title: "DevOps & Version Control",
    icon: "⚙️",
    skills: ["Git", "GitHub", "GitLab", "GitHub Actions", "Ansible Tower"]
  },
  {
    title: "Tools & Collaboration",
    icon: "🛠️",
    skills: ["Jira", "Confluence (KB)", "MS Teams", "MS Office", "Agile", "Scrum"]
  },
  {
    title: "QA & Testing",
    icon: "🧪",
    skills: ["Postman", "TestRail", "API Testing", "Selenium (Web)", "Appium (Mobile)"]
  },
  {
    title: "IT Support & Service Management",
    icon: "🎧",
    skills: ["Incident Management", "Root Cause Analysis", "Troubleshooting", "Customer Service", "Attention to Detail"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <FadeIn>
        <h2 className="mb-2 text-3xl font-bold">Skills</h2>
        <p className="mb-12 text-muted-foreground">
          Technologies I use to build and maintain data systems.
        </p>
      </FadeIn>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, i) => (
          <FadeIn key={group.title} delay={i * 0.08}>
            <Card className="h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-md hover:border-primary/30">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base">
                  <span>{group.icon}</span>
                  {group.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-md border border-border bg-muted/50 px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

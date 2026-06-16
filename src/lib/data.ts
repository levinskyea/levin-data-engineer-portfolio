export const projects = [
  {
    slug: "salmon",
    title: "SALMON",
    subtitle: "Monitoring & Incident Management Tool",
    description:
      "Centralized monitoring platform that aggregates system alerts from OpenSearch and Grafana, auto-classifies incidents, and generates SQL-powered reports for stakeholder review.",
    longDescription:
      "SALMON (System Alert & Log Monitoring and Operations Nexus) was built to replace manual email-based incident tracking. It pulls alert data from OpenSearch indices, correlates events using PostgreSQL, and surfaces dashboards in Grafana for on-call engineers.",
    problem:
      "Incidents were tracked manually via email threads, causing delayed responses, missed SLAs, and no historical data for trend analysis.",
    solution:
      "Built an automated pipeline that ingests OpenSearch alerts into PostgreSQL, applies classification rules, and exposes a Grafana dashboard with drill-down SQL reports.",
    dataFlow: [
      "OpenSearch → Alert ingestion (cron every 5 min)",
      "PostgreSQL → Classification & deduplication",
      "Grafana → Real-time dashboard",
      "Scheduled SQL report → Email distribution"
    ],
    tools: ["PostgreSQL", "OpenSearch", "Grafana", "Python", "Cron", "SQL"],
    github: "https://github.com/levinaligway"
  },
  {
    slug: "scallop",
    title: "SCALLOP",
    subtitle: "System Management + Cron Automation",
    description:
      "Automated system health checks and scheduled data pipeline orchestration using cron jobs, with Oracle DB integration and exception reporting.",
    longDescription:
      "SCALLOP (Scheduled Cron Automation for Log & Lifecycle Operations Platform) manages recurring data tasks — from Oracle ETL jobs to log rotation — and surfaces exceptions in a centralized ops table for DBA review.",
    problem:
      "Ad-hoc scripts ran inconsistently across servers, with no centralized logging or failure alerting. DBAs had no visibility into job success/failure rates.",
    solution:
      "Standardized all cron-based jobs under SCALLOP's orchestration layer. Each job logs start/end/status to an Oracle audit table. Failures trigger immediate alerts.",
    dataFlow: [
      "Cron trigger → Job executor",
      "Oracle DB → ETL extraction",
      "Transformation → Staging tables",
      "Audit log → Exception report",
      "Alerting → On-call notification"
    ],
    tools: ["Oracle DB", "SQL", "Cron", "Python", "Shell Script", "PL/SQL"],
    github: "https://github.com/levinaligway"
  }
];

export type Project = (typeof projects)[0];

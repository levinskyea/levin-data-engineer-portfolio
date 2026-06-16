export const projects = [
  {
    slug: "salmon",
    title: "SALMON",
    subtitle: "SALOG Monitoring & Incident Management Tool",
    description:
      "Internal tool supporting incident management and system monitoring, enabling efficient tracking and handling of data-related issues in SALOG using OpenSearch and Grafana.",
    longDescription:
      "SALMON (SALOG Monitoring & Incident Management Tool) was developed to support incident management and system monitoring for SALOG. It leverages OpenSearch and Grafana to analyze logs and visualize system and data metrics, improving visibility into system behavior and anomalies. The tool enables fast identification and investigation of data inconsistencies and system irregularities, accelerating incident resolution and improving overall data reliability.",
    problem:
      "Data-related incidents and system irregularities in SALOG were difficult to track, with limited visibility into logs and metrics, leading to slow resolution times and recurring data inconsistencies.",
    solution:
      "Developed an internal monitoring tool using OpenSearch for log analysis and Grafana for metric visualization, enabling proactive detection of anomalies and faster incident resolution.",
    dataFlow: [
      "SALOG system → Log ingestion into OpenSearch",
      "OpenSearch → Log analysis & anomaly detection",
      "Grafana → System & data metric dashboards",
      "Incident identified → Investigation & resolution",
      "Resolution → Data reliability improvement"
    ],
    tools: ["Python 3.10+", "Flask", "HTML + Jinja2", "CSS3", "JavaScript (ES2020+)", "Bootstrap 5.3", "psycopg2", "paramiko", "sshtunnel", "Git", "GitHub", "RotatingFileHandler", "Chart.js 4.4", "Aurora PostgreSQL (AWS RDS)"],
    github: "https://github.com/levinskyea"
  },
  {
    slug: "scallop",
    title: "SCALLOP",
    subtitle: "System Control & Administration for Linux Lifecycle Operations",
    description:
      "Centralized platform for server, application, and system performance monitoring with cron-based job scheduling for automated report generation and recurring data processing tasks.",
    longDescription:
      "SCALLOP (System Control & Administration for Linux Lifecycle Operations) is a centralized platform built to improve system visibility and operational control across servers and applications. It implements cron-based job scheduling for automated report generation and recurring tasks, supporting data processing and operational efficiency. SCALLOP also enables system and data management capabilities, allowing users to monitor processes, configure resources, and automate workflows.",
    problem:
      "System and application monitoring was fragmented across servers with no centralized control, and recurring operational tasks were handled manually, leading to inefficiencies and limited visibility into system performance.",
    solution:
      "Built a centralized monitoring and automation platform that consolidates system visibility, implements cron-based scheduling for recurring tasks, and provides tools for process monitoring, resource configuration, and workflow automation.",
    dataFlow: [
      "Cron scheduler → Trigger automated jobs",
      "System & application → Performance data collection",
      "Data processing → Report generation",
      "Centralized platform → Process & resource monitoring",
      "Automated workflows → Operational efficiency"
    ],
    tools: ["Python 3.10+", "Flask", "APScheduler", "psycopg2", "Paramiko", "Flask-WTF / WTForms", "Aurora PostgreSQL (AWS RDS)", "SSH tunneling", "Bootstrap 5.3", "Vanilla JavaScript"],
    github: "https://github.com/levinskyea"
  }
];

export type Project = (typeof projects)[0];

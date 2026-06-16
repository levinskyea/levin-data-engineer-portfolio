"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { FadeIn } from "@/components/fade-in";
import { ArrowRight, Play, RotateCcw } from "lucide-react";

const RAW_DATA = [
  { id: 1, system: "PROD-DB-01", event: "connection_timeout", ts: "2024-06-14T08:12:33Z", severity: null },
  { id: 2, system: "PROD-DB-02", event: "query_slow", ts: "2024-06-14T08:14:01Z", severity: "medium" },
  { id: 3, system: "APP-SRV-01", event: "heap_high", ts: "2024-06-14T08:15:55Z", severity: "HIGH" },
  { id: 4, system: "PROD-DB-01", event: "connection_timeout", ts: "2024-06-14T08:16:12Z", severity: null },
  { id: 5, system: "ETL-JOB-03", event: "job_failed", ts: "2024-06-14T08:20:44Z", severity: "CRITICAL" }
];

function transform(raw: typeof RAW_DATA) {
  const seen = new Set<string>();
  return raw
    .map((r) => ({
      ...r,
      severity: (r.severity ?? "low").toLowerCase() as string,
      ts: new Date(r.ts).toLocaleString("en-GB", { timeZone: "UTC" }),
      dedupeKey: `${r.system}::${r.event}`
    }))
    .filter((r) => {
      if (seen.has(r.dedupeKey)) return false;
      seen.add(r.dedupeKey);
      return true;
    });
}

function load(transformed: ReturnType<typeof transform>) {
  return transformed.map(({ id, system, event, ts, severity }) => ({
    incident_id: `INC-20240614-${String(id).padStart(3, "0")}`,
    source_system: system,
    event_type: event,
    severity,
    detected_at: ts,
    status: "open"
  }));
}

type Stage = "idle" | "extracting" | "extracted" | "transforming" | "transformed" | "loading" | "loaded";

const severityColor: Record<string, string> = {
  critical: "text-red-500",
  high: "text-orange-500",
  medium: "text-yellow-500",
  low: "text-green-500"
};

function delay(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

export function EtlDemo() {
  const [stage, setStage] = useState<Stage>("idle");
  const [transformed, setTransformed] = useState<ReturnType<typeof transform>>([]);
  const [loaded, setLoaded] = useState<ReturnType<typeof load>>([]);

  async function runPipeline() {
    setStage("extracting");
    await delay(900);
    setStage("extracted");
    await delay(300);
    setStage("transforming");
    await delay(1000);
    const t = transform(RAW_DATA);
    setTransformed(t);
    setStage("transformed");
    await delay(300);
    setStage("loading");
    await delay(800);
    setLoaded(load(t));
    setStage("loaded");
  }

  function reset() {
    setStage("idle");
    setTransformed([]);
    setLoaded([]);
  }

  const isRunning = ["extracting", "transforming", "loading"].includes(stage);

  return (
    <section id="etl-demo" className="mx-auto max-w-6xl px-6 py-24">
      <FadeIn>
        <div className="mb-2 flex items-center gap-3">
          <h2 className="text-3xl font-bold">ETL Pipeline Demo</h2>
          <Badge variant="secondary">Interactive</Badge>
        </div>
        <p className="mb-10 text-muted-foreground">
          A mock Extract → Transform → Load pipeline. Click Run to simulate ingesting raw
          system events, normalising them, deduplicating, and loading into a target table.
        </p>
      </FadeIn>

      <FadeIn delay={0.1}>
        {/* Pipeline stages indicator */}
        <div className="mb-10 flex flex-wrap items-center gap-2 text-sm font-medium">
          {(["Extract", "Transform", "Load"] as const).map((s, i) => {
            const stageMap = {
              Extract: ["extracting", "extracted", "transforming", "transformed", "loading", "loaded"],
              Transform: ["transforming", "transformed", "loading", "loaded"],
              Load: ["loading", "loaded"]
            };
            const active = stageMap[s].includes(stage);
            return (
              <React.Fragment key={s}>
                <span className={`rounded-full px-3 py-1 text-xs transition-colors ${active ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                  {s}
                </span>
                {i < 2 && <ArrowRight className="h-4 w-4 text-muted-foreground" />}
              </React.Fragment>
            );
          })}
          <div className="ml-auto flex gap-2">
            <Button onClick={runPipeline} disabled={isRunning || stage === "loaded"} size="sm">
              <Play className="mr-2 h-3.5 w-3.5" />
              {isRunning ? "Running…" : "Run Pipeline"}
            </Button>
            <Button onClick={reset} variant="outline" size="sm" disabled={isRunning}>
              <RotateCcw className="mr-2 h-3.5 w-3.5" />
              Reset
            </Button>
          </div>
        </div>

        <div className="space-y-8">
          {/* Extract */}
          <Card className={stage !== "idle" ? "border-blue-500/30" : ""}>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-base">
                <span className="h-2 w-2 rounded-full bg-blue-500" />
                1. Extract — Raw Source Data (OpenSearch / Oracle)
              </CardTitle>
              <CardDescription>{RAW_DATA.length} raw events ingested</CardDescription>
            </CardHeader>
            <CardContent>
              {stage === "idle" ? (
                <p className="text-sm text-muted-foreground">Pipeline not started.</p>
              ) : stage === "extracting" ? (
                <div className="space-y-2">{Array.from({ length: 5 }).map((_, i) => <Skeleton key={i} className="h-8 w-full" />)}</div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-border text-left text-muted-foreground">
                        {["id", "system", "event", "ts", "severity"].map((h) => (
                          <th key={h} className="pb-2 pr-4 font-medium">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {RAW_DATA.map((r) => (
                        <tr key={r.id} className="border-b border-border/40">
                          <td className="py-1.5 pr-4 font-mono">{r.id}</td>
                          <td className="py-1.5 pr-4">{r.system}</td>
                          <td className="py-1.5 pr-4">{r.event}</td>
                          <td className="py-1.5 pr-4 font-mono">{r.ts}</td>
                          <td className={`py-1.5 pr-4 ${r.severity === null ? "text-muted-foreground italic" : ""}`}>
                            {r.severity ?? "null"}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Transform */}
          {["transforming", "transformed", "loading", "loaded"].includes(stage) && (
            <Card className="border-yellow-500/30">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base">
                  <span className="h-2 w-2 rounded-full bg-yellow-500" />
                  2. Transform — Normalise, Deduplicate, Enrich
                </CardTitle>
                <CardDescription>
                  Lowercased severity · null → &quot;low&quot; · deduplicated by system+event
                </CardDescription>
              </CardHeader>
              <CardContent>
                {stage === "transforming" ? (
                  <div className="space-y-2">{Array.from({ length: 4 }).map((_, i) => <Skeleton key={i} className="h-8 w-full" />)}</div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="border-b border-border text-left text-muted-foreground">
                          {["id", "system", "event", "severity", "ts"].map((h) => (
                            <th key={h} className="pb-2 pr-4 font-medium">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {transformed.map((r) => (
                          <tr key={r.id} className="border-b border-border/40">
                            <td className="py-1.5 pr-4 font-mono">{r.id}</td>
                            <td className="py-1.5 pr-4">{r.system}</td>
                            <td className="py-1.5 pr-4">{r.event}</td>
                            <td className={`py-1.5 pr-4 font-semibold ${severityColor[r.severity] ?? ""}`}>{r.severity}</td>
                            <td className="py-1.5 pr-4 font-mono">{r.ts}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <p className="mt-2 text-xs text-muted-foreground">
                      ✂️ Deduplicated: {RAW_DATA.length - transformed.length} duplicate(s) removed
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Load */}
          {["loading", "loaded"].includes(stage) && (
            <Card className="border-green-500/30">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base">
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  3. Load — Target Table (PostgreSQL: incidents)
                </CardTitle>
                <CardDescription>
                  Final rows inserted into the <code className="font-mono text-xs">incidents</code> table
                </CardDescription>
              </CardHeader>
              <CardContent>
                {stage === "loading" ? (
                  <div className="space-y-2">{Array.from({ length: 4 }).map((_, i) => <Skeleton key={i} className="h-8 w-full" />)}</div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="border-b border-border text-left text-muted-foreground">
                          {["incident_id", "source_system", "event_type", "severity", "detected_at", "status"].map((h) => (
                            <th key={h} className="pb-2 pr-4 font-medium">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {loaded.map((r) => (
                          <tr key={r.incident_id} className="border-b border-border/40">
                            <td className="py-1.5 pr-4 font-mono text-primary">{r.incident_id}</td>
                            <td className="py-1.5 pr-4">{r.source_system}</td>
                            <td className="py-1.5 pr-4">{r.event_type}</td>
                            <td className={`py-1.5 pr-4 font-semibold ${severityColor[r.severity] ?? ""}`}>{r.severity}</td>
                            <td className="py-1.5 pr-4 font-mono">{r.detected_at}</td>
                            <td className="py-1.5 pr-4 text-green-500">{r.status}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <p className="mt-3 rounded-md bg-green-500/10 px-3 py-2 text-xs font-medium text-green-500">
                      ✅ Pipeline complete — {loaded.length} rows loaded into PostgreSQL
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </FadeIn>
    </section>
  );
}

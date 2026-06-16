"use client";
import { useState, useEffect } from "react";
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Legend
} from "recharts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/fade-in";

const activityData = [
  { time: "00:00", events: 12, alerts: 2 },
  { time: "04:00", events: 8, alerts: 1 },
  { time: "08:00", events: 45, alerts: 5 },
  { time: "10:00", events: 89, alerts: 8 },
  { time: "12:00", events: 72, alerts: 6 },
  { time: "14:00", events: 95, alerts: 9 },
  { time: "16:00", events: 110, alerts: 11 },
  { time: "18:00", events: 63, alerts: 4 },
  { time: "20:00", events: 38, alerts: 3 },
  { time: "23:59", events: 21, alerts: 2 }
];

const incidentData = [
  { month: "Jan", critical: 4, high: 12, medium: 28, low: 45 },
  { month: "Feb", critical: 2, high: 9, medium: 22, low: 38 },
  { month: "Mar", critical: 6, high: 15, medium: 31, low: 52 },
  { month: "Apr", critical: 1, high: 7, medium: 19, low: 41 },
  { month: "May", critical: 3, high: 11, medium: 25, low: 36 },
  { month: "Jun", critical: 2, high: 8, medium: 18, low: 30 }
];

const tableData = [
  { id: "INC-0042", system: "SALMON", severity: "High", status: "Resolved", duration: "14m", date: "2024-06-12" },
  { id: "INC-0041", system: "SCALLOP", severity: "Medium", status: "Resolved", duration: "32m", date: "2024-06-11" },
  { id: "INC-0040", system: "DB-PROD", severity: "Critical", status: "Resolved", duration: "8m", date: "2024-06-10" },
  { id: "INC-0039", system: "SALMON", severity: "Low", status: "Closed", duration: "2h", date: "2024-06-09" },
  { id: "INC-0038", system: "ETL-JOB", severity: "High", status: "Resolved", duration: "22m", date: "2024-06-08" }
];

const severityColor: Record<string, string> = {
  Critical: "bg-red-500/10 text-red-500 border-red-500/20",
  High: "bg-orange-500/10 text-orange-500 border-orange-500/20",
  Medium: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
  Low: "bg-green-500/10 text-green-500 border-green-500/20"
};

function ChartSkeleton() {
  return (
    <div className="space-y-3">
      <Skeleton className="h-4 w-32" />
      <Skeleton className="h-64 w-full" />
    </div>
  );
}

export function Dashboard() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="dashboard" className="bg-muted/30 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <h2 className="mb-2 text-3xl font-bold">Live Dashboard</h2>
          <p className="mb-12 text-muted-foreground">
            Sample monitoring data — the kind I work with daily in SALMON & SCALLOP.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <Tabs defaultValue="activity">
            <TabsList className="mb-6 w-full sm:w-auto">
              <TabsTrigger value="activity" className="flex-1 sm:flex-none">System Activity</TabsTrigger>
              <TabsTrigger value="incidents" className="flex-1 sm:flex-none">Incident Counts</TabsTrigger>
              <TabsTrigger value="table" className="flex-1 sm:flex-none">Incident Log</TabsTrigger>
            </TabsList>

            <TabsContent value="activity">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">System Events vs Alerts — 24h</CardTitle>
                  <CardDescription>Event volume and alert rate throughout the day</CardDescription>
                </CardHeader>
                <CardContent>
                  {!loaded ? (
                    <ChartSkeleton />
                  ) : (
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={activityData}>
                        <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                        <XAxis dataKey="time" className="text-xs" tick={{ fill: "currentColor" }} />
                        <YAxis className="text-xs" tick={{ fill: "currentColor" }} />
                        <Tooltip
                          contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8 }}
                        />
                        <Legend />
                        <Line type="monotone" dataKey="events" stroke="#3b82f6" strokeWidth={2} dot={false} name="Events" />
                        <Line type="monotone" dataKey="alerts" stroke="#f97316" strokeWidth={2} dot={false} name="Alerts" />
                      </LineChart>
                    </ResponsiveContainer>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="incidents">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Incident Counts by Severity — Last 6 months</CardTitle>
                  <CardDescription>Monthly breakdown of incidents classified by priority</CardDescription>
                </CardHeader>
                <CardContent>
                  {!loaded ? (
                    <ChartSkeleton />
                  ) : (
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={incidentData}>
                        <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                        <XAxis dataKey="month" tick={{ fill: "currentColor" }} className="text-xs" />
                        <YAxis tick={{ fill: "currentColor" }} className="text-xs" />
                        <Tooltip
                          contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8 }}
                        />
                        <Legend />
                        <Bar dataKey="critical" fill="#ef4444" name="Critical" radius={[2, 2, 0, 0]} />
                        <Bar dataKey="high" fill="#f97316" name="High" radius={[2, 2, 0, 0]} />
                        <Bar dataKey="medium" fill="#eab308" name="Medium" radius={[2, 2, 0, 0]} />
                        <Bar dataKey="low" fill="#22c55e" name="Low" radius={[2, 2, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="table">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Recent Incident Log</CardTitle>
                  <CardDescription>Latest resolved incidents from the SALMON system</CardDescription>
                </CardHeader>
                <CardContent>
                  {!loaded ? (
                    <div className="space-y-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Skeleton key={i} className="h-10 w-full" />
                      ))}
                    </div>
                  ) : (
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-border text-left text-muted-foreground">
                            <th className="pb-3 font-medium">ID</th>
                            <th className="pb-3 font-medium">System</th>
                            <th className="pb-3 font-medium">Severity</th>
                            <th className="pb-3 font-medium">Status</th>
                            <th className="pb-3 font-medium">Duration</th>
                            <th className="pb-3 font-medium">Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          {tableData.map((row) => (
                            <tr key={row.id} className="border-b border-border/50 transition-colors hover:bg-muted/40">
                              <td className="py-3 font-mono text-xs text-muted-foreground">{row.id}</td>
                              <td className="py-3 font-medium">{row.system}</td>
                              <td className="py-3">
                                <Badge className={`border text-xs ${severityColor[row.severity]}`}>
                                  {row.severity}
                                </Badge>
                              </td>
                              <td className="py-3 text-muted-foreground">{row.status}</td>
                              <td className="py-3 font-mono text-xs">{row.duration}</td>
                              <td className="py-3 text-muted-foreground">{row.date}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </FadeIn>
      </div>
    </section>
  );
}

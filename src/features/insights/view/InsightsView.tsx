"use client"

import { Brain, AlertTriangle, TrendingUp, Clock, Zap } from "lucide-react"
import { Badge } from "@/shared/components/ui/badge"
import { useInsightsViewModel } from "@/features/insights/viewmodel/useInsightsViewModel"
import { DashboardCard } from "@/shared/components/dashboard/DashboardCard"
import { PageHeader } from "@/shared/components/dashboard/PageHeader"
import { SkeletonCard } from "@/shared/components/dashboard/SkeletonCard"
import { SkeletonHeader } from "@/shared/components/dashboard/SkeletonHeader"

export function InsightsSkeleton() {
  return (
    <div className="space-y-6">
      <SkeletonHeader />
      <div className="grid gap-4 md:grid-cols-4">
        <SkeletonCard hasIcon={false} />
        <SkeletonCard hasIcon={false} />
        <SkeletonCard hasIcon={false} />
        <SkeletonCard hasIcon={false} />
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <SkeletonCard className="lg:col-span-2" rows={4} />
        <SkeletonCard rows={3} />
        <SkeletonCard rows={3} />
      </div>
    </div>
  )
}

export function InsightsView({ initialData }: { initialData?: any }) {
  const { data, isLoading } = useInsightsViewModel();

  if (isLoading && !data && !initialData) {
    return <InsightsSkeleton />;
  }

  const activeData = data || initialData;
  if (!activeData) return null;

  const { patterns, habitLoops, stressSignals, productivityStats } = activeData;

  const getPatternIcon = (type: string) => {
    switch (type) {
      case "warning": return <AlertTriangle className="h-4 w-4 text-amber-500" />;
      case "positive": return <TrendingUp className="h-4 w-4 text-primary" />;
      default: return <Zap className="h-4 w-4 text-muted-foreground" />;
    }
  };

  return (
    <div className="space-y-6">
      <PageHeader 
        title="Cognitive Insights" 
        description="Understand your behavioral patterns and optimize performance."
      />

      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-4">
        {productivityStats.map((stat: any) => (
          <DashboardCard key={stat.label} title={stat.label}>
             <div className="flex items-baseline gap-2">
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <span className="text-sm font-medium text-primary">{stat.change}</span>
              </div>
          </DashboardCard>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Detected Patterns */}
        <DashboardCard 
          title="Detected Patterns" 
          icon={Brain}
          description="High-level behavioral observations"
          className="lg:col-span-2"
        >
          <div className="space-y-4">
            {patterns.map((pattern: any, index: number) => (
              <div key={index} className="rounded-md border border-border bg-background p-4 transition-colors hover:bg-secondary/5">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    {getPatternIcon(pattern.type)}
                    <h4 className="font-semibold text-foreground">{pattern.title}</h4>
                  </div>
                  <Badge variant="secondary" className="rounded-md text-xs">
                    {pattern.category}
                  </Badge>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{pattern.description}</p>
                <div className="mt-3 rounded-md bg-secondary/50 p-3">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">Suggested Action:</span> {pattern.action}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </DashboardCard>

        {/* Habit Loops */}
        <DashboardCard 
          title="Habit Loops" 
          icon={Clock}
          description="Your recursive behavioral cycles"
        >
          <div className="space-y-3">
            {habitLoops.map((loop: any) => (
              <div key={loop.habit} className="flex items-center justify-between rounded-md border border-border bg-background p-3">
                <div>
                  <p className="font-medium text-foreground">{loop.habit}</p>
                  <p className="text-sm text-muted-foreground">Trigger: {loop.trigger}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-primary">{loop.streak} days</p>
                  <Badge 
                    variant="secondary" 
                    className={`rounded-md text-xs ${loop.status === "active" ? "bg-primary/10 text-primary" : ""}`}
                  >
                    {loop.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </DashboardCard>

        {/* Stress Signals */}
        <DashboardCard 
          title="Stress Signals" 
          icon={AlertTriangle}
          description="Psychosomatic and behavioral indicators"
        >
          <div className="space-y-3">
            {stressSignals.map((signal: any) => (
              <div key={signal.signal} className="flex items-center justify-between rounded-md border border-border bg-background p-3">
                <div>
                  <p className="font-medium text-foreground">{signal.signal}</p>
                  <p className="text-sm text-muted-foreground">{signal.frequency}</p>
                </div>
                <Badge 
                  variant="secondary" 
                  className={`rounded-md text-xs ${
                    signal.severity === "high" ? "bg-red-500/10 text-red-500 border-red-500/20" : 
                    signal.severity === "medium" ? "bg-amber-500/10 text-amber-500 border-amber-500/20" : 
                    "bg-secondary text-muted-foreground"
                  }`}
                >
                  {signal.severity}
                </Badge>
              </div>
            ))}
            <div className="rounded-md bg-secondary/50 p-3 mt-4">
              <p className="text-sm text-muted-foreground">
                Overall stress level is <span className="font-semibold text-foreground">moderate</span>. Consider implementing more recovery practices.
              </p>
            </div>
          </div>
        </DashboardCard>
      </div>
    </div>
  )
}

"use client"

import { Target, Brain, Sparkles, ListChecks } from "lucide-react"
import { useDashboardViewModel } from "@/features/dashboard/viewmodel/useDashboardViewModel"
import { DashboardCard } from "@/shared/components/dashboard/DashboardCard"
import { PageHeader } from "@/shared/components/dashboard/PageHeader"
import { ProgressBar } from "@/shared/components/dashboard/ProgressBar"
import { SkeletonCard } from "@/shared/components/dashboard/SkeletonCard"
import { SkeletonHeader } from "@/shared/components/dashboard/SkeletonHeader"

export function DashboardSkeleton() {
  return (
    <div className="space-y-6">
      <SkeletonHeader />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <SkeletonCard className="h-[200px]" rows={1} />
        <SkeletonCard className="h-[200px]" rows={2} />
        <SkeletonCard className="h-[200px]" rows={2} />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <SkeletonCard className="h-[300px]" rows={4} />
        <SkeletonCard className="h-[300px]" rows={4} />
      </div>
    </div>
  )
}

export function DashboardView({ initialData }: { initialData?: any }) {
  const { talents, insights, identityAlignment, dailyFocus, identityName, isLoading } = useDashboardViewModel(initialData);

  if (isLoading && talents.length === 0) {
    return <DashboardSkeleton />;
  }

  return (
    <div className="space-y-6">
      <PageHeader 
        title={`Welcome back, Theo`} 
        description="Your cognitive growth system is active."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <DashboardCard 
          title="Identity Alignment" 
          icon={Target}
          description={`${identityAlignment}% aligned with ${identityName}`}
        >
          <div className="space-y-4">
            <ProgressBar value={identityAlignment} />
            <div className="rounded-md bg-secondary/50 p-3">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Recommendation:</span> Focus on discipline habits today.
              </p>
            </div>
          </div>
        </DashboardCard>

        {insights.length > 0 && (
          <DashboardCard 
            title={insights[0].title} 
            icon={Brain}
            description="AI Pattern Detection"
          >
            <div className="space-y-4">
              <div className="rounded-md bg-secondary/50 p-3">
                <p className="text-sm font-semibold text-foreground">Pattern detected</p>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  {insights[0].description}
                </p>
              </div>
              <div className="rounded-md border border-primary/20 bg-primary/5 p-3">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Recommendation:</span> {insights[0].recommendation}
                </p>
              </div>
            </div>
          </DashboardCard>
        )}

        <DashboardCard 
          title="Today's Focus" 
          icon={ListChecks}
          description="High-priority cognitive tasks"
        >
          <ul className="space-y-3">
            {dailyFocus.map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                  {index + 1}
                </span>
                <span className="text-sm text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </DashboardCard>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Sparkles className="h-5 w-5 text-primary" />
          <h2 className="text-lg font-bold text-foreground">Talent Signals</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {talents.map((talent) => (
            <DashboardCard 
              key={talent.name} 
              title={talent.name} 
              className="py-2"
            >
              <ProgressBar 
                value={talent.confidence * 100} 
                showValue 
                label="Confidence Score" 
              />
            </DashboardCard>
          ))}
        </div>
      </div>
    </div>
  )
}

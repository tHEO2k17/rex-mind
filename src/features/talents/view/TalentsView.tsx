"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card"
import { Button } from "@/shared/components/ui/button"
import { Badge } from "@/shared/components/ui/badge"
import { Sparkles, TrendingUp, BookOpen, ArrowRight } from "lucide-react"
import { useTalentsViewModel } from "@/features/talents/viewmodel/useTalentsViewModel"
import { DetailedTalent } from "@/features/talents/model/types"
import { SkeletonCard } from "@/shared/components/dashboard/SkeletonCard"
import { SkeletonHeader } from "@/shared/components/dashboard/SkeletonHeader"

export function TalentsSkeleton() {
  return (
    <div className="space-y-6">
      <SkeletonHeader />
      <div className="grid gap-4 md:grid-cols-3">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <SkeletonCard className="h-64" rows={3} />
        <SkeletonCard className="h-64" rows={3} />
        <SkeletonCard className="h-64" rows={3} />
        <SkeletonCard className="h-64" rows={3} />
      </div>
    </div>
  )
}

function getStatusColor(status: string) {
  switch (status) {
    case "high":
      return "bg-primary/10 text-primary"
    case "medium":
      return "bg-amber-100 text-amber-700"
    case "developing":
      return "bg-secondary text-muted-foreground"
    default:
      return "bg-secondary text-muted-foreground"
  }
}

export function TalentsView({ initialData }: { initialData?: any }) {
  const { talents, isLoading } = useTalentsViewModel();

  if (isLoading && talents.length === 0 && !initialData) {
    return <TalentsSkeleton />;
  }

  const activeData = talents.length > 0 ? talents : (initialData || []);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-1">
        <h1 className="text-2xl font-bold text-foreground">Talent Discovery</h1>
        <p className="text-muted-foreground">AI-analyzed strengths and abilities with development recommendations.</p>
      </div>

      {/* Summary Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="border border-border shadow-sm">
          <CardContent className="pt-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary">
                <Sparkles className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Talents Identified</p>
                <p className="text-2xl font-bold text-foreground">{activeData.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border border-border shadow-sm">
          <CardContent className="pt-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary">
                <TrendingUp className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">High Confidence</p>
                <p className="text-2xl font-bold text-foreground">{activeData.filter((t: DetailedTalent) => t.status === "high").length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border border-border shadow-sm">
          <CardContent className="pt-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary">
                <BookOpen className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Development Paths</p>
                <p className="text-2xl font-bold text-foreground">{activeData.reduce((acc: number, t: DetailedTalent) => acc + t.developmentPath.length, 0)}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Talents Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        {activeData.map((talent: DetailedTalent) => (
          <Card key={talent.name} className="border border-border shadow-sm">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-semibold">{talent.name}</CardTitle>
                <Badge variant="secondary" className={`rounded-md ${getStatusColor(talent.status)}`}>
                  {talent.confidence}% confidence
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Confidence Bar */}
              <div className="space-y-2">
                <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
                  <div
                    className="h-full rounded-full bg-primary transition-all duration-500"
                    style={{ width: `${talent.confidence}%` }}
                  />
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground">{talent.description}</p>

              {/* Development Path */}
              <div className="rounded-md bg-secondary p-4">
                <p className="text-sm font-medium text-foreground">Suggested Development Path</p>
                <ul className="mt-2 space-y-2">
                  {talent.developmentPath.map((step: string, index: number) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                        {index + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>

              <Button variant="outline" className="w-full">
                Explore Development
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

"use client";

import { Button } from "@/shared/components/ui/button";
import { Badge } from "@/shared/components/ui/badge";
import {
  Target,
  Clock,
  Zap,
  Trophy,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { useChallengesViewModel } from "@/features/challenges/viewmodel/useChallengesViewModel";
import { DashboardCard } from "@/shared/components/dashboard/DashboardCard";
import { PageHeader } from "@/shared/components/dashboard/PageHeader";
import { ProgressBar } from "@/shared/components/dashboard/ProgressBar";
import { SkeletonCard } from "@/shared/components/dashboard/SkeletonCard";
import { SkeletonHeader } from "@/shared/components/dashboard/SkeletonHeader";
import { Challenge, ChallengesData } from "@/features/challenges/model/types";

export function ChallengesSkeleton() {
  return (
    <div className="space-y-6">
      <SkeletonHeader />
      <div className="grid gap-4 md:grid-cols-3">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
      <div className="space-y-4">
        <SkeletonCard className="h-64 h-auto" rows={3} />
      </div>
    </div>
  );
}

function getDifficultyColor(difficulty: string) {
  switch (difficulty) {
    case "Beginner":
      return "bg-primary/10 text-primary border-primary/20";
    case "Intermediate":
      return "bg-amber-500/10 text-amber-500 border-amber-500/20";
    case "Advanced":
      return "bg-red-500/10 text-red-500 border-red-500/20";
    default:
      return "bg-secondary text-muted-foreground";
  }
}

export function ChallengesView({
  initialData,
}: {
  initialData?: ChallengesData;
}) {
  const { data, isLoading } = useChallengesViewModel(initialData);

  if (isLoading && !data && !initialData) {
    return <ChallengesSkeleton />;
  }

  const activeData = data || initialData;
  if (!activeData) return null;

  const {
    active: activeChallenges,
    available: availableChallenges,
    completed: completedChallenges,
  } = activeData;

  return (
    <div className="space-y-6">
      <PageHeader
        title="Growth Challenges"
        description="Structured programs to build discipline and achieve breakthroughs."
      />

      <div className="grid gap-4 md:grid-cols-3">
        <DashboardCard title="Active Challenges" icon={Target}>
          <p className="text-2xl font-bold text-foreground">
            {activeChallenges.length}
          </p>
        </DashboardCard>
        <DashboardCard title="Completed" icon={Trophy}>
          <p className="text-2xl font-bold text-foreground">
            {completedChallenges.length}
          </p>
        </DashboardCard>
        <DashboardCard title="Current Streak" icon={Zap}>
          <p className="text-2xl font-bold text-foreground">4 days</p>
        </DashboardCard>
      </div>

      {activeChallenges.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" /> Active Challenge
          </h2>
          {activeChallenges.map((challenge: Challenge) => (
            <DashboardCard
              key={challenge.title}
              title={challenge.title}
              description={challenge.description}
              className="border-2 border-primary/50"
              headerAction={
                <Badge
                  variant="secondary"
                  className={getDifficultyColor(challenge.difficulty)}
                >
                  {challenge.difficulty}
                </Badge>
              }
            >
              <div className="space-y-6">
                <ProgressBar
                  value={
                    ((challenge.progress || 0) / (challenge.total || 1)) * 100
                  }
                  showValue
                  label={`Progress: ${challenge.progress}/${challenge.total} days`}
                />

                <div className="rounded-md bg-secondary/30 p-4 border border-border">
                  <p className="mb-3 font-semibold text-foreground">
                    Daily Tasks
                  </p>
                  <div className="grid gap-3 md:grid-cols-2">
                    {challenge.tasks?.map((task: any, index: number) => (
                      <div key={index} className="flex items-center gap-2">
                        <div
                          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${task.completed ? "bg-primary" : "border border-border bg-background"}`}
                        >
                          {task.completed && (
                            <CheckCircle className="h-3.5 w-3.5 text-primary-foreground" />
                          )}
                        </div>
                        <span
                          className={`text-sm ${task.completed ? "text-muted-foreground line-through" : "text-foreground font-medium"}`}
                        >
                          Day {index + 1}: {task.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="w-full shadow-lg shadow-primary/20">
                  Continue Today's Challenge
                </Button>
              </div>
            </DashboardCard>
          ))}
        </div>
      )}

      <div className="space-y-4">
        <h2 className="text-lg font-bold text-foreground">
          Available Challenges
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {availableChallenges.map((challenge: Challenge) => (
            <DashboardCard
              key={challenge.title}
              title={challenge.title}
              description={challenge.description}
              headerAction={
                <Badge
                  variant="secondary"
                  className={getDifficultyColor(challenge.difficulty)}
                >
                  {challenge.difficulty}
                </Badge>
              }
            >
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  {challenge.duration}
                </div>
                <div className="flex flex-wrap gap-2">
                  {challenge.benefits?.map((benefit: string) => (
                    <Badge
                      key={benefit}
                      variant="secondary"
                      className="rounded-md text-[10px] uppercase font-bold tracking-wider"
                    >
                      {benefit}
                    </Badge>
                  ))}
                </div>
                <Button variant="outline" className="w-full group">
                  Start Challenge
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </DashboardCard>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-bold text-foreground">
          Completed Challenges
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {completedChallenges.map((challenge: any) => (
            <div
              key={challenge.title}
              className="flex items-center justify-between rounded-lg border border-border bg-secondary/20 p-4 transition-colors hover:bg-secondary/30"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Trophy className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {challenge.title}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Completed {challenge.completedDate}
                  </p>
                </div>
              </div>
              <Badge
                variant="secondary"
                className="bg-primary/5 text-primary border-primary/10"
              >
                {challenge.duration}
              </Badge>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

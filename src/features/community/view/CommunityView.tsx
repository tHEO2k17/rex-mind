"use client"

import { Button } from "@/shared/components/ui/button"
import { Badge } from "@/shared/components/ui/badge"
import { Avatar, AvatarFallback } from "@/shared/components/ui/avatar"
import { Users, MessageCircle, Plus, ArrowRight, Globe } from "lucide-react"
import { useCommunityViewModel } from "@/features/community/viewmodel/useCommunityViewModel"
import { DashboardCard } from "@/shared/components/dashboard/DashboardCard"
import { PageHeader } from "@/shared/components/dashboard/PageHeader"
import { SkeletonCard } from "@/shared/components/dashboard/SkeletonCard"
import { SkeletonHeader } from "@/shared/components/dashboard/SkeletonHeader"

export function CommunitySkeleton() {
  return (
    <div className="space-y-6">
      <SkeletonHeader hasAction />
      <div className="grid gap-4 md:grid-cols-3">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          <div className="grid gap-4 md:grid-cols-2">
            <SkeletonCard rows={2} />
            <SkeletonCard rows={2} />
          </div>
        </div>
        <div className="space-y-4">
          <SkeletonCard className="h-96" rows={5} />
        </div>
      </div>
    </div>
  )
}

export function CommunityView({ initialData }: { initialData?: any }) {
  const { data, isLoading } = useCommunityViewModel()

  if (isLoading && !data && !initialData) {
    return <CommunitySkeleton />
  }

  const activeData = data || initialData;
  if (!activeData) return null;

  const { myCircles, discoverCircles, recentDiscussions } = activeData

  return (
    <div className="space-y-6">
      <PageHeader 
        title="Community Circles" 
        description="Connect with growth-minded peers for accountability and support."
      >
        <Button className="shadow-lg shadow-primary/20">
          <Plus className="mr-2 h-4 w-4" />
          Create Circle
        </Button>
      </PageHeader>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <DashboardCard title="My Circles" icon={Users}>
          <p className="text-2xl font-bold text-foreground">{myCircles?.length || 0}</p>
        </DashboardCard>
        <DashboardCard title="Discussions" icon={MessageCircle}>
          <p className="text-2xl font-bold text-foreground">14</p>
        </DashboardCard>
        <DashboardCard title="Connections" icon={Globe}>
          <p className="text-2xl font-bold text-foreground">42</p>
        </DashboardCard>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* My Circles */}
        <div className="space-y-4 lg:col-span-2">
          <h2 className="text-lg font-bold text-foreground">My Circles</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {myCircles?.map((circle: any) => (
              <DashboardCard 
                key={circle.name} 
                title={circle.name}
                description={circle.focus}
                className={circle.isActive ? "border-primary/50" : ""}
                headerAction={circle.isActive && (
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    Active
                  </Badge>
                )}
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    {circle.members} members
                  </div>
                  <div className="rounded-md bg-secondary/50 p-3 border border-border/50">
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Recent Discussion</p>
                    <p className="mt-1 text-sm text-foreground font-medium">{circle.recentTopic}</p>
                  </div>
                  <Button variant="outline" className="w-full group">
                    Enter Circle
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </DashboardCard>
            ))}
          </div>

          {/* Discover Circles */}
          <h2 className="text-lg font-bold text-foreground mt-8">Discover Circles</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {discoverCircles?.map((circle: any) => (
              <DashboardCard 
                key={circle.name} 
                title={circle.name}
                description={circle.focus}
              >
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">{circle.description}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    {circle.members} members
                  </div>
                  <Button variant="outline" className="w-full">
                    Join Circle
                  </Button>
                </div>
              </DashboardCard>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-foreground">Recent Discussions</h2>
          <DashboardCard title="" className="p-0">
            <div className="divide-y divide-border">
              {recentDiscussions?.map((discussion: any, index: number) => (
                <div key={index} className="p-4 transition-colors hover:bg-secondary/10">
                  <div className="flex items-start gap-3">
                    <Avatar className="h-9 w-9 border border-border">
                      <AvatarFallback className="bg-secondary text-xs font-bold text-foreground">
                        {discussion.author.split(" ").map((n: string) => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-foreground leading-tight">{discussion.topic}</p>
                      <div className="mt-1 flex items-center gap-2 text-[10px] text-muted-foreground font-medium uppercase tracking-tight">
                        <span>{discussion.author}</span>
                        <span className="text-border">•</span>
                        <span>{discussion.circle}</span>
                      </div>
                      <div className="mt-3 flex items-center gap-4 text-[10px] text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MessageCircle className="h-3 w-3" />
                          {discussion.replies} replies
                        </span>
                        <span>{discussion.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </DashboardCard>
        </div>
      </div>
    </div>
  )
}

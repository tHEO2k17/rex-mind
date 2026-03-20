"use client"

import { useState, useEffect } from "react"
import { Button } from "@/shared/components/ui/button"
import { Input } from "@/shared/components/ui/input"
import { Textarea } from "@/shared/components/ui/textarea"
import { Badge } from "@/shared/components/ui/badge"
import { User, Target, Lightbulb, Edit, Save } from "lucide-react"
import { useIdentityViewModel } from "@/features/identity/viewmodel/useIdentityViewModel"
import { useAppDispatch } from "@/shared/store/hooks"
import { updateIdentity } from "@/features/identity/model/identitySlice"
import { DashboardCard } from "@/shared/components/dashboard/DashboardCard"
import { PageHeader } from "@/shared/components/dashboard/PageHeader"
import { ProgressBar } from "@/shared/components/dashboard/ProgressBar"
import { SkeletonCard } from "@/shared/components/dashboard/SkeletonCard"
import { SkeletonHeader } from "@/shared/components/dashboard/SkeletonHeader"

export function IdentitySkeleton() {
  return (
    <div className="space-y-6">
      <SkeletonHeader />
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <SkeletonCard className="h-[350px]" rows={4} />
        </div>
        <div className="space-y-6">
          <SkeletonCard className="h-64" rows={4} />
          <SkeletonCard className="h-64" rows={3} />
        </div>
      </div>
    </div>
  )
}

export function IdentityView({ initialData }: { initialData?: any }) {
  const { data, isLoading } = useIdentityViewModel();
  const dispatch = useAppDispatch();
  
  const [identityName, setIdentityName] = useState("");
  const [visionStatement, setVisionStatement] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const activeData = data || initialData;
    if (activeData) {
      setIdentityName(activeData.identityName || "");
      setVisionStatement(activeData.visionStatement || "");
    }
  }, [data, initialData]);

  const handleSave = () => {
    dispatch(updateIdentity({ identityName, visionStatement }));
    setIsEditing(false);
  };

  if (isLoading && !data && !initialData) {
    return <IdentitySkeleton />;
  }

  const activeData = data || initialData;
  if (!activeData) return <IdentitySkeleton />;

  const { traits, goals } = activeData;

  return (
    <div className="space-y-6">
      <PageHeader 
        title="Identity Builder" 
        description="Design and build your ideal future self."
      >
        <Button 
          onClick={isEditing ? handleSave : () => setIsEditing(true)}
          className="flex items-center gap-2"
        >
          {isEditing ? (
            <>
              <Save className="h-4 w-4" />
              Save Identity
            </>
          ) : (
            <>
              <Edit className="h-4 w-4" />
              Edit Identity
            </>
          )}
        </Button>
      </PageHeader>

      <div className="grid gap-6 lg:grid-cols-2">
        <DashboardCard 
          title="Identity Name" 
          description="Your aspirational identity"
          icon={User}
        >
          {isEditing ? (
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Update Identity Name</label>
              <Input 
                placeholder="Enter a name for your future self..." 
                value={identityName} 
                onChange={(e) => setIdentityName(e.target.value)}
              />
            </div>
          ) : (
            <div className="rounded-md bg-secondary/50 p-4">
              <p className="text-2xl font-bold text-foreground">{identityName || "New Identity"}</p>
            </div>
          )}
        </DashboardCard>

        <DashboardCard 
          title="Core Traits" 
          description="The characteristics of your future self"
          icon={Lightbulb}
        >
          <div className="flex flex-wrap gap-2">
            {traits.map((trait: string) => (
              <Badge key={trait} variant="secondary" className="rounded-md px-3 py-1.5 text-sm font-medium">
                {trait}
              </Badge>
            ))}
          </div>
          {isEditing && (
            <div className="mt-4 space-y-2">
              <label className="text-sm font-medium text-foreground">Add New Trait</label>
              <div className="flex gap-2">
                <Input placeholder="e.g., Empathetic, Focused..." />
                <Button variant="outline">Add</Button>
              </div>
            </div>
          )}
        </DashboardCard>

        <DashboardCard 
          title="Vision Statement" 
          description="Your compelling future vision"
          icon={Target}
          className="lg:col-span-2"
        >
          {isEditing ? (
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Update Your Vision</label>
              <Textarea
                className="min-h-24"
                placeholder="Write a compelling vision of your future self..."
                value={visionStatement}
                onChange={(e) => setVisionStatement(e.target.value)}
              />
            </div>
          ) : (
            <div className="rounded-md bg-secondary/50 p-4">
              <p className="text-muted-foreground italic leading-relaxed">
                "{visionStatement || "Your vision statement will appear here..."}"
              </p>
            </div>
          )}
        </DashboardCard>

        <DashboardCard 
          title="Identity Goals" 
          description="Milestones for your growth"
          icon={Target}
          className="lg:col-span-2"
        >
          <div className="grid gap-4 md:grid-cols-3">
            {goals.map((goal: any) => (
              <div key={goal.title} className="rounded-md border border-border bg-background p-4 shadow-sm">
                <p className="font-semibold text-foreground mb-3">{goal.title}</p>
                <ProgressBar value={goal.progress} showValue label="Goal Progress" />
              </div>
            ))}
          </div>
        </DashboardCard>
      </div>
    </div>
  )
}

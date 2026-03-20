"use client"

import { useState, useEffect } from "react"
import { Button } from "@/shared/components/ui/button"
import { Input } from "@/shared/components/ui/input"
import { Label } from "@/shared/components/ui/label"
import { Switch } from "@/shared/components/ui/switch"
import { Avatar, AvatarFallback } from "@/shared/components/ui/avatar"
import { User, Bell, Shield, CreditCard, LogOut, Save } from "lucide-react"
import { useSettingsViewModel } from "@/features/settings/viewmodel/useSettingsViewModel"
import { DashboardCard } from "@/shared/components/dashboard/DashboardCard"
import { PageHeader } from "@/shared/components/dashboard/PageHeader"
import { SkeletonCard } from "@/shared/components/dashboard/SkeletonCard"
import { SkeletonHeader } from "@/shared/components/dashboard/SkeletonHeader"

export function SettingsSkeleton() {
  return (
    <div className="space-y-6">
      <SkeletonHeader />
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <SkeletonCard className="h-[450px]" rows={4} />
          <SkeletonCard className="h-[300px]" rows={4} />
        </div>
        <div className="space-y-6">
          <SkeletonCard className="h-64" rows={2} />
          <SkeletonCard className="h-10" hasIcon={false} />
        </div>
      </div>
    </div>
  )
}

export function SettingsView({ initialData }: { initialData?: any }) {
  const { data, isLoading, saveSettings } = useSettingsViewModel()
  
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    email: "",
    timezone: ""
  })

  useEffect(() => {
    const activeData = data || initialData;
    if (activeData?.profile) {
      setProfile(activeData.profile)
    }
  }, [data, initialData])

  if (isLoading && !data && !initialData) {
    return <SettingsSkeleton />
  }

  const activeData = data || initialData;
  if (!activeData) return <SettingsSkeleton />;

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({ ...profile, [e.target.id]: e.target.value })
  }

  const handleSaveProfile = () => {
    saveSettings({ profile })
  }

  const handleToggle = (category: 'notifications' | 'privacy', key: string) => {
    const section = activeData[category] as any
    saveSettings({
      [category]: {
        ...section,
        [key]: !section[key]
      }
    })
  }

  return (
    <div className="space-y-6">
      <PageHeader 
        title="Settings" 
        description="Manage your account preferences and privacy settings."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          {/* Profile Section */}
          <DashboardCard 
            title="Profile" 
            description="Update your personal information"
            icon={User}
          >
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarFallback className="bg-secondary text-lg text-foreground">
                    {profile.firstName[0]}{profile.lastName[0]}
                  </AvatarFallback>
                </Avatar>
                <Button variant="outline">Change Avatar</Button>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" value={profile.firstName} onChange={handleProfileChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" value={profile.lastName} onChange={handleProfileChange} />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={profile.email} onChange={handleProfileChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="timezone">Timezone</Label>
                <Input id="timezone" value={profile.timezone} onChange={handleProfileChange} />
              </div>
              <Button onClick={handleSaveProfile} className="flex items-center gap-2">
                <Save className="h-4 w-4" />
                Save Changes
              </Button>
            </div>
          </DashboardCard>

          {/* Notifications Section */}
          <DashboardCard 
            title="Notifications" 
            description="Configure how you receive updates"
            icon={Bell}
          >
            <div className="space-y-4">
              {Object.entries(activeData.notifications).map(([key, value]: [string, any]) => (
                <div key={key} className="flex items-center justify-between py-1">
                  <div>
                    <p className="font-medium text-foreground capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Enable or disable {key.toLowerCase()} notifications
                    </p>
                  </div>
                  <Switch 
                    checked={value} 
                    onCheckedChange={() => handleToggle('notifications', key)} 
                  />
                </div>
              ))}
            </div>
          </DashboardCard>

          {/* Privacy Section */}
          <DashboardCard 
            title="Privacy" 
            description="Control your data and visibility"
            icon={Shield}
          >
            <div className="space-y-4">
              {Object.entries(activeData.privacy).map(([key, value]: [string, any]) => (
                <div key={key} className="flex items-center justify-between py-1">
                  <div>
                    <p className="font-medium text-foreground capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Manage your {key.toLowerCase()} preference
                    </p>
                  </div>
                  <Switch 
                    checked={value} 
                    onCheckedChange={() => handleToggle('privacy', key)} 
                  />
                </div>
              ))}
            </div>
          </DashboardCard>
        </div>

        <div className="space-y-6">
          <DashboardCard 
            title="Account" 
            description="Manage subscription"
            icon={CreditCard}
          >
            <div className="space-y-4">
              <div className="rounded-md bg-secondary/50 p-4">
                <p className="text-sm font-semibold text-foreground">Pro Plan</p>
                <p className="text-xs text-muted-foreground">Renews March 25, 2026</p>
              </div>
              <Button variant="outline" className="w-full">Manage Subscription</Button>
            </div>
          </DashboardCard>

          <Button variant="outline" className="w-full justify-start text-destructive hover:text-destructive">
            <LogOut className="mr-2 h-4 w-4" />
            Sign Out
          </Button>
        </div>
      </div>
    </div>
  )
}

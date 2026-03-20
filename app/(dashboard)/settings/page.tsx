import { Suspense } from "react"
import { settingsService } from "@/features/settings/services/settings.service"
import { SettingsView, SettingsSkeleton } from "@/features/settings/view/SettingsView"

async function SettingsContent() {
  const initialData = await settingsService.getSettings();
  return <SettingsView initialData={initialData} />;
}

export default function SettingsPage() {
  return (
    <Suspense fallback={<SettingsSkeleton />}>
      <SettingsContent />
    </Suspense>
  )
}

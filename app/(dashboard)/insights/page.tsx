import { Suspense } from "react"
import { insightsService } from "@/features/insights/services/insights.service"
import { InsightsView, InsightsSkeleton } from "@/features/insights/view/InsightsView"

async function InsightsContent() {
  const initialData = await insightsService.getInsightsData();
  return <InsightsView initialData={initialData} />;
}

export default function InsightsPage() {
  return (
    <Suspense fallback={<InsightsSkeleton />}>
      <InsightsContent />
    </Suspense>
  )
}

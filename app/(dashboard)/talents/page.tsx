import { Suspense } from "react"
import { talentsService } from "@/features/talents/services/talents.service"
import { TalentsView, TalentsSkeleton } from "@/features/talents/view/TalentsView"

async function TalentsContent() {
  const initialData = await talentsService.getDetailedTalents();
  return <TalentsView initialData={initialData} />;
}

export default function TalentDiscoveryPage() {
  return (
    <Suspense fallback={<TalentsSkeleton />}>
      <TalentsContent />
    </Suspense>
  )
}

import { Suspense } from "react"
import { challengesService } from "@/features/challenges/services/challenges.service"
import { ChallengesView, ChallengesSkeleton } from "@/features/challenges/view/ChallengesView"

async function ChallengesContent() {
  const initialData = await challengesService.getChallenges();
  return <ChallengesView initialData={initialData} />;
}

export default function GrowthChallengesPage() {
  return (
    <Suspense fallback={<ChallengesSkeleton />}>
      <ChallengesContent />
    </Suspense>
  )
}

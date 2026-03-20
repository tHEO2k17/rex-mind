import { Suspense } from "react"
import { communityService } from "@/features/community/services/community.service"
import { CommunityView, CommunitySkeleton } from "@/features/community/view/CommunityView"

async function CommunityContent() {
  const initialData = await communityService.getCommunity();
  return <CommunityView initialData={initialData} />;
}

export default function CommunityCirclesPage() {
  return (
    <Suspense fallback={<CommunitySkeleton />}>
      <CommunityContent />
    </Suspense>
  )
}

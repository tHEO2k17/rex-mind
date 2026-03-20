import { Suspense } from "react"
import { identityService } from "@/features/identity/services/identity.service"
import { IdentityView, IdentitySkeleton } from "@/features/identity/view/IdentityView"

async function IdentityContent() {
  const initialData = await identityService.getIdentity();
  return <IdentityView initialData={initialData} />;
}

export default function IdentityBuilderPage() {
  return (
    <Suspense fallback={<IdentitySkeleton />}>
      <IdentityContent />
    </Suspense>
  )
}

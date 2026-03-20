import { Suspense } from "react"
import { mentorService } from "@/features/mentor/services/mentor.service"
import { MentorView, MentorSkeleton } from "@/features/mentor/view/MentorView"

async function MentorContent() {
  const initialData = await mentorService.getMentor();
  return <MentorView initialData={initialData} />;
}

export default function AIMentorPage() {
  return (
    <Suspense fallback={<MentorSkeleton />}>
      <MentorContent />
    </Suspense>
  )
}

import { Suspense, use } from "react"
import { DashboardView, DashboardSkeleton } from "@/features/dashboard/view/DashboardView"

async function DashboardContent() {
  const [talentsRes, insightsRes, identityRes] = await Promise.all([
    fetch("http://localhost:4000/talents", { cache: "no-store" }),
    fetch("http://localhost:4000/insights", { cache: "no-store" }),
    fetch("http://localhost:4000/identity", { cache: "no-store" })
  ]);

  if (!talentsRes.ok || !insightsRes.ok || !identityRes.ok) {
    throw new Error("Failed to fetch initial dashboard RSC data from json-server");
  }

  const talents = await talentsRes.json();
  const insights = await insightsRes.json();
  const identity = await identityRes.json();

  const identityAlignment = identity.goals.length > 0
    ? Math.round(identity.goals.reduce((acc: number, goal: any) => acc + goal.progress, 0) / identity.goals.length)
    : 0;

  const dailyFocus = [
    "Complete deep work session",
    "Avoid reactive tasks",
    `Embody ${identity.traits[0] || 'your highest self'} today`
  ];

  const initialData = { talents, insights, identityAlignment, dailyFocus };
  
  return <DashboardView initialData={initialData} />;
}

export default function DashboardPage() {
  return (
    <Suspense fallback={<DashboardSkeleton />}>
      <DashboardContent />
    </Suspense>
  )
}

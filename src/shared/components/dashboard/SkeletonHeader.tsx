import { Skeleton } from "@/shared/components/ui/skeleton"
import { cn } from "@/shared/utils/utils"

interface SkeletonHeaderProps {
  className?: string
  hasAction?: boolean
}

export function SkeletonHeader({ className, hasAction = false }: SkeletonHeaderProps) {
  return (
    <div className={cn("flex items-center justify-between mb-6", className)}>
      <div className="space-y-2">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-4 w-72" />
      </div>
      {hasAction && <Skeleton className="h-10 w-32 rounded-md" />}
    </div>
  )
}

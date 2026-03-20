import { Skeleton } from "@/shared/components/ui/skeleton"
import { cn } from "@/shared/utils/utils"

interface SkeletonCardProps {
  className?: string
  hasIcon?: boolean
  rows?: number
}

export function SkeletonCard({ className, hasIcon = true, rows = 1 }: SkeletonCardProps) {
  return (
    <div className={cn("rounded-xl border border-border bg-card p-6 shadow-sm space-y-4", className)}>
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-3">
          {hasIcon && <Skeleton className="h-9 w-9 rounded-md" />}
          <div className="space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-3 w-32" />
          </div>
        </div>
      </div>
      <div className="space-y-3 pt-2">
        {Array.from({ length: rows }).map((_, i) => (
          <Skeleton key={i} className={cn("h-4 w-full", i === rows - 1 && rows > 1 && "w-2/3")} />
        ))}
      </div>
    </div>
  )
}

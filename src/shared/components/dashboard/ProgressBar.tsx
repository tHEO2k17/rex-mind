import React from "react"
import { cn } from "@/shared/utils/utils"

interface ProgressBarProps {
  value: number
  max?: number
  showValue?: boolean
  className?: string
  barClassName?: string
  label?: string
}

export function ProgressBar({
  value,
  max = 100,
  showValue = false,
  className,
  barClassName,
  label
}: ProgressBarProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100)

  return (
    <div className={cn("space-y-2", className)}>
      {(label || showValue) && (
        <div className="flex justify-between text-sm">
          {label && <span className="text-muted-foreground">{label}</span>}
          {showValue && <span className="font-medium text-foreground">{Math.round(percentage)}%</span>}
        </div>
      )}
      <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
        <div
          className={cn(
            "h-full rounded-full bg-primary transition-all duration-500",
            barClassName
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}

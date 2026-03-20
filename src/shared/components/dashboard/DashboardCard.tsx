import React from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/shared/components/ui/card"
import { LucideIcon } from "lucide-react"
import { cn } from "@/shared/utils/utils"

interface DashboardCardProps {
  title: string
  description?: string
  icon?: LucideIcon
  children: React.ReactNode
  className?: string
  headerAction?: React.ReactNode
  isHighlighted?: boolean
}

export function DashboardCard({
  title,
  description,
  icon: Icon,
  children,
  className,
  headerAction,
  isHighlighted = false
}: DashboardCardProps) {
  return (
    <Card className={cn(
      "border border-border shadow-sm transition-all duration-200",
      isHighlighted && "border-primary ring-1 ring-primary/20",
      className
    )}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <div className="flex items-center gap-3">
          {Icon && (
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary">
              <Icon className="h-5 w-5" />
            </div>
          )}
          <div>
            <CardTitle className="text-base font-semibold text-foreground">{title}</CardTitle>
            {description && (
              <CardDescription className="text-xs text-muted-foreground mt-0.5">
                {description}
              </CardDescription>
            )}
          </div>
        </div>
        {headerAction}
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  )
}

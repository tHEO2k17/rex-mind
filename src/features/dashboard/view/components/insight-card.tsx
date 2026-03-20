import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card"
import { cn } from "@/shared/utils/utils"
import type { LucideIcon } from "lucide-react"

interface InsightCardProps {
  title: string
  children: React.ReactNode
  icon?: LucideIcon
  className?: string
}

export function InsightCard({ title, children, icon: Icon, className }: InsightCardProps) {
  return (
    <Card className={cn("border border-border shadow-sm", className)}>
      <CardHeader className="flex flex-row items-center gap-3 pb-2">
        {Icon && (
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary">
            <Icon className="h-5 w-5 text-primary-foreground" />
          </div>
        )}
        <CardTitle className="text-base font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}

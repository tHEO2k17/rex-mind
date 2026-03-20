import { Card, CardContent } from "@/shared/components/ui/card"
import { ProgressBar } from "./progress-bar"

interface TalentCardProps {
  name: string
  confidence: number
  description?: string
}

export function TalentCard({ name, confidence, description }: TalentCardProps) {
  return (
    <Card className="border border-border shadow-sm">
      <CardContent className="pt-4">
        <div className="mb-3 flex items-center justify-between">
          <h4 className="font-semibold text-foreground">{name}</h4>
          <span className="text-sm font-medium text-primary">{confidence}%</span>
        </div>
        <ProgressBar value={confidence} showLabel={false} />
        {description && (
          <p className="mt-3 text-sm text-muted-foreground">{description}</p>
        )}
      </CardContent>
    </Card>
  )
}

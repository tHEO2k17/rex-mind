"use client"

import { useSidebar } from "./sidebar-context"
import { cn } from "@/shared/utils/utils"

export function MainContent({ children }: { children: React.ReactNode }) {
  const { isCollapsed } = useSidebar()

  return (
    <div
      className={cn(
        "pb-16 transition-all duration-300 md:pb-0",
        isCollapsed ? "md:ml-16" : "md:ml-64"
      )}
    >
      {children}
    </div>
  )
}

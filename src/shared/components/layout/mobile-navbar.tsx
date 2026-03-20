"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import {
  LayoutDashboard,
  User,
  Brain,
  Sparkles,
  MessageCircle,
  Target,
  Users,
  Settings,
  MoreHorizontal,
  X,
} from "lucide-react"
import { cn } from "@/shared/utils/utils"
import { ThemeToggle } from "@/shared/components/theme-toggle"
import { Button } from "@/shared/components/ui/button"

const primaryNavItems = [
  { href: "/dashboard", label: "Home", icon: LayoutDashboard },
  { href: "/dashboard/identity", label: "Identity", icon: User },
  { href: "/dashboard/mentor", label: "Mentor", icon: MessageCircle },
  { href: "/dashboard/challenges", label: "Challenges", icon: Target },
]

const moreNavItems = [
  { href: "/dashboard/insights", label: "Cognitive Insights", icon: Brain },
  { href: "/dashboard/talents", label: "Talent Discovery", icon: Sparkles },
  { href: "/dashboard/community", label: "Community Circles", icon: Users },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
]

export function MobileNavbar() {
  const pathname = usePathname()
  const [isMoreOpen, setIsMoreOpen] = useState(false)

  return (
    <>
      {/* More menu overlay */}
      {isMoreOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
          onClick={() => setIsMoreOpen(false)}
        />
      )}

      {/* More menu panel */}
      <div
        className={cn(
          "fixed bottom-16 left-0 right-0 z-50 border-t border-border bg-background p-4 transition-transform duration-300 md:hidden",
          isMoreOpen ? "translate-y-0" : "translate-y-full"
        )}
      >
        <div className="mb-4 flex items-center justify-between">
          <span className="text-sm font-medium text-foreground">More Options</span>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMoreOpen(false)}
              className="h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <nav className="grid grid-cols-2 gap-2">
          {moreNavItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMoreOpen(false)}
                className={cn(
                  "flex items-center gap-3 rounded-lg p-3 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                )}
              >
                <item.icon className="h-5 w-5 shrink-0" />
                {item.label}
              </Link>
            )
          })}
        </nav>
      </div>

      {/* Bottom navbar */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 flex h-16 items-center justify-around border-t border-border bg-background px-2 md:hidden">
        {primaryNavItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative flex flex-col items-center justify-center gap-1 px-3 py-2",
                isActive ? "text-foreground" : "text-muted-foreground"
              )}
            >
              {isActive && (
                <span className="absolute top-0 left-1/2 h-1 w-8 -translate-x-1/2 rounded-b-full bg-primary" />
              )}
              <item.icon className="h-5 w-5" />
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          )
        })}
        <button
          onClick={() => setIsMoreOpen(!isMoreOpen)}
          className={cn(
            "relative flex flex-col items-center justify-center gap-1 px-3 py-2",
            isMoreOpen ? "text-foreground" : "text-muted-foreground"
          )}
        >
          {isMoreOpen && (
            <span className="absolute top-0 left-1/2 h-1 w-8 -translate-x-1/2 rounded-b-full bg-primary" />
          )}
          <MoreHorizontal className="h-5 w-5" />
          <span className="text-[10px] font-medium">More</span>
        </button>
      </nav>
    </>
  )
}

"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  User,
  Brain,
  Sparkles,
  MessageCircle,
  Target,
  Users,
  Settings,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react"
import { cn } from "@/shared/utils/utils"
import { useSidebar } from "./sidebar-context"
import { ThemeToggle } from "@/shared/components/theme-toggle"
import { Button } from "@/shared/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/shared/components/ui/tooltip"

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/identity", label: "Identity Builder", icon: User },
  { href: "/insights", label: "Cognitive Insights", icon: Brain },
  { href: "/talents", label: "Talent Discovery", icon: Sparkles },
  { href: "/mentor", label: "AI Mentor", icon: MessageCircle },
  { href: "/challenges", label: "Growth Challenges", icon: Target },
  { href: "/community", label: "Community Circles", icon: Users },
  { href: "/settings", label: "Settings", icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()
  const { isCollapsed, toggleSidebar } = useSidebar()

  return (
    <TooltipProvider delayDuration={0}>
      <aside
        className={cn(
          "fixed left-0 top-0 z-40 hidden h-screen flex-col border-r border-border bg-background transition-all duration-300 md:flex",
          isCollapsed ? "w-16" : "w-64"
        )}
      >
        <div
          className={cn(
            "flex h-16 items-center border-b border-border",
            isCollapsed ? "justify-center px-2" : "gap-2 px-6"
          )}
        >
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary">
            <span className="text-sm font-bold text-primary-foreground">R</span>
          </div>
          {!isCollapsed && (
            <span className="text-xl font-semibold text-foreground">RexMind</span>
          )}
        </div>

        <nav className="flex flex-1 flex-col gap-1 p-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            const linkContent = (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative flex items-center rounded-md text-sm font-medium transition-colors",
                  isCollapsed ? "justify-center p-2.5" : "gap-3 px-3 py-2.5",
                  isActive
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                )}
              >
                {isActive && !isCollapsed && (
                  <span className="absolute left-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-r-full bg-primary" />
                )}
                {isActive && isCollapsed && (
                  <span className="absolute bottom-0 left-1/2 h-1 w-6 -translate-x-1/2 rounded-t-full bg-primary" />
                )}
                <item.icon className="h-5 w-5 shrink-0" />
                {!isCollapsed && item.label}
              </Link>
            )

            if (isCollapsed) {
              return (
                <Tooltip key={item.href}>
                  <TooltipTrigger asChild>{linkContent}</TooltipTrigger>
                  <TooltipContent side="right" sideOffset={10}>
                    {item.label}
                  </TooltipContent>
                </Tooltip>
              )
            }

            return linkContent
          })}
        </nav>

        <div
          className={cn(
            "flex items-center border-t border-border p-2",
            isCollapsed ? "flex-col gap-2" : "justify-between px-4"
          )}
        >
          <ThemeToggle />
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleSidebar}
                className="h-9 w-9 shrink-0"
              >
                {isCollapsed ? (
                  <ChevronsRight className="h-4 w-4" />
                ) : (
                  <ChevronsLeft className="h-4 w-4" />
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent side={isCollapsed ? "right" : "top"}>
              {isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            </TooltipContent>
          </Tooltip>
        </div>
      </aside>
    </TooltipProvider>
  )
}

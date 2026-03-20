"use client"

import { Bell, Search } from "lucide-react"
import { Button } from "@/shared/components/ui/button"
import { Input } from "@/shared/components/ui/input"
import { Avatar, AvatarFallback } from "@/shared/components/ui/avatar"

export function TopNav() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-ce nter justify-between border-b border-border bg-background px-6">
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-64 pl-9"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-primary" />
        </Button>
        <Avatar className="h-9 w-9">
          <AvatarFallback className="bg-secondary text-foreground">T</AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}

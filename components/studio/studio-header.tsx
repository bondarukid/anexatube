"use client"

import { Button } from "@/components/ui/button"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { ThemeModeToggle } from "@/components/theme-mode-toggle"
import { PROJECT_NAME } from "@/lib/project"
import { UploadIcon } from "lucide-react"

export function StudioHeader() {
  return (
    <header className="sticky top-0 z-20 flex h-14 shrink-0 items-center gap-3 border-b px-4">
      <SidebarTrigger className="-ml-1 md:hidden" />

      <div className="flex min-w-0 flex-1 items-center gap-2">
        <span className="truncate text-sm font-medium text-muted-foreground">
          {PROJECT_NAME} Studio
        </span>
      </div>

      <ThemeModeToggle />

      <Button variant="outline">
        <UploadIcon />
        Upload
      </Button>
    </header>
  )
}

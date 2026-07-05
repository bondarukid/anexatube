"use client"

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { useCountryCode } from "@/hooks/use-country-code"
import { PROJECT_NAME } from "@/lib/project"
import { PlayIcon } from "lucide-react"

type SidebarBrandProps = {
  site?: "consumer" | "studio"
}

export function SidebarBrand({ site = "consumer" }: SidebarBrandProps) {
  const countryCode = useCountryCode()

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          size="lg"
          className="!gap-1.5 hover:bg-transparent active:bg-transparent"
          render={<a href="/" aria-label={site === "studio" ? "Studio home" : "Home"} />}
        >
          <div className="flex min-w-0 items-center gap-1">
            <div className="flex size-6 shrink-0 items-center justify-center rounded-md bg-[#FF0000]">
              <PlayIcon className="size-3.5 fill-white text-white" />
            </div>
            <span className="truncate text-base leading-none font-semibold tracking-tight">
              {site === "studio" ? `${PROJECT_NAME} Studio` : PROJECT_NAME}
            </span>
          </div>
          {countryCode ? (
            <sup
              suppressHydrationWarning
              className="ml-1.5 -mt-2.5 shrink-0 text-[10px] font-normal text-muted-foreground"
            >
              {countryCode}
            </sup>
          ) : null}
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}

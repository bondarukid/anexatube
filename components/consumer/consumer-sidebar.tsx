"use client"

import * as React from "react"

import { NavExplore } from "@/components/nav-explore"
import { NavFooter } from "@/components/nav-footer"
import { NavMain } from "@/components/nav-main"
import { NavMore } from "@/components/nav-more"
import { NavReport } from "@/components/nav-report"
import { NavSubscriptions } from "@/components/nav-subscriptions"
import { NavUser } from "@/components/nav-user"
import { NavYou } from "@/components/nav-you"
import { SidebarBrand } from "@/components/sidebar-brand"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { demoSubscriptions, demoUser } from "@/lib/demo-data"

export function ConsumerSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader className="px-2 py-3">
        <SidebarBrand site="consumer" />
      </SidebarHeader>
      <SidebarContent>
        <NavMain />
        <NavSubscriptions channels={demoSubscriptions} />
        <NavYou />
        <NavMore />
        <NavExplore />
        <NavReport />
        <NavFooter />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={demoUser} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

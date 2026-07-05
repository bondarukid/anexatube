"use client"

import * as React from "react"

import { NavUser } from "@/components/nav-user"
import { SidebarBrand } from "@/components/sidebar-brand"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { demoUser } from "@/lib/demo-data"
import {
  BarChart3Icon,
  ClapperboardIcon,
  LayoutDashboardIcon,
  MessageSquareIcon,
  SettingsIcon,
  UsersIcon,
} from "lucide-react"

const navButtonClass = "h-10 rounded-lg"
const iconClass = "!size-6 shrink-0"

const studioNavItems = [
  { title: "Dashboard", icon: LayoutDashboardIcon, href: "/" },
  { title: "Content", icon: ClapperboardIcon, href: "/content" },
  { title: "Analytics", icon: BarChart3Icon, href: "/analytics" },
  { title: "Comments", icon: MessageSquareIcon, href: "/comments" },
  { title: "Audience", icon: UsersIcon, href: "/audience" },
  { title: "Settings", icon: SettingsIcon, href: "/settings" },
]

export function StudioSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader className="px-2 py-3">
        <SidebarBrand site="studio" />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Channel</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {studioNavItems.map(({ title, icon: Icon, href }) => (
                <SidebarMenuItem key={title}>
                  <SidebarMenuButton
                    className={navButtonClass}
                    render={<a href={href} />}
                  >
                    <Icon className={iconClass} />
                    <span>{title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={demoUser} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

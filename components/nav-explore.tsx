import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { demoExploreNavItems } from "@/lib/demo-data"
import { ChevronDownIcon } from "lucide-react"

const navButtonClass = "h-10 rounded-lg"

export function NavExplore() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="h-10 px-2 text-sm font-semibold text-sidebar-foreground">
        Explore
      </SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {demoExploreNavItems.map(({ title, icon: Icon }) => (
            <SidebarMenuItem key={title}>
              <SidebarMenuButton
                className={navButtonClass}
                render={<a href="#" />}
              >
                <Icon />
                <span>{title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
          <SidebarMenuItem>
            <SidebarMenuButton
              className={navButtonClass}
              render={<a href="#" />}
            >
              <ChevronDownIcon />
              <span>Show more</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}

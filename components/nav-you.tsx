import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { demoYouNavItems } from "@/lib/demo-data"
import { ChevronRightIcon } from "lucide-react"

const navButtonClass = "h-10 rounded-lg"

export function NavYou() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="h-10 gap-1 px-2 text-sm font-semibold text-sidebar-foreground">
        You
        <ChevronRightIcon className="ml-auto size-4 opacity-70" />
      </SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {demoYouNavItems.map(({ title, icon: Icon }) => (
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
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}

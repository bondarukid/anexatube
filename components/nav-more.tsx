import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { demoMoreNavItems } from "@/lib/demo-data"
import { moreFromProjectLabel } from "@/lib/project"

const navButtonClass = "h-10 rounded-lg"

export function NavMore() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="h-10 px-2 text-sm font-semibold text-sidebar-foreground">
        {moreFromProjectLabel}
      </SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {demoMoreNavItems.map(({ title, icon: Icon }) => (
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

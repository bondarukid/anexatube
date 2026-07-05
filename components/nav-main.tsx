import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { GalleryVerticalEndIcon, HomeIcon } from "lucide-react"

const navButtonClass = "h-10 rounded-lg"
const iconClass = "!size-6 shrink-0"

export function NavMain() {
  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              isActive
              className={navButtonClass}
              render={<a href="#" />}
            >
              <HomeIcon className={`${iconClass} fill-current`} />
              <span>Home</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              className={navButtonClass}
              render={<a href="#" />}
            >
              <GalleryVerticalEndIcon className={iconClass} />
              <span>Shorts</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}

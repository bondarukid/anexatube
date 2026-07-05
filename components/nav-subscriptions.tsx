"use client"

import * as React from "react"

import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import {
  INITIAL_SUBSCRIPTION_COUNT,
  type SubscriptionChannel,
} from "@/lib/demo-data"
import { getInitialsFromName } from "@/lib/utils"
import {
  ChevronDownIcon,
  ChevronRightIcon,
  ChevronUpIcon,
} from "lucide-react"

const navButtonClass = "h-10 rounded-lg"

export function NavSubscriptions({
  channels,
}: {
  channels: SubscriptionChannel[]
}) {
  const [expanded, setExpanded] = React.useState(false)

  const visibleChannels = expanded
    ? channels
    : channels.slice(0, INITIAL_SUBSCRIPTION_COUNT)

  return (
    <SidebarGroup>
      <SidebarGroupLabel className="h-10 gap-1 px-2 text-sm font-semibold text-sidebar-foreground">
        Subscriptions
        <ChevronRightIcon className="ml-auto size-4 opacity-70" />
      </SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {visibleChannels.map((channel) => (
            <SidebarMenuItem key={channel.id}>
              <SidebarMenuButton
                className={navButtonClass}
                render={<a href="#" />}
              >
                <Avatar
                  className="size-6"
                  aria-label={`${channel.name} channel avatar`}
                >
                  <AvatarFallback className="bg-muted text-[10px] font-medium">
                    {getInitialsFromName(channel.name)}
                  </AvatarFallback>
                </Avatar>
                <span className="flex-1 truncate">{channel.name}</span>
                {channel.hasNew ? (
                  <span className="size-1.5 shrink-0 rounded-full bg-[#3ea6ff]" />
                ) : null}
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
          <SidebarMenuItem>
            <SidebarMenuButton
              className={navButtonClass}
              onClick={() => setExpanded((value) => !value)}
            >
              {expanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
              <span>{expanded ? "Show less" : "Show more"}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}

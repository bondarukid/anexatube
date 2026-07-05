import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

type AppShellProps = {
  sidebar: React.ReactNode
  header: React.ReactNode
  children: React.ReactNode
}

export function AppShell({ sidebar, header, children }: AppShellProps) {
  return (
    <SidebarProvider>
      {sidebar}
      <SidebarInset>
        {header}
        {children}
      </SidebarInset>
    </SidebarProvider>
  )
}

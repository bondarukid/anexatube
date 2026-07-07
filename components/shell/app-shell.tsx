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
      <SidebarInset className="max-h-svh overflow-hidden">
        {header}
        <div className="min-h-0 flex-1 overflow-y-auto">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  )
}

import { AppShell } from "@/components/shell/app-shell"
import { StudioHeader } from "@/components/studio/studio-header"
import { StudioSidebar } from "@/components/studio/studio-sidebar"

export default function StudioLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <AppShell sidebar={<StudioSidebar />} header={<StudioHeader />}>
      {children}
    </AppShell>
  )
}
